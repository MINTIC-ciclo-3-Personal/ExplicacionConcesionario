import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SidebarResponsive = () => {
    const [mostrarNavegacion, setMostrarNavegacion] = useState(false)

    return (
        <div
            className='md:hidden'
            onClick={() => {
                setMostrarNavegacion(!mostrarNavegacion)
            }}
        >
            <i className={`mx-2 ${mostrarNavegacion ? "fa-solid fa-x" : "fa-solid fa-bars"} hover:text-yellow-600`}></i>
            {mostrarNavegacion &&
                <ul className='bg-gray-700 flex flex-col mx-2'>
                    <ResponsiveRoute icono='fa-solid fa-user' ruta='/admin/perfil' nombre='Perfil' />
                    <ResponsiveRoute icono='fa-solid fa-car-side' ruta='/admin/vehiculos' nombre='Vehículos' />
                    <ResponsiveRoute icono='fa-solid fa-cart-shopping' ruta='/admin/ventas' nombre='Ventas' />
                    <ResponsiveRoute icono='fa-solid fa-users' ruta='/admin/usuarios' nombre='Usiarios' />
                </ul>}
        </div>
    )
}
const ResponsiveRoute = ({ icono, ruta, nombre }) => {
    return (
        <Link to={ruta}>
            <button className='text-gray-200 border border-gray-300 p-1 w-full'>
                <i className={`${icono} w-10`}></i>
                {nombre}
            </button>
        </Link>
    )
}

export default SidebarResponsive