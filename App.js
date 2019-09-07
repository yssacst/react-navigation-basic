import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//screens
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

const Navigator =  createSwitchNavigator (
  {

    Login:{
      screen: LoginScreen
    },
    Home:{
      screen: HomeScreen
    }
  }
);


export default createAppContainer(Navigator);