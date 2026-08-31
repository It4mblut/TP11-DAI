import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function SearchBar({ busqueda, setBusqueda }) {
  return (
    <View style={styles.searchSection}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar Pokémon..."
        placeholderTextColor="#8d99ae"
        value={busqueda}
        onChangeText={setBusqueda}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    marginVertical: 15,
    alignItems: 'center',
    width: '100%',
  },
  searchInput: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 25,
    backgroundColor: '#ffffff',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
});