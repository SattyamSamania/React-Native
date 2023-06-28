import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';



export default function Home(navigation){
    return(
        <View style={styles.mainContainer}> 
            <Text style={styles.mainHeader}>Welcome to  Home Page </Text>
            <Button title='Go Back' 
            
            // onPress={navigation.navigate{Login}}
            />
        </View>
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
    }

}) 