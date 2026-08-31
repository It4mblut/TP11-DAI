import axios from "axios";
import { obtenerToken } from "./loginService";
const API_URL = "https://pokeapi.co/api/v2";
const BACKEND_URL = "http://localhost:3000";

export const obtenerPokemones = async () => {
  const response = await axios.get(`${API_URL}/pokemon?limit=50`);
  const pokemones = await Promise.all(
    response.data.results.map(async (pokemon) => {
      const detalle = await axios.get(pokemon.url);
      return detalle.data;
    })
  );
  return pokemones;
};

export const obtenerPerfilOFavoritos = async () => {
  const token = obtenerToken();

  const response = await axios.get(`${BACKEND_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};