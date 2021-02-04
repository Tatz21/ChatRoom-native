import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput,TouchableOpacity, Image } from 'react-native';

export default class loginscreen extends React.Component{
    state= {
        name:""
    }
    continue = () =>{
        this.props.navigation.navigate("Chat",{name: this.state.name})
    }


    render(){
        return(
               <View style={styles.container}>
                  <View style={styles.circle}/>
                  <View style={{marginTop:64}}>
                      <Image 
                      source={require('../assets/undraw_chat_bot_kli5.png')}
                      style={{width:240,height:200,marginLeft:0, alignSelf:"stretch"}}
                      />
                      </View>
                      <View style={{marginHorizontal:32}}>
                          <TextInput style={styles.input} placeholder='Username' onChangeText={name => {this.setState({name});
                          
                        }}
                         value={this.state.name} 
                          />
                     </View>
                    </View>

        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
       backgroundColor:"#6C61F6"
    },
    circle:{
        width:400,
        height:400,
        borderRadius:500 / 2,
        backgroundColor:"#ffff",
        position:"absolute",
        left:-120,
        top:-20
    },
  
    input:{
        marginTop:140,
        height:50,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:"#FFFF",
        borderRadius:30,
        paddingHorizontal:16,
        color:"#000",
        fontWeight:"600",
        backgroundColor:'white'
        
    }
});