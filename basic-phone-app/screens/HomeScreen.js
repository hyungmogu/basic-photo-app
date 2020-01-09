import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, StatusBar, Image, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Photo App</Text>
            </View>
            <ScrollView>
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
            </ScrollView>
            <View style={styles.homeFooter}>
                <TouchableOpacity style={styles.circleButton} onPress={() => navigate('Camera')}>
                    <Ionicons name="md-camera" size={30}/>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
        );
    }
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
},
homeFooter: {
    height: 100,
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
},
circleButton: {
    borderWidth:2,
    borderColor: 'black',
    alignItems:'center',
    justifyContent:'center',
    width:75,
    height:75,
    backgroundColor:'#fff',
    borderRadius:150,
}

});
