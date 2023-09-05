import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image,Text, Button, TouchableOpacity,  View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import MovieScreen from './screens/MovieScreen'
import { useNavigation } from '@react-navigation/native';
// import BackButton from './components/BackButton';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderBackButton } from 'react-navigation-stack';
// import ProfileThumb from './components/ProfileThumb';
// import InfoCard from './components/InfoCard';
// import ProgressBar from './components/ProgressBar';

const Stack = createNativeStackNavigator();
const handleLogout= ({navigation})=> {
  // console.log("navigationnnnnr", navigation);
  navigation.navigate('Home')
}

export default function App( ) {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen}  
      
      options={(navigation) => ({ 
        headerBackVisible:false,
        headerTitle: 'Dashboard',
        headerRight : () => {
          return(

            // <Text>Logout</Text>
            
              <TouchableOpacity
               style={{ backgroundColor: '#29434e' , padding: 10}}
               onPress={()=>handleLogout(navigation)}
             >
               <Text style={{ marginVertical:1, borderRadius: 25, color: 'rgba(255,255,255,0.8)', fontSize: 20,}}> Logout </Text>
             </TouchableOpacity>   
            
          )
        } 
       
      })}
     
      />
      <Stack.Screen name='Movie' component={MovieScreen} 
      
      
      options={(navigation) => ({

        headerTitle: 'MovieDetails',
        headerRight: () => {
          return (
            <TouchableOpacity
               style={{ backgroundColor: '#29434e' , padding: 10}}
               onPress={()=>handleLogout(navigation)}
             >
               <Text style={{ marginVertical:1, borderRadius: 25, color: 'rgba(255,255,255,0.8)', fontSize: 20,}}> Logout </Text>
             </TouchableOpacity>  
          )
        }

      }) }
      
      />
      {/* <Stack.Screen name='Button' component={BackButton} /> */}
      {/* <Stack.Screen name='Card' component={InfoCard} /> */}
      {/* <Stack.Screen name='Progress' component={ProgressBar} /> */}
      {/* <Stack.Screen name='Profile' component={ProfileThumb} /> */}





      

      </Stack.Navigator>

    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 'bold'
  }
});


// a4b53f7bff2578f11e48382f30a7933c
