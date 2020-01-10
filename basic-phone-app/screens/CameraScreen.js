import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { Camera } from 'expo-camera';

import { PhotoAppContext } from '../components/Context';

export default class CameraScreen extends Component {

    takePicture = async (addPhoto) => {
        if (!this.camera) {
            return;
        }

        let photo = await this.camera.takePictureAsync();

        if (!photo || !photo.uri) {
            return
        }

        addPhoto(photo);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <PhotoAppContext.Consumer>
                { context => {
                    let permission = context.hasPermission;
                    let type = context.cameraType;
                    let photo = context.latestImage;
                    let photosPath = context.photosPath;
                    let addPhoto = context.actions.addPhoto;

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
                                    <View style={{flex: 1}}></View>
                                    <View style={{flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                        <TouchableOpacity
                                            style={styles.circleButton}
                                            onPress={() => this.takePicture(addPhoto)}
                                        >
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                                        { photo ?
                                            <TouchableOpacity onPress={() => navigate('PhotoDetail', {
                                                photo: photosPath + photo
                                            })}>
                                                <Image
                                                    style={styles.image}

                                                    contain={'center'}

                                                    source={{uri: photosPath + photo}}
                                                />
                                            </TouchableOpacity>
                                        : null}
                                    </View>
                                </View>
                            </Camera>
                        </View>
                    );
                }}
            </PhotoAppContext.Consumer>
        );
    }
}


const styles = StyleSheet.create({
    cameraFooter: {
        height: 100,
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
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
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'white'
    }
});
