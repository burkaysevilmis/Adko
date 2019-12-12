import React, { Component } from 'react';
import  {TouchableOpacity}  from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class menu extends Component {
    toggleMenu=()=>{
        this.props.navigation.toggleDrawer();
    };
  render() {
    return (
     <TouchableOpacity onPress={this.toggleMenu}>
         <Icon style={{paddingHorizontal:10}} name="ios-menu" size={29} />
     </TouchableOpacity>
    );
  }
}
