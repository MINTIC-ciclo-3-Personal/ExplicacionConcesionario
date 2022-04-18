import React, { useEffect, useState } from 'react'
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
        funcionParaMostrarLaTabla={setMostrarTabla} 
        listaVehiculos={vehiculos}
        funcionParaAgregarUnVehiculo={setVehiculos} />
      )}
      <ToastContainer position="bottom-center" autoClose={5000} />
    </div>
  )
}

const TablaVehiculos = ({listaVehiculos}) => {
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
  funcionParaMostrarLaTabla, 
  listaVehiculos, 
  funcionParaAgregarUnVehiculo }) => {

  const [nombre, setNombre] = useState()
  const [marca, setMarca] = useState()
  const [modelo, setModelo] = useState()

  const enviarAlBackend = () => {
    console.log('nombre', nombre, 'marca', marca, 'modelo', modelo);
    toast.success('Vehículo creado con exito');
    funcionParaMostrarLaTabla(true);
    funcionParaAgregarUnVehiculo([...listaVehiculos,{nombre:nombre,marca:marca,modelo:modelo}])
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Crear Nuevo Vehículo</h2>
      <form className='flex flex-col'>
        <label className='flex flex-col' htmlFor='nombre'>
          Nombre del vehiculo
          <input
            name='nombre'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type="text"
            placeholder='Corolla'
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </label>
        <label className='flex flex-col' htmlFor='marca'>
          Marca del vehiculo
          <select
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            name="marca"
            value={marca}
            onChange={(e) => {
              setMarca(e.target.value);
            }}
          >
            <option disabled>Seleccione una opción</option>
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
            value={modelo}
            onChange={(e) => {
              setModelo(e.target.value);
            }}
          />
        </label>
        <button
          type='button'
          className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
          onClick={() => {
            enviarAlBackend();
          }}
        >
          Guardar Vehículo
        </button>
      </form>
    </div>

  )
}
export default Vehiculos