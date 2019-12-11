import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class DrawerButton extends Component {
  toggleMenu = () => {
    this.props.navigation.toggleDrawer();
  }
  render() {
    return (
      <TouchableOpacity onPress={this.toggleMenu} style={styles.buton}>
        <Icon name="ios-menu" size={24} />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  buton: {
    paddingHorizontal: 10,
  },
});
