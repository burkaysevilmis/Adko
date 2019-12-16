import React, { Component } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';

export default class LoginTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
      <View style={{flex:2,backgroundColor:'#404E67',alignItems:'center'}}>
          <Image style={{alignSelf:'center',marginTop:120}} source={require('../img/adko.png')}/>
          <Text style={{alignSelf:'center',marginTop:36,lineHeight:27,fontWeight:'bold',fontSize:25,color:'#F8FAF9'}}></Text>
      </View>
      <View style={{flex:1,backgroundColor:'#F8FAF9'}}></View>
      <View style={{   shadowColor: 'rgba(46, 229, 157, 0.4)',
                        shadowOpacity: 1.5,
                        elevation: 8,
                        shadowRadius: 20,
                        shadowOffset: { width: 1, height: 8 },width:'80%',height:'30%',backgroundColor:'#F8FAF9',borderRadius:10,position:'absolute',bottom:120,alignSelf:'center'}}>
          <View style={{margin:15}}>
              <Text style={{color:'gray'}}>Kullanıcı Adı</Text>
              <TextInput style={{height:35,borderBottomColor:'gray',borderBottomWidth:1}}/>
          </View>
          <View style={{margin:15}}>
              <Text style={{color:'gray'}}>Şifre</Text>
              <TextInput style={{height:35,borderBottomColor:'gray',borderBottomWidth:1}}/>
          </View>
          <View style={{backgroundColor:'#404E67',width:'50%',alignSelf:'center',borderRadius:17,marginTop:4}}>
          <TouchableOpacity style={{height:45,justifyContent:'center'}}><Text style={{alignSelf:'center',color:'#F8FAF9',fontSize:16}}>Giriş Yap</Text></TouchableOpacity>

          </View>
                </View>
      </View>
    );
  }
}
