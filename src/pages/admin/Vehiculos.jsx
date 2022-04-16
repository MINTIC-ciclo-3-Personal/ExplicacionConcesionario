import React, { useEffect, useState } from 'react'

//Realizar un formulario que le pida al usuario su edad y muestre un mensaje
//que diga si es mayor de edad o no

const Vehiculos = () => {

  const [nombreVehiculo,setNombreVehiculo] =useState('');
  const [marcaVehiculo,setMarcaVehiculo] =useState('');
  

  useEffect(() => {
    console.log("hola, soy un use effect que se ejecuta una vez cuando la pagina se renderiza, porque tiene el array de dependencias vacio");
    //paso 2
    //paso 3
    //paso 4
  }, [])

 /*  useEffect(()=>{
    console.log("este es un use effect que se ejecuta SIEMPRE que cambia una variable");
  }); se explica sólo para que sepan que existe pero no se debe usar */

  useEffect(() => {
    console.log("esto es una funcion que se ejecuta cada que cambia el valor de nombreVehiculo");
    console.log("El valor de la variable es ", nombreVehiculo)
  },[nombreVehiculo]);

  const enviarDatosAlBackend=()=> {
    console.log('El valor de la variable nombreVehiculo es ', nombreVehiculo);
    console.log('El valor de la variable nombreVehiculo es ', marcaVehiculo);
  }

  return (
    /* <form className='flex flex-col'>
      <h2>Formulario de creación de vehículos</h2>
      <input onChange={(e) => { setNombreVehiculo(e.target.value) }} type="text" placeholder='Nombre del vehiculo' />
      <input onChange={(e) => { setMarcaVehiculo(e.target.value) }} type="text" placeholder='Marca del vehiculo' />
      <input type="text" placeholder='Modelo del vehiculo' />
      <button type="button" onClick={enviarDatosAlBackend} className='bg-indigo-500 text-white'>Enviar datos</button>
    </form> */
    <form className='flex flex-col'>
      <h2>Formulario de creación de vehículos</h2>
      <label htmlFor="edad">
        Por favor ingrese su edad
        <input className='border border-gray-600' name='edad' type="number" />
        <button type="button" onClick={enviarDatosAlBackend} className='bg-indigo-500 text-white'>Enviar datos</button>
      </label>
    </form>
  )
}

export default Vehiculos