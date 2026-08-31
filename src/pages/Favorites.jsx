import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import ItemList from '../components/ItemList';

export default function Favorites({ favoritos, agregarFavorito, quitarFavorito }) {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  return (
    <View style={styles.outerContainer}>
      <View style={[styles.innerContainer, isDesktop && styles.desktopContainer]}>
        <Text style={styles.pageTitle}>Mis Favoritos</Text>

        {favoritos.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyMessage}>No tenés elementos favoritos.</Text>
          </View>
        ) : (
          <ItemList
            pokemones={favoritos}
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
    paddingTop: 15,
  },
  desktopContainer: {
    maxWidth: 1200,
    paddingHorizontal: 30,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2b2d42',
    marginBottom: 15,
  },
  emptyContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  emptyMessage: {
    fontSize: 16,
    color: '#8d99ae',
    textAlign: 'center',
  },
});