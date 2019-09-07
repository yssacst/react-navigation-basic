import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, ImageBackground } from 'react-native'
import { TouchableHighlight, TextInput } from 'react-native-gesture-handler';

//img
import bgImage from '../images/img3.jpg';

const { width : WIDTH} = Dimensions.get('window');
export default class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    login(){
        this.props.navigation.navigate('Home')
    }
    
    render(){
        return(
            <ImageBackground source={bgImage} imageStyle={{opacity:0.5}} style={styles.backgroundContainer}>
                <View style={styles.logoContainer}>
                </View>
                 <View style={styles.container}>
                    <TextInput placeholder={'Login'} placeholderTextColor={'#d6e4aa'} style={styles.input}/> 
                    <TextInput placeholder={'Senha'} placeholderTextColor={'#d6e4aa'} style={styles.input} secureTextEntry={true}/> 

                    <TouchableHighlight onPress={this.login} >
                        <Text style={[{color:'#fff',alignContent:'flex-end'}]}>Esqueci minha senha</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={this.login} style={styles.btnContainer}>
                        <Text style={styles.btnText}>ENTRAR</Text>
                    </TouchableHighlight>
                    
                    <Text>OU</Text>
                    
                    <TouchableHighlight onPress={this.login} style={styles.btnContainer}>
                        <Text style={styles.btnText}>CADASTRAR-SE</Text>
                    </TouchableHighlight>
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
        alignItems:'center',
        width:null,        
    },
    input:{
        backgroundColor:'rgba(131, 181, 130,0.5)',
        padding:10,
        borderRadius:5,
        color:'#fff',
        margin:3,
        width: WIDTH - 55 ,
    },
    btnContainer:{
        width: WIDTH - 55 ,
        padding:15,
        margin:15,
        alignItems:'center',
        backgroundColor:'#83b582',
        borderRadius:5
    },
    btnText:{
        color:'#fff'
    }
})