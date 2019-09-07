import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, ImageBackground } from 'react-native'
import { TouchableHighlight, TextInput } from 'react-native-gesture-handler';

export default class LojaScreen extends Component {
  
    render(){
        return(
                <View style={styles.container}>
                    <Text>Loja</Text>
                </View>
        )
    }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
   }
})