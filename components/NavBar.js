import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

export default function NavBar() {
  return (
    <View style={styles.navBar}>
      <StatusBar backgroundColor="#3498db" barStyle="light-content" />
      <Text style={styles.navBarTitle}>My Top Bar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    margin: 10,
    backgroundColor: '#3498db', 
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarTitle: {
    color: '#fff', // Text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});

