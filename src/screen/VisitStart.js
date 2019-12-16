/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class HomeTest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.startDay}>Güne Başlangıç</Text>
        <View style={styles.coordinatButtonContainer}>
          <TouchableOpacity style={styles.coordinatButtonOpacity}>
            <Text style={styles.coordinatButtonText}>Konum Bilgisi Al</Text>
            <Icon
              style={styles.coordinatButtonIcon}
              name="ios-locate"
              size={20}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.coordinatInputContainer}>
          <Text style={styles.coordinatInputText}>
            Koordinatlarınızı görmek için butona tıklayın.
          </Text>
          <Text style={styles.coordinatInputText}>Enlem</Text>
          <View style={styles.coordinatInputView}>
            <TextInput style={styles.coordinatInput} />
          </View>
          <Text style={styles.coordinatInputText}>Boylam</Text>
          <View style={styles.coordinatInputView}>
            <TextInput style={styles.coordinatInput} />
          </View>
          <Text style={styles.coordinatInputText}>Doğruluk</Text>
          <View style={styles.coordinatInputView}>
            <TextInput style={styles.coordinatInput} />
          </View>
        </View>
        <View style={styles.downButtonContainer}>
          <TouchableOpacity style={styles.downButtonSave}>
            <Text style={styles.downButtonText}>Kaydet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.downButtonQuit}>
            <Text style={styles.downButtonText}>Vazgeç</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  startDay: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 15,
  },
  coordinatButtonContainer: {
    width: '75%',
    borderRadius: 7,
    backgroundColor: '#2CC3D9',
    justifyContent: 'center',
  },
  coordinatButtonOpacity: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  coordinatButtonText: {
    fontSize: 15,
    color: 'white',
  },
  coordinatButtonIcon: {
    color: 'white',
  },
  coordinatInputContainer: {
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
  },
  coordinatInputText: {
    alignSelf: 'center',
    marginTop: 20,
  },
  coordinatInputView: {
    width: '75%',
    marginTop: 10,
    justifyContent: 'center',
  },
  coordinatInput: {
    height: 35,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    color: 'black',
  },
  downButtonContainer: {
    borderRadius: 15,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  downButtonSave: {
    backgroundColor: '#00A859',
    borderRadius: 7,
    height: 30,
    width: 125,
    justifyContent: 'center',
    alignItems: 'center',
  },
  downButtonQuit: {
    backgroundColor: '#E63B2E',
    borderRadius: 7,
    height: 30,
    width: 125,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
  },
  downButtonText: {
    fontSize: 15,
    color: 'white',
  },
});
