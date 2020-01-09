import React from 'react';
import { StyleSheet, StatusBar, Image, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Photo App</Text>
      </View>
      <View style={styles.homeContainer}>
        <Image
          style={styles.image}
          source={{uri: 'http://via.placeholder.com/200x150'}}
        />
        <Image
          style={styles.image}
          source={{uri: 'http://via.placeholder.com/200x150'}}
        />
        <Image
          style={styles.image}
          source={{uri: 'http://via.placeholder.com/200x150'}}
        />
        <Image
          style={styles.image}
          source={{uri: 'http://via.placeholder.com/200x150'}}
        />
        <Image
          style={styles.image}
          source={{uri: 'http://via.placeholder.com/200x150'}}
        />
        <Image
          style={styles.image}
          source={{uri: 'http://via.placeholder.com/200x150'}}
        />
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
  },
  homeContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  }
});
