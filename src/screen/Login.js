import React, { Component } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, Dimensions,SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('window');
export default class LoginTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={{ height:height,width:width,backgroundColor:'#404E67'}} >
        <View style={{height:height*.75,width:width,alignItems:'center'}}>
<Image style={{marginTop:height/5}} source={require('../img/adko.png')}/>
        </View>
        <View style={{height:height*.25,width:width,backgroundColor:'white'}}>

        </View>
        <View style={{ shadowColor: 'black',
            shadowOpacity: 1.5,
            elevation: 8,
            shadowRadius: 20,
            shadowOffset: {width: 1, height: 2},position:'absolute',height:height/3,bottom:62,width:width*0.9,alignSelf:'center',backgroundColor:'white',borderRadius:16}}>
        <View style={{margin: 15}}>
            <Text style={{color: 'gray'}}>Kullanıcı Adı</Text>
            <TextInput
              style={{
                height: height*0.06,
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
              }}
            />
          </View>
          <View style={{margin: 15}}>
            <Text style={{color: 'gray'}}>Şifre</Text>
            <TextInput
              style={{
                height: height*0.06,
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: '#404E67',
              width: width*0.5,
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: 17,
              height: height*0.07,
              marginTop:height*0.03,
            }}>
            <TouchableOpacity    onPress={() => navigate('Home')} style={{justifyContent: 'center'}}>
              <Text
                style={{alignSelf: 'center', color: '#F8FAF9', fontSize: 16}}>
                Giriş Yap
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
