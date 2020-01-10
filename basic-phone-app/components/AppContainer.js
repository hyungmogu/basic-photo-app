import React, { Component } from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Camera: {screen: CameraScreen},
},
{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
    headerShown: false
    }
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;