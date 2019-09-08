import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, ImageBackground } from 'react-native'
import { TouchableHighlight, TextInput } from 'react-native-gesture-handler';

import bgImage from '../images/img3.jpg';
const { width : WIDTH} = Dimensions.get('window');

export default class LojaScreen extends Component {  
    render(){
        return(
            <ImageBackground source={bgImage} imageStyle={{opacity:0.5}} style={styles.backgroundContainer}>
                <View style={styles.container}>
                    <Text>Loja</Text>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer:{
        flex:1,
        width:null,
        height:null,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#f0dd92'
    },
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
   }
})