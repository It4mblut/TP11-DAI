import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Header({ vistaActual, setVistaActual, cantidadFavoritos }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Pokédex</Text>
      <View style={styles.nav}>
        <Pressable
          style={[styles.navButton, vistaActual === 'home' && styles.activeButton]}
          onPress={() => setVistaActual('home')}
        >
          <Text style={styles.navText}>Inicio</Text>
        </Pressable>

        <Pressable
          style={[styles.navButton, vistaActual === 'favorites' && styles.activeButton]}
          onPress={() => setVistaActual('favorites')}
        >
          <Text style={styles.navText}>Favoritos ({cantidadFavoritos})</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#e63946',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  nav: {
    flexDirection: 'row',
  },
  navButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginLeft: 8,
  },
  activeButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  navText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
});