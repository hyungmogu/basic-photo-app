import React, { Component } from 'react';

import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import uuidv1 from 'uuid/v1';

import { PhotoAppContext } from './components/Context'
import AppContainer from './components/AppContainer';


class App extends Component {

  state = {
    photos: [],
    hasPermission: null,
    cameraType: Camera.Constants.Type.front,
    latestImage: null,
    photosPath: `${FileSystem.documentDirectory}photos/`
  }

  async componentDidMount() {
    let photos = await FileSystem.readDirectoryAsync(this.state.photosPath);
    const { status } = await Camera.requestPermissionsAsync();

    if (photos && Array.isArray(photos)) {

        this.setState({
          photos: photos,
          hasPermission: status === 'granted',
          latestImage: photos[photos.length - 1]
        });
    }
  }

  handleAddPhoto = (photo) => {
    let photoName = `photo_app_${uuidv1()}.jpg`;
    FileSystem.copyAsync({
      from: photo.uri,
      to: this.state.photosPath + photoName
    });

    this.setState(prevState => {
      return {
        photos: [...prevState.photos, photoName],
        latestImage: photoName
      }
    });
  }

  handleFlipCamera = () => {
    this.setState(prevState => {
      return {
        cameraType: prevState.cameraType === Camera.Constants.Type.front ? Camera.Constants.Type.back : Camera.Constants.Type.front
      }
    })
  }

  render() {
    return (
      <PhotoAppContext.Provider value={{
        photos: this.state.photos,
        hasPermission: this.state.hasPermission,
        cameraType: this.state.cameraType,
        latestImage: this.state.latestImage,
        photosPath: this.state.photosPath,
        actions: {
          addPhoto: this.handleAddPhoto,
          flipCamera: this.handleFlipCamera
        }
      }}>
        <AppContainer/>
      </PhotoAppContext.Provider>
    );
  }
};

export default App;