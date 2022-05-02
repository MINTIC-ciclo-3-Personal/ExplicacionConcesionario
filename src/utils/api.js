import axios from 'axios';

export const obtenerVehiculos = async (setVehiculos, setEjecutarConsulta =()=>{}) => {
    const options = { method: 'GET', url: 'http://localhost:5000/vehiculos' };
    await axios
      .request(options)
      .then(function (response) {
        setVehiculos(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    setEjecutarConsulta(false);
  };

  export const obtenerUsuarios = async (setUsuarios, setEjecutarConsulta =()=>{}) => {
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
  };