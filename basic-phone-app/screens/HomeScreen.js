import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.gridView}>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: 'http://via.placeholder.com/200x150'}}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    gridView: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default HomeScreen;