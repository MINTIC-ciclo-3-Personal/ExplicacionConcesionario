import useActiveRoute from 'hooks/useActiveRoute'
import React from 'react'
import { Link } from 'react-router-dom'
import ImagenLogo from './ImagenLogo'

const Sidebar = () => {
    return (
        <nav className='hidden md:flex md:w-72 w-72 border border-gray-300 h-full flex-col bg-gray-400 p-4'>
            <Link to='/admin'>
                <ImagenLogo />
            </Link>
            <div className='my-4'>
                <Ruta icono='fa-solid fa-user' ruta='/admin/perfil' nombre='Perfil' />
                <Ruta icono='fa-solid fa-car-side' ruta='/admin/vehiculos' nombre='Vehículos' />
                <Ruta icono='fa-solid fa-cart-shopping' ruta='/admin/ventas' nombre='Ventas' />
                <Ruta icono='fa-solid fa-users' ruta='/admin/usuarios' nombre='Usiarios' />
            </div>
            <button>Cerrar Cesión</button>
        </nav>
    )
}

const Ruta = ({ icono, ruta, nombre }) => {

    const isActive = useActiveRoute(ruta);
    return (
        <Link to={ruta}>
            <button
                className={`p-1 my-2 w-full text-white 
                ${isActive ? 'bg-indigo-700' : 'bg-gray-700'
                    } flex items-center rounded-md hover:bg-indigo-900`}
            >
                <i className={`${icono} w-10`}></i>
                {nombre}
            </button>
        </Link>
    )
}

export default Sidebar             
