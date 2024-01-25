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
    flex: 1,
    margin: 10,
    backgroundColor: '#3498db', 
    width: "100%",
    width: 500,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarTitle: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold'
  },
});

