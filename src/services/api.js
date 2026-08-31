import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

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