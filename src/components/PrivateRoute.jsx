import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading'
import { obtenerDatosUsuario } from 'utils/api';
import { useUser } from 'context/userContext';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();
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
                const accessToken = await getAccessTokenSilently({
                    audience: 'api-auth-concesionario-mintic',
                });
                //2. recibir token de auth0
                localStorage.setItem('token', accessToken)
                await obtenerDatosUsuario(
                    (response) => {
                        console.log('respuesta con los datos del usuario', response)
                        setUserData(response.data);
                    },
                    (err) => {
                        console.log('err', err)
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


    if (isLoading) return <ReactLoading type='bars' color='#abc123' height={'10%'} width={'10%'} />;
    if (!isAuthenticated) {
        return loginWithRedirect();
    }

    return <>{children}</>;
    /* return isAuthenticated ? (
    <>{children}</>
    ) : (
        <div>
            <div className='text-9xl text-red-500'>
                No estas autorizado para ver este sitio
            </div>
            <Link to='/'>
                <span>Llevame al home</span>
            </Link>
        </div>
    ) */
}

export default PrivateRoute