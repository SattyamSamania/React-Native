import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image,Text, Button,  View } from 'react-native';
import Login from './src/Components/Login';
import Home from './src/Components/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Home' component={Home} />

      </Stack.Navigator>

    </NavigationContainer>
    // <View style={styles.container}>
    //   <Login/>
      
      

    //   {/* <Button title="Login" onPress={ () => alert("Logged in Successfully")} /> */}
    //   <StatusBar style="auto" />
    // </View>
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
