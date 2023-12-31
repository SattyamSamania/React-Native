import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/**
 * screen, navigation.pop() removes the topmost screen from Navigation
 *Stack and takes us back, in this case, HomeScreen.
*/

const BackButton = ( navigation ) => {
  return (
    <TouchableOpacity style={styles.backBtn} onPress={() => navigation.pop()}>
      <Ionicons name="md-arrow-back" size={20} color="white" /> 
    </TouchableOpacity>
  );
};

export default BackButton;
const styles = StyleSheet.create({
  backBtn: {
    position: 'absolute',
    left: 5,
    top: 5,
    zIndex: 100,
    width: 30,
    height: 30,
    backgroundColor: 'rgba(21,21,21,0.5)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
