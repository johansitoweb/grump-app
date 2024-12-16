import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';

const cars = [
  { id: '1', name: 'Toyota Corolla', image: 'ruta/a/imagen/toyota_corolla.jpg', liked: false },
  { id: '2', name: 'Honda Civic', image: 'ruta/a/imagen/honda_civic.jpg', liked: false },
  { id: '3', name: 'Ford Mustang', image: 'ruta/a/imagen/ford_mustang.jpg', liked: false },
  // Añade más carros aquí
];

export default function App() {
  const [search, setSearch] = useState('');
  const [carList, setCarList] = useState(cars);

  const handleSearch = (text) => {
    setSearch(text);
    const filteredCars = cars.filter(car => car.name.toLowerCase().includes(text.toLowerCase()));
    setCarList(filteredCars);
  };

  const toggleLike = (id) => {
    const updatedCars = carList.map(car => {
      if (car.id === id) {
        return { ...car, liked: !car.liked };
      }
      return car;
    });
    setCarList(updatedCars);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar carros..."
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={carList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.carItem}>
            <Image source={{ uri: item.image }} style={styles.carImage} />
            <View style={styles.carDetails}>
              <Text style={styles.carName}>{item.name}</Text>
              <TouchableOpacity onPress={() => toggleLike(item.id)}>
                <Text style={styles.likeButton}>{item.liked ? '❤️' : '🤍'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  carItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  carImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  carDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  likeButton: {
    fontSize: 24,
  },
});
