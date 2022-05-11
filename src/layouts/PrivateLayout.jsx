import Sidebar from 'components/Sidebar';
import React, { useEffect, useState } from 'react'
import SidebarResponsive from 'components/SidebarResponsive';
import { useUser } from 'context/userContext';
import { useAuth0 } from '@auth0/auth0-react';
import ReactLoading from 'react-loading'
import { obtenerDatosUsuario } from 'utils/api';


const PrivateLayout = ({children}) => {
    const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently, logout} = useAuth0();
    const [loadingUserInformation, setLoadingUserInformation] = useState(false);
    const {setUserData} = useUser ();

    useEffect(() => {
        const fetchAuth0Token = async () => {
            try {
                /* //si se quieren hacer validaciones con el token
                if (localStorage.getItem('token')) {
                    //validar fecha de expiracion del token
                } else {
                    //pedir token
                } */

                //1. pedir token a auth0
                setLoadingUserInformation(true);
                const accessToken = await getAccessTokenSilently({
                    audience: 'api-auth-concesionario-mintic',
                });
                //2. recibir token de auth0
                localStorage.setItem('token', accessToken)
                await obtenerDatosUsuario(
                    (response) => {
                        console.log('respuesta con los datos del usuario', response)
                        setUserData(response.data);
                        setLoadingUserInformation(false);
                    },
                    (err) => {
                        console.log('err', err)
                        setLoadingUserInformation(false);
                        logout({returnTo: 'http://localhost:3000/admin'})
                    })
                //console.log(accessToken)
            } catch (e) {
                console.log('catch: ', e.message);
            }
        };
        if (isAuthenticated) {
            fetchAuth0Token();
        }
    }, [isAuthenticated, getAccessTokenSilently, setUserData]);
    if (isLoading || loadingUserInformation ) return <ReactLoading type='bars' color='#abc123' height={'10%'} width={'10%'} />;
    if (!isAuthenticated) {
        return loginWithRedirect(); 
    }

    return (

            <div className='flex w-screen h-screen'>
                <div className='flex flex-col md:flex-row flex-nowrap h-full w-full'>
                    <Sidebar/>
                    <SidebarResponsive />
                    <main className='flex w-full overflow-y-scroll items-center justify-center'>
                        {children}
                    </main>
                </div>
            </div>
    );
};

export default PrivateLayout;