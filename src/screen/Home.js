import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window');
export default class Home extends Component {
  render() {
    const veri = [];
    for (let index = 0; index < 8; index++) {
      veri.push(
        <View style={{width: width, height: 500, alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              height: '60%',
              borderRadius: 15,
              marginTop: 15,
            }}>
            <View style={{height: '8%', justifyContent: 'center'}}>
              <Text style={{alignSelf: 'center', fontSize: 18}}>
                MİGROS REYON FOTOĞRFLARI
              </Text>
            </View>

            <View style={{width: '100%', height: '70%'}}>
              <Image
                resizeMode={'cover'}
                style={{width: '100%', height: '100%', borderRadius: 15}}
                source={require('../images/haber.png')}
              />
            </View>
            <View style={{height: '10%', paddingLeft: 10, paddingTop: 5}}>
              <Text style={{fontSize: 14}}>
                Ziyaret Ettiğiniz noktalarda öncesi ve sonrası fotoğraflarınızı
                sistem üzerinden iletmenizi rica ederiz.
              </Text>
            </View>

            <View
              style={{
                paddingTop: 25,
                width: '100%',
                height: '20%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{paddingLeft: 10, color: '#2CC3D9', fontSize: 16}}>
                  04/02/2019
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 15,
                  justifyContent: 'flex-end',
                  height: '70%',
                  width: '25%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#2CC3D9',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('NewsDetail')}>
                  <Text style={{fontSize: 15, color: 'white'}}>DETAY</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '90%',
              height: '5%',
              backgroundColor: '#2CC3D9',
              borderRadius: 15,
              marginTop: 30,
              alignItems: 'center',
              paddingLeft: 10,
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 14}}>Bu haberi okudunuz</Text>
            <Icon style={{paddingLeft: 15}} name="ios-checkmark" size={38} />
          </View>
        </View>,
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.Box}>
          <View style={styles.txtBox}>
            <Text style={styles.txtWelcome}>Hoşgeldiniz</Text>
            <Text style={styles.txtName}>BURKAY SEVİLMİŞ</Text>
          </View>
          <View style={styles.ImageBox}>
            <Image
              style={styles.ImageStyle}
              resizeMode={'cover'}
              source={require('../images/test.jpg')}
            />
          </View>
        </View>
        <ScrollView>{veri}</ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  Box: {
    flexDirection: 'row',
    width: '90%',
    height: '10%',
    justifyContent: 'center',
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    borderLeftColor: '#55C1B4',
    borderLeftWidth: 3,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 8,
  },
  txtBox: {
    width: '80%',
    justifyContent: 'space-around',
  },
  txtWelcome: {
    paddingLeft: 20,
    fontSize: 16,
    color: '#55C1B4',
  },
  txtName: {
    paddingLeft: 20,
    fontSize: 16,
    color: '#000000',
  },
  ImageBox: {
    width: '20%',
  },
  ImageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
});
