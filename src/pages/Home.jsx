import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, useWindowDimensions } from 'react-native';
import SearchBar from '../components/searchbar';
import ItemList from '../components/ItemList';

export default function Home({
  pokemones,
  busqueda,
  setBusqueda,
  loading,  
  error,
  favoritos,
  agregarFavorito,
  quitarFavorito,
}) {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const pokemonesFiltrados = pokemones.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <View style={styles.outerContainer}>
      <View style={[styles.innerContainer, isDesktop && styles.desktopContainer]}>
        <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />

        {loading && (
          <View style={styles.centerContainer}>
            <ActivityIndicator size="large" color="#e63946" />
            <Text style={styles.loadingText}>Cargando información...</Text>
          </View>
        )}

        {error && (
          <View style={styles.centerContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        {!loading && !error && (
          <ItemList
            pokemones={pokemonesFiltrados}
            favoritos={favoritos}
            agregarFavorito={agregarFavorito}
            quitarFavorito={quitarFavorito}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 15,
  },
  desktopContainer: {
    maxWidth: 1200,
    paddingHorizontal: 30,
  },
  centerContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#8d99ae',
  },
  errorText: {
    fontSize: 16,
    color: '#e63946',
    textAlign: 'center',
  },
});