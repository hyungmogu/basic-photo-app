import React from 'react';
import { Dimensions, Image, View, StyleSheet } from 'react-native';

const PhotoDetailScreen = ({navigation}) => {
    let photo = navigation.state.params.photo;
    return (
        <View style={styles.container}>
            <Image source={{uri: photo}} resizeMode={'contain'} style={styles.image}/>
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
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
});

export default PhotoDetailScreen;