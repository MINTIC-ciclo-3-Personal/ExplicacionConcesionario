import axios from 'axios';

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`
}

export const obtenerVehiculos = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/vehiculos',
    headers: {
      Authorization: getToken(),
    }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearVehiculo = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/vehiculos/',
    headers: {
      Authorization: getToken(),
      'Content-Type': 'application/json'
    },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
}

export const editarVehiculo = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/vehiculos/${id}/`,
    headers: {
      Authorization: getToken(),
      'Content-Type': 'application/json'
    },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
}

export const borrarVehiculo = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/vehiculos/${id}/`,
    headers: {
      Authorization: getToken(),
      'Content-Type': 'application/json'
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
}

//CRUD PARA USUARIOS

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',  
    url: 'http://localhost:5000/usuarios/',
    headers: {
      Authorization: getToken(),
      'Content-Type': 'application/json'
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
}

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/usuarios/self',
    headers: {
      Authorization: getToken(),  //3. enviarle el token a el backend
      'Content-Type': 'application/json'
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
}

export const editarUsuario = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/usuarios/${id}/`,
    headers: {
      Authorization: getToken(),
      'Content-Type': 'application/json'
    },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
}


//CRUD de ventas

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST', url: 'http://localhost:5000/ventas/',
    headers: {
      Authorization: getToken(),
      'Content-Type': 'application/json'
    },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
}

/* export const obtenerUsuarios = async (setUsuarios, setEjecutarConsulta = () => { }) => {
  const options = { method: 'GET', url: 'http://localhost:5000/vehiculos' };
  await axios
    .request(options)
    .then(function (response) {
      setUsuarios(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarConsulta(false);
}; */