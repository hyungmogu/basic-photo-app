import React from 'react';
import { StyleSheet, StatusBar, Text, View, SafeAreaView } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Photo App</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    flexDirection: 'column',
    marginTop: StatusBar.currentHeight
  },
  headerContainer: {
    marginTop: 10,
    padding: 15
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left'
  }
});
