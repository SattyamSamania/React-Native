import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import BackButton from '../components/BackButton';


const HomeScreen = ( { navigation} ) => {
  const movies = [
    {
      id: '1',
      title: 'Inception',
      genre: 'Action, Adventure, Sci-Fi',
      // image: require('C:/Users/My/Documents/Open source/React-Native/src/Components/assets/Inception.jpg'),
    },
    {
      id: '2',
      title: 'The Dark Knight',
      genre: 'Action, Crime, Drama',
      // image: require('C:/Users/My/Documents/Open source/React-Native/src/Components/assets/dark.jpg'),
    },
    {
      id: '3',
      title: 'Interstellar',
      genre: 'Adventure, Drama, Sci-Fi',
      // image: require('C:/Users/My/Documents/Open source/React-Native/src/Components/assets/interstrellar.jpg'),
    },
    {
      id: '4',
      title: 'spider',
      genre: 'Action, Suspense',
      // image: require('C:/Users/My/Documents/Open source/React-Native/src/Components/assets/spider.jpg'),
    },
    {
      id: '5',
      title: 'avatar',
      genre: 'Animation, Graphics',
      // image: require('C:/Users/My/Documents/Open source/React-Native/src/Components/assets/avatar-2.jpg'),
    },
    {
      id: '6',
      title: 'Bhola',
      genre: 'Action, Suspense',
      // image: require('C:/Users/My/Documents/Open source/React-Native/src/Components/assets/images.jpg'),

    },

  ];

  const renderMovieItem = ({ item }) => (
    <View style={styles.movieContainer}>
      <Image source={item.image} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{item.title}</Text>
      <Text style={styles.movieGenre}>{item.genre}</Text>
    </View>
  );

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Movie App </Text>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.movieList}
        showsVerticalScrollIndicator={false}
      />
    </View>
    <View>
      <BackButton  navigation={navigation} />
    </View>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  movieList: {
    flexGrow: 1,
  },
  movieContainer: {
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    elevation: 2,
  },
  movieImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  movieGenre: {
    fontSize: 16,
    color: '#666666',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
