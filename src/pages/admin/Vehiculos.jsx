import React from 'react'

const Vehiculos = () => {
  return (
    <form className='flex flex-col'>
      <h2>Formulario de creación de vehículos</h2>
      <input type="text" placeholder='Nombre del vehiculo' />
      <input type="text" placeholder='Marca del vehiculo' />
      <input type="text" placeholder='Modelo del vehiculo' />
      <button className='bg-indigo-500 text-white'>Enviar datos</button>
    </form>
  )
}

export default Vehiculos