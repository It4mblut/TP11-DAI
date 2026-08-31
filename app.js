const pokemonInputJs = document.getElementById('pokemonInput');
const resultadoJs    = document.getElementById('resultado');
const loading   = document.getElementById('loading');
const error     = document.getElementById('error');

async function obtenerPokemon() {
const nombre = pokemonInputJs.value;
  if (!nombre.trim()) {
    error.style.display = 'flex';
    document.getElementById('errorMessage').textContent = 'Escribí un Pokémon.';
    return;
  }

  loading.style.display = 'flex';
  error.style.display   = 'none';
  pokemonInputJs.style.display  = 'none';

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase().trim()}`);

    if (!response.ok) {
      throw new Error('Pokémon no encontrado.');
    }

    const pokemon = await response.json();

    mostrarPokemon(pokemon);

  } catch (error) {
    loading.style.display = 'none';
    error.style.display   = 'flex';
    document.getElementById('errorMessage').textContent = error.message;
  }
}

function mostrarPokemon(pokemon) {
     console.log("mostrarPokemon ejecutado", pokemon.name);
     console.log("resultadoJs:", resultadoJs);
       console.log("display resultado:", resultadoJs.style.display='flex');
  const tipos = pokemon.types.map(t => t.type.name).join(', ');

  loading.style.display = 'none';
  pokemonInputJs.style.display  = 'block';

  pokemonInputJs.innerHTML = `
    <div class="card-header">
      <div class="card-id-badge">#${String(pokemon.id).padStart(3, '0')}</div>
      <h2 class="card-name">${pokemon.name}</h2>
      <div class="card-types"><span class="type-badge">${tipos}</span></div>
    </div>
    <div class="card-image-wrap">
      <img class="card-image" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    </div>
    <div class="card-stats">
      <div class="stat-block">
        <span class="stat-label">Altura</span>
        <span class="stat-value">${pokemon.height / 10} m</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-block">
        <span class="stat-label">Peso</span>
        <span class="stat-value">${pokemon.weight / 10} kg</span>
      </div>
    </div>
  `;
}