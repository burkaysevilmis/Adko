/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class HomeTest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <View
          style={{
            height: '15%',
            width: '90%',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              alignSelf: 'center',
            }}>
            MİGROS İNSERT
          </Text>
          <Icon
            style={{
              alignSelf: 'center',
              color: '#404E67',
            }}
            name="ios-arrow-down"
            size={45}
          />
        </View>
        <View
          style={{
            height: '60%',
            width: '90%',
          }}>
          <View
            style={{
              width: '100%',
              height: '90%',
            }}>
            <Image
              resizeMode={'cover'}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 15,
              }}
              source={require('../images/haber.png')}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              width: '100%',
              height: '10%',
              justifyContent: 'space-around',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#404E67',
                fontSize: 16,
              }}>
              01 / 01 / 2019
            </Text>
            <View
              style={{
                borderRadius: 7,
                height: '80%',
                width: '25%',
                backgroundColor: '#404E67',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Icon
                  style={{
                    color: 'white',
                    paddingRight: 10,
                  }}
                  name="ios-arrow-back"
                  size={20}
                />
                <Text
                  style={{
                    fontSize: 15,
                    color: 'white',
                  }}>
                  Geri Dön
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
