import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PhotoDetailScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{color: '#fff'}}>Hello World</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    }
});

export default PhotoDetailScreen;