import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { obtenerPokemones } from './services/api';

export default function App() {
  const [vistaActual, setVistaActual] = useState('home');
  const [pokemones, setPokemones] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const cargarDatosIniciales = async () => {
      try {
        setLoading(true);
        const datos = await obtenerPokemones();
        setPokemones(datos);
      } catch (err) {
        setError('No fue posible obtener la información.');
      } finally {
        setLoading(false);
      }
    };

    cargarDatosIniciales();
    cargarFavoritosStorage();
  }, []);

  const cargarFavoritosStorage = async () => {
    try {
      const guardados = await AsyncStorage.getItem('favoritos');
      if (guardados) {
        setFavoritos(JSON.parse(guardados));
      }
    } catch (e) {
      console.error('Error al cargar favoritos de AsyncStorage', e);
    }
  };

  const guardarFavoritosStorage = async (nuevosFavoritos) => {
    try {
      await AsyncStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    } catch (e) {
      console.error('Error al guardar favoritos en AsyncStorage', e);
    }
  };

  const agregarFavorito = (pokemon) => {
    if (!favoritos.some((fav) => fav.id === pokemon.id)) {
      const nuevos = [...favoritos, pokemon];
      setFavoritos(nuevos);
      guardarFavoritosStorage(nuevos);
    }
  };

  const quitarFavorito = (id) => {
    const nuevos = favoritos.filter((fav) => fav.id !== id);
    setFavoritos(nuevos);
    guardarFavoritosStorage(nuevos);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#e63946" barStyle="light-content" />
      <Header
        vistaActual={vistaActual}
        setVistaActual={setVistaActual}
        cantidadFavoritos={favoritos.length}
      />
      <View style={styles.appWrapper}>
        {vistaActual === 'home' ? (
          <Home
            pokemones={pokemones}
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            loading={loading}
            error={error}
            favoritos={favoritos}
            agregarFavorito={agregarFavorito}
            quitarFavorito={quitarFavorito}
          />
        ) : (
          <Favorites
            favoritos={favoritos}
            agregarFavorito={agregarFavorito}
            quitarFavorito={quitarFavorito}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f6f9',
  },
  appWrapper: {
    flex: 1,
    backgroundColor: '#f4f6f9',
  },
});