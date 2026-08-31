import axios from 'axios';

const BACKEND_URL = 'http://localhost:3000';

export const iniciarSesion = async (username, password) => {
  const response = await axios.post(`${BACKEND_URL}/login`, {
    username,
    password,
  });

  if (response.data.token) {
    localStorage.setItem('jwtToken', response.data.token);
  }
  return response.data;
};

export const obtenerToken = () => {
  return localStorage.getItem('jwtToken');
};