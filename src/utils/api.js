import axios from 'axios';

const baseURL= "https://boiling-plains-03396.herokuapp.com"

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`
}

export const obtenerVehiculos = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: `${baseURL}/vehiculos/`,
    headers: {
      Authorization: getToken(),
    }
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearVehiculo = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: `${baseURL}/vehiculos/`,
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
    url: `${baseURL}/vehiculos/${id}/`,
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
    url: `${baseURL}/vehiculos/${id}/`,
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
    url: `${baseURL}/usuarios/`,
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
    url: `${baseURL}/usuarios/self/`,
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
    url: `${baseURL}/usuarios/${id}/`,
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
    method: 'POST', url: `${baseURL}/ventas/`,
    headers: {
      Authorization: getToken(),
      'Content-Type': 'application/json'
    },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
}

/* export const obtenerUsuarios = async (setUsuarios, setEjecutarConsulta = () => { }) => {
  const options = { method: 'GET', url: `${baseURL}/vehiculos' };
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