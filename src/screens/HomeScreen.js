import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native'
import { TabNavigator } from 'react-navigation'

import MinhaEstanteScreen from './MinhaEstanteScreen.js'
import LojaScreen from './LojaScreen.js'

var MainScreenNavigator =  TabNavigator({
    MinhaEstante:{ screen: MinhaEstanteScreen},
    Loja:{ screen: LojaScreen},

});

MainScreenNavigator.navigationOptions = {
    title: 'Tab Exemples'
}

export default MainScreenNavigator;