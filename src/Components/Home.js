import { useNavigation } from '@react-navigation/native';
import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';



export default function Home(){
    const navigation = useNavigation();

    const [counter, setCounter] = useState("");


    const  incrementCounter = () =>{
        setCounter(counter + 1);
    }

    const resetCounter =()=>{
        setCounter(0);
    }

    const decrementCounter =() =>{
        setCounter(counter - 1);
    }
    return(
        <>
        <View style={styles.mainContainer}> 

        
            <Text style={styles.mainHeader}>Welcome to  Home Page </Text>
            <Button title='Go Back' 
            
            // onPress={navigation.navigate{Login}}
            />

            <Text style={styles.text}>Counter: {counter}</Text>
            <Button title='increment' onPress={incrementCounter} />
            <Button title='reset' onPress={resetCounter} />
            <Button title='decrement' onPress={decrementCounter} />

        </View>
        
      </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'


    },
    mainHeader: {
        fontSize: 30,
        color: '#45621'
    },
     text: {
    fontSize: 20,
    marginBottom: 10,
  },

}) 
