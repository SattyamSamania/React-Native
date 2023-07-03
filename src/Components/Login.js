import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import axios from 'axios';


const Login =( {navigation} )=>{

    const [email, setEmail] = useState("");
    // console.log(userName)
    const [password, setPassword] = useState("");
    // console.log(email, password);
    const [message, setMessage] = useState("");

    const handleLogin = async () => {
        if (email !== "" && password !== "") {
          try {
            const response = await fetch('https://redesk.app/api/v1/login', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
              },
              body: JSON.stringify({
                'email': email,
                'password': password
              })
            });
      
            const resData = await response.json();
            
            if (resData.status) {
              
                navigation.navigate('Home');

            } else {
              // Handle login error here
              alert('Invalid email or password');
            }
          } catch (error) {
            // Handle network or other errors here
            alert('An error occurred while logging in.');
          }
        } else {
          alert('Please enter email and password.');
        }
      };
      

   
    
      



    



   


    return(
        <View style={styles.container}>
        <Text style={styles.title}> Login Form
        
        </Text>

        <TextInput
        style={styles.input}
            placeholder="Email"
            autoCapitalize='none'
            autoCorrect={false}
            value={email}
            onChangeText={(actualData) => setEmail(actualData)}
            />
        <TextInput
        style={styles.input}
        placeholder='Password'
        autoCapitalize='none'
        value={password}
        onChangeText={(actualData) => setPassword(actualData)}
        autoCorrect={false}
        secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button}
        onPress={() => handleLogin()}>
<Text style={styles.buttonText}


>Login</Text>
        </TouchableOpacity>
        
        
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    title: {
        fontSize:50,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        width: '100%',
        width: 200,
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 6,
    },

    button: {
        backgroundColor: 'blue',
        paddingVertical: 12,
        paddingHorizontal: 28,
        borderRadius: 6,
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }

})

export default Login
