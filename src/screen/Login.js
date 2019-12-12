/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
const {width, heigth} = Dimensions.get('window');
export default class Login extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundPhoto}
          source={require('../img/background.png')}
        />
        <View style={styles.box1} />
        <View style={styles.box2}>
          <View style={styles.logo}>
            <Image source={require('../img/adko.png')} />
          </View>
          <View style={styles.form}>
            <TextInput
              placeholder="Kullanıcı Adı"
              placeholderTextColor="white"
              style={{
                width: '70%',
                height: 45,
                borderWidth: 1,
                borderColor: 'white',
                marginBottom: 20,
                paddingLeft: 15,
              }}
            />
            <TextInput
              placeholder="Şifre"
              placeholderTextColor="white"
              secureTextEntry={true}
              style={{
                width: '70%',
                height: 45,
                borderWidth: 1,
                borderColor: 'white',
                paddingLeft: 15,
              }}
            />
            <TouchableOpacity
              style={{width: '100%', alignItems: 'center'}}
              onPress={() => navigate('Home')}>
              <View
                style={{
                  marginTop: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '70%',
                  height: 40,
                  borderRadius: 2,
                  backgroundColor: '#2D2B2B',
                }}>
                <Text style={{fontSize: 20, color: 'white'}}>Giriş</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.lang}>
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
              <Image
                style={{
                  marginRight: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '30%',
                  height: 35,
                  borderRadius: 20,
                  resizeMode: 'cover',
                }}
                source={require('../img/tr.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
              <Image
                style={{
                  marginRight: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '30%',
                  height: 35,
                  borderRadius: 20,
                  resizeMode: 'cover',
                }}
                source={require('../img/eng.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, alignItems: 'flex-start'}}>
              <Image
                style={{
                  marginRight: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '30%',
                  height: 35,
                  borderRadius: 20,
                  resizeMode: 'cover',
                }}
                source={require('../img/arab.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box3} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    flex: 1,
  },

  box2: {
    flex: 4,
    opacity: 0.6,
    backgroundColor: '#979797',
  },

  box3: {
    flex: 1,
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lang: {
    flex: 1,
    flexDirection: 'row',
  },
  backgroundPhoto: {
    height: heigth,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
});
