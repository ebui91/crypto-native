import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header= ()=> {
  return(
    <View style= { headerContainer }>
      <Text style={ header }>Cryptology Native</Text>
    </View>
  )
}

const styles= StyleSheet.create({
  headerContainer: {
    display: 'flex',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20
  }
})

// ES6 Destructuring to grab the objects contained in styles.
const { headerContainer, header }= styles;

export default Header;
