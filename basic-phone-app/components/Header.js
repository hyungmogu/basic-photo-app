import React from 'react';
import { Image, StyleSheet, SafeAreaView, Text } from 'react-native';

const Header = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'left'}}>Photo App</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        marginTop: 100
    }
});

export default Header;