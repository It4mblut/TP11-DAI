import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import ItemCard from './ItemCard';

export default function ItemList({ pokemones, favoritos, agregarFavorito, quitarFavorito }) {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  if (pokemones.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyMessage}>No encontramos resultados.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={isDesktop ? styles.gridContainer : styles.mobileContainer}>
        {pokemones.map((pokemon) => {
          const esFavorito = favoritos.some((fav) => fav.id === pokemon.id);
          return (
            <View key={pokemon.id} style={isDesktop ? styles.cardWrapperGrid : styles.cardWrapperMobile}>
              <ItemCard
                pokemon={pokemon}
                esFavorito={esFavorito}
                agregarFavorito={agregarFavorito}
                quitarFavorito={quitarFavorito}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: -10,
  },
  mobileContainer: {
    flexDirection: 'column',
  },
  cardWrapperGrid: {
    width: 260,
    paddingHorizontal: 10,
  },
  cardWrapperMobile: {
    width: '100%',
  },
  emptyContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  emptyMessage: {
    fontSize: 18,
    color: '#8d99ae',
  },
});