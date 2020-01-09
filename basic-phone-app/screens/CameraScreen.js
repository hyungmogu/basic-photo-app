import React, { useState, useEffect, Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';

import uuidv1 from 'uuid/v1';

export default class CameraScreen extends Component {

    state = {
        hasPermission: null,
        cameraType: Camera.Constants.Type.front,
        latestImage: null
    }

    async componentDidMount() {
        const { status } = await Camera.requestPermissionsAsync();
        this.setState({ hasPermission: status === 'granted' });
    }

    takePicture = async () => {
        if (!this.camera) {
            return;
        }

        let photo = await this.camera.takePictureAsync();

        if (!photo || !photo.uri) {
            return
        }

        let filePath = `${FileSystem.documentDirectory}photos/photo_app_${uuidv1()}.jpg`;
        FileSystem.copyAsync({
            from: photo.uri,
            to: filePath
        });
        this.setState({ latestImage: filePath });
    }

    render() {
        let permission = this.state.hasPermission;
        let type = this.state.cameraType;

        if (permission === null) {
            return <View />;
        }
        if (permission === false) {
            return <Text>No access to camera</Text>;
        }

        return (
            <View style={{ flex: 1 }}>
                <Camera style={{ flex: 1 }} type={type} ref={ref => {this.camera = ref}}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column'

                        }}
                    ></View>
                    <View style={styles.cameraFooter}>
                        <TouchableOpacity
                            style={styles.circleButton}
                            onPress={this.takePicture}
                        >
                        </TouchableOpacity>
                        <Image style={{ width: 50, height: 50 }} source={{ uri: this.state.latestImage }}/>
                    </View>
                </Camera>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    cameraFooter: {
        height: 100,
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleButton: {
        borderWidth: 5,
        borderColor: 'grey',
        alignItems:'center',
        justifyContent:'center',
        width:75,
        height:75,
        backgroundColor:'white',
        borderRadius:150,
    }
});
