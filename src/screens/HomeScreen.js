import React, { Component } from 'react';
import { View ,StyleSheet} from 'react-native';
  
  import {Container, Tab, Tabs,Text } from 'native-base';

import MinhaEstanteScreen from './MinhaEstanteScreen.js'
import LojaScreen from './LojaScreen.js'

export default class HomeScreen extends Component {
  
    render() {
      return (
        <Container style={styles.container}>
            <Tabs initialPage={0} tabBarUnderlineStyle={{backgroundColor:"#83b582"}}>
              <Tab heading="Minha Estante" activeTextStyle={{color: "#83b582"}} tabStyle={{ backgroundColor: "#f0dd92" }} activeTabStyle={{ backgroundColor: "#ffffc5" }}>
                <MinhaEstanteScreen/>
              </Tab>
              <Tab heading="Loja" activeTextStyle={{color: "#83b582"}}  tabStyle={{ backgroundColor: "#f0dd92" }} activeTabStyle={{ backgroundColor: "#ffffc5" }}>
                 <LojaScreen/>
              </Tab>
            </Tabs>
          </Container>
      );
    }
  }

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginTop:25
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });