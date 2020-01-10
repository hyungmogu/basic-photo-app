import React, { Component } from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import PhotoDetailScreen from '../screens/PhotoDetailScreen';

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Camera: {screen: CameraScreen},
    PhotoDetail: {screen: PhotoDetailScreen}
},
{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
    headerShown: false
    }
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;