import React from 'react';
import ImagenLogo from './ImagenLogo';
import { Link } from 'react-router-dom';
import useActiveRoute from 'hooks/useActiveRoute';
import { useAuth0 } from "@auth0/auth0-react";
import PrivateComponent from './PrivateComponent';

const Sidebar = () => {
    const { user, logout } = useAuth0();

    const cerrarSesion = () => {
        logout({ returnTo: 'https://salty-fjord-61443.herokuapp.com/admin' })
        localStorage.setItem('token', null);
    }

    return (
        <nav className='hidden sm:flex sm:w-72 border border-gray-300 h-full flex-col bg-gray-400 p-4'>
            <Link to='/admin'>
                <ImagenLogo />
            </Link>
            <div className='my-4'>
                <Ruta icono='fa-solid fa-user' ruta='/admin/perfil' nombre='Perfil' usuario={user} />
                <PrivateComponent roleList={['admin']}>
                    <Ruta icono='fa-solid fa-car-side' ruta='/admin/vehiculos' nombre='Vehículos' />
                </PrivateComponent>
                <PrivateComponent roleList={['admin']}>
                    <Ruta icono='fa-solid fa-cart-shopping' ruta='/admin/ventas' nombre='Ventas' />
                </PrivateComponent>
                <PrivateComponent roleList={['admin']}>
                    <Ruta icono='fa-solid fa-users' ruta='/admin/usuarios' nombre='Usiarios' />
                </PrivateComponent>
            </div>
            <button
                onClick={() => cerrarSesion()}
            >
                Cerrar Sesión
            </button>
        </nav>
    );
};

const Ruta = ({ icono, ruta, nombre, usuario }) => {
    //console.log('usuario',usuario);
    const isActive = useActiveRoute(ruta);

    return (
        <Link to={ruta}>
            <button
                className={`p-1 my-2 w-full text-white 
                    ${isActive ? 'bg-indigo-700' : 'bg-gray-700'
                    } flex items-center rounded-md hover:bg-indigo-900`}
            >
                {usuario ? (
                    <>
                        {/* <img src={usuario.picture} className='h-5 w-5 rounded-full'/> */}
                        {usuario.name}
                    </>
                ) : (
                    <>
                        <i className={`${icono} w-10`}></i>
                        {nombre}
                    </>
                )}

            </button>
        </Link>
    );
};

export default Sidebar;         
