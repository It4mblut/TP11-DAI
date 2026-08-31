import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function ItemCard({ pokemon, esFavorito, agregarFavorito, quitarFavorito }) {
  const tipos = pokemon.types ? pokemon.types.map((t) => t.type.name).join(', ') : 'Desconocido';

  return (
    <View style={styles.card}>
      <Text style={styles.cardId}>#{String(pokemon.id).padStart(3, '0')}</Text>
      <Text style={styles.cardTitle}>{pokemon.name}</Text>
      
      <View style={styles.badgeContainer}>
        <Text style={styles.typeBadge}>{tipos}</Text>
      </View>

      <Image
        source={{ uri: pokemon.sprites?.front_default }}
        style={styles.cardImage}
        resizeMode="contain"
      />

      <Text style={styles.cardDetails}>
        Peso: {pokemon.weight / 10} kg | Altura: {pokemon.height / 10} m
      </Text>

      <Pressable
        style={[styles.btnFav, esFavorito ? styles.btnRemove : styles.btnAdd]}
        onPress={() => (esFavorito ? quitarFavorito(pokemon.id) : agregarFavorito(pokemon))}
      >
        <Text style={[styles.btnFavText, esFavorito ? styles.textRemove : styles.textAdd]}>
          {esFavorito ? '★ Quitar de favoritos' : '☆ Agregar a favoritos'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    alignItems: 'center',
  },
  cardId: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#8d99ae',
    alignSelf: 'flex-end',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2b2d42',
    textTransform: 'capitalize',
    marginVertical: 4,
  },
  badgeContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  typeBadge: {
    backgroundColor: '#eee',
    fontSize: 11,
    fontWeight: 'bold',
    color: '#555',
    textTransform: 'uppercase',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardImage: {
    width: 110,
    height: 110,
    marginVertical: 5,
  },
  cardDetails: {
    fontSize: 13,
    color: '#8d99ae',
    marginVertical: 10,
  },
  btnFav: {
    width: '100%',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnAdd: {
    backgroundColor: '#e8f5e9',
  },
  btnRemove: {
    backgroundColor: '#ffebee',
  },
  btnFavText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  textAdd: {
    color: '#2e7d32',
  },
  textRemove: {
    color: '#c62828',
  },
});