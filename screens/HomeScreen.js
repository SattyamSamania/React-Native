/* screen/HomeScreen.js */
import { HeaderBackButton } from 'react-navigation-stack';
import { Platform } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { BackHandler } from 'react-native';



import React, { useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Card, Button  } from 'react-native-paper';
// import { EvilIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import axios from 'axios';
// import Icon from 'react-native-vector-icons/Ionicons';
import Loading from '../components/Loading';
import {fetchMovies} from "../servises/services";
import Icon from 'react-native-vector-icons/FontAwesome';


const screen = Dimensions.get('screen');

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchNow, setSearchNow] = useState(false);

  // const handleLogout= ()=> {
  //   navigation.navigate('Login')
  // }

 
  
  // Exiting the  App 

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert("Hold on!", "Are you sure you want to exit?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );
/**
 * useEffect will initially fetch the recent popular movies,
 * as the "searchTerm" is empty, it has a dependency "searchNow".
 * Whenever we click the search button, the "searchNow" value
 * will be toggled, and the useEffect will be triggered and 
 * this time if "searchTerm" is not empty then we will get the 
 * the new list of movies based on "searchTerm"
*/

  useEffect(() => {
    setLoading(true);
    fetchMovies(searchTerm, movies).then((data) => {
      setMovies(data);
      // set loading to false after movies are fetched.
      setLoading(false);
    });
  }, [searchNow]);

/**
 * below, while the data is being loaded, the value of loading is true,
 * and while it is true, the <Loading/> component will be rendered,
 * as soon as movies are fetched the loading state is set to false
 * the actual data is rendered.
*/

  return loading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <View>
        <Text  style={styles.header}>Welcome to the Movie App </Text>
        {/* <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity> */}
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w780${movies[0]?.backdrop_path}`,
          }}
          style={styles.banner}
        />
        <View style={styles.bannerInfoCard}>
          <Text style={styles.bannerTitle}>
            {movies[0]?.original_title.substr(0, 20)}
          </Text>
          <Text style={styles.bannerOverview}>
            {movies[0]?.overview.substr(0, 80) + '...'}
          </Text>
        </View>
      </View>

      <View>
        <View style={styles.inputCard}>
          <TextInput
            style={styles.input}
            placeholder={'search movies'}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
          <TouchableOpacity
            onPress={() => {
              setSearchNow(!searchNow);
            }}>
             {/* <EvilIcons
              name={searchTerm ? 'search' : 'refresh'}
              size={20}
              color="black"
              style={{ alignSelf: 'center', marginHorizontal: 20 }}
            />  */}
          </TouchableOpacity>
        </View>

         {/*rendering clickable poster thumbnails, when clicked, we will 
         be navigated to MovieScreen*/}

        <View style={styles.movieListCard}>
          <FlatList
            data={movies}
            numColumns={2}
            renderItem={({ item, index }) => {
              return (
                <Card style={styles.movieCard}>
                  <TouchableOpacity
                    onPress={() => {
                      /**
                        * here we are navigating to "MovieScreen", which has a path
                        * name of "Movie" which we set back in <Stack.Screen/>    
                        * of App.js.
                        * We are also passing the parameter with it, {movie: item}
                        * we will access it in MovieScreen
                       */
                      navigation.navigate('Movie', { movie: item });
                    }}>
                    <Image
                      source={{
                        uri: `http://image.tmdb.org/t/p/w780${item.poster_path}`,
                      }}
                      style={{ width: Constants.width, height: 200 }}
                    />
                  </TouchableOpacity>
                </Card>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  banner: { width: Constants.width, height: 200 },
  bannerInfoCard: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 50,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(22,21,21,0.5)',
  },
  bannerTitle: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 1.2,
  },
  bannerOverview: {
    color: 'grey',
  },
  btn: {

    backgroundColorcolor: '#fff', 
    color: '#fff',
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#212121',
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  inputCard: {
    position: 'absolute',
    top: -40,
    margin: 20,
    left: 10,
    right: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 5,
    zIndex: 100,
  },
  input: {
    padding: 10,
    flex: 1,
  },
  movieCard: {
    flex: 1,
    height: 200,
    margin: 5,
    alignSelf: 'center',
    overflow: 'hidden',
    borderWidth: 5,
  },
  movieListCard: {
    top: screen.height * 0.05,
  },

  logoutButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
