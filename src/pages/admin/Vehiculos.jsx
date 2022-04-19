import userEvent from '@testing-library/user-event';
import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Realizar un formulario que le pida al usuario su edad y muestre un mensaje
//que diga si es mayor de edad o no

const vehiculosBackend = [
  {
    nombre: "Corolla",
    marca: "Toyota",
    modelo: 2014
  },
  {
    nombre: "Sandero",
    marca: "Renault",
    modelo: 2020
  },
  {
    nombre: "Rav4",
    marca: "Toyota",
    modelo: 2021
  },
  {
    nombre: "Fiesta",
    marca: "Ford",
    modelo: 2017
  },
  {
    nombre: "Mazda 3",
    marca: "Mazda",
    modelo: 2020
  },
  {
    nombre: "Onix",
    marca: "Chevrolet",
    modelo: 2020
  },

]

const Vehiculos = () => {

  const [mostrarTabla, setMostrarTabla] = useState(true); //Estos son estados
  const [vehiculos, setVehiculos] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Crear Nuevo Vechículo');
  const [colorBoton, setColorBoton] = useState('bg-indigo-500');

  useEffect(() => {
    //obtener lista del vehiculo desde el frontend
    setVehiculos(vehiculosBackend);
  }, [])

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Crear Nuevo Vechículo');
      setColorBoton('bg-indigo-500');
    } else {
      setTextoBoton('Mostrar Todos los Vehículos');
      setColorBoton('bg-red-500');
    }
  }, [mostrarTabla]);

  return (
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col'>
        <h2 className='text-3xl font-extrabold text-gray-900'>Página de administración de vehiculos</h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla)
          }}
          className={`text-white ${colorBoton} p-5 rounded-full m-6 w-280`}
        >
          {textoBoton}
        </button>
      </div>
      {mostrarTabla ? (<TablaVehiculos listaVehiculos={vehiculos} />
      ) : (
        <FromularioCreacionVehiculos
          setMostrarTabla={setMostrarTabla}
          listaVehiculos={vehiculos}
          setVehiculos={setVehiculos} />
      )}
      <ToastContainer position="bottom-center" autoClose={5000} />
    </div>
  )
}

const TablaVehiculos = ({ listaVehiculos }) => {
  useEffect(() => {

  }, [listaVehiculos])
  console.log('Este es el listado de vehiculos en el componente de tabla', listaVehiculos)
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Todos los vehículos</h2>
      <table>
        <thead>
          <tr>
            <th className='px-5'>Nombre del vehículo</th>
            <th className='px-5'>Marca del vehículo</th>
            <th className='px-5'>Modelo del vehículo</th>
          </tr>
        </thead>
        <tbody>

          {listaVehiculos.map((vehiculo) => {
            return (
              <tr>
                <th>{vehiculo.nombre}</th>
                <th>{vehiculo.marca}</th>
                <th>{vehiculo.modelo}</th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const FromularioCreacionVehiculos = ({
  setMostrarTabla,
  listaVehiculos,
  setVehiculos }) => {

  const form = useRef(null);


  const submitForm = (e) => {   
    e.preventDefault();
    const fd=new FormData(form.current);
    const nuevoVehiculo={};
    
    fd.forEach((value,key)=> {
      nuevoVehiculo[key]=value;
    })
    setMostrarTabla(true)
    toast.successc("vehículo agregado con éxito")
    setVehiculos(...listaVehiculos,nuevoVehiculo)
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Crear Nuevo Vehículo</h2>
      <form ref={form} onSubmit={submitForm} className='flex flex-col'>
        <label className='flex flex-col' htmlFor='nombre'>
          Nombre del vehiculo
          <input
            name='nombre'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type="text"
            placeholder='Corolla'
            required
          />
        </label>
        <label className='flex flex-col' htmlFor='marca'>
          Marca del vehiculo
          <select
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            name="marca"
            required
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción
            </option>
            <option>Renault</option>
            <option>Toyota</option>
            <option>Ford</option>
            <option>Mazda</option>
            <option>Chevrolet</option>
          </select>
        </label>
        <label className='flex flex-col' htmlFor='modelo'>
          Modelo del vehiculo
          <input
            name='modelo'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type="number"
            min={1992}
            max={2022}
            placeholder='2014'
            required
          />
        </label>
        <button
          type='submit'
          className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
        >
          Guardar Vehículo
        </button>
      </form>
    </div>

  )
}
export default Vehiculos