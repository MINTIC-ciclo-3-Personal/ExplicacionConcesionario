import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';

//Realizar un formulario que le pida al usuario su edad y muestre un mensaje
//que diga si es mayor de edad o no

const vehiculosBackend = [
  {
    name: "Corolla",
    brand: "Toyota",
    model: 2014
  },
  {
    name: "Sandero",
    brand: "Renault",
    model: 2020
  },
  {
    name: "Rav4",
    brand: "Toyota",
    model: 2021
  },
  {
    name: "Fiesta",
    brand: "Ford",
    model: 2017
  },
  {
    name: "Mazda 3",
    brand: "Mazda",
    model: 2020
  },
  {
    name: "Onix",
    brand: "Chevrolet",
    model: 2020
  },
];

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
        <h2 className='text-3xl font-extrabold text-gray-900'>
          Página de administración de vehiculos
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`text-white ${colorBoton} p-5 rounded-full m-6 w-280`}
        >
          {textoBoton}
        </button>
      </div>
      {mostrarTabla ? (
        <TablaVehiculos listaVehiculos={vehiculos} />
      ) : (
        <FromularioCreacionVehiculos
          setMostrarTabla={setMostrarTabla}
          listaVehiculos={vehiculos}
          setVehiculos={setVehiculos}
        />
      )}
      <ToastContainer position="bottom-center" autoClose={5000} />
    </div>
  );
};

const TablaVehiculos = ({ listaVehiculos }) => {
  const form = useRef(null);
  useEffect(() => {
    //console.log('Este es el listado de vehiculos en el componente de tabla', listaVehiculos)
  }, [listaVehiculos]);

  const submitEdit = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current)
    console.log(e);
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Todos los vehículos</h2>
      <form ref={form} onSubmit={submitEdit} className='w-full'>
        <table className='tabla'>
          <thead>
            <tr>
              <th>Nombre del vehículo</th>
              <th>Marca del vehículo</th>
              <th>Modelo del vehículo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaVehiculos.map((vehiculo) => {
              return (
                <FilaVehiculo key={nanoid()} vehiculo={vehiculo} />
              );
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
};

const FilaVehiculo = ({ vehiculo }) => {
  const [edit, setEdit] = useState(false);
  const [infoNuevoVehiculo, setInfoNuevoVehiculo] = useState({
    name: vehiculo.name,
    brand: vehiculo.brand,
    model: vehiculo.model,
  })

  const actualizarVehiculo = () => {
    console.log(infoNuevoVehiculo);
    //enviar la info al backend
  }


  const eliminarVehiculo = () => {

  }
  return (
    <tr>
      {edit ? (
        <>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type="text"
              value={infoNuevoVehiculo.name}
              onChange={e => setInfoNuevoVehiculo({ ...infoNuevoVehiculo, name: e.target.value })}
            />
          </td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type="text"
              value={infoNuevoVehiculo.brand}
              onChange={e => setInfoNuevoVehiculo({ ...infoNuevoVehiculo, brand: e.target.value })}
            />
          </td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type="text"
              value={infoNuevoVehiculo.model}
              onChange={e => setInfoNuevoVehiculo({ ...infoNuevoVehiculo, model: e.target.value })}
            />
          </td>
        </>
      ) : (
        <>
          <td>{vehiculo.name}</td>
          <td>{vehiculo.brand}</td>
          <td>{vehiculo.model}</td>
        </>
      )}

      <td>
        <div className='flex w-full justify-around'>
          {edit ? (
            <i
              onClick={() => actualizarVehiculo()}
              class="fa-solid fa-check text-green-700 hover:text-green-500"></i>
          ) : (
            <i
              onClick={() => setEdit(!edit)}
              className="fa-solid fa-pen-to-square hover:text-yellow-500"></i>
          )}
          <i onClick={() => eliminarVehiculo()} className="fa-solid fa-trash-can hover:text-red-500"></i>
        </div>
      </td>
    </tr>
  )
}

const FromularioCreacionVehiculos = ({
  setMostrarTabla,
  listaVehiculos,
  setVehiculos }) => {

  const form = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoVehiculo = {};
    fd.forEach((value, key) => {
      nuevoVehiculo[key] = value;
    });

    setMostrarTabla(true)
    setVehiculos([...listaVehiculos, nuevoVehiculo])
    toast.success("vehículo agregado con éxito")
  };

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

  );
};
export default Vehiculos;