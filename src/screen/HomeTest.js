import React, { Component } from 'react';
import { View, Text,StyleSheet,ScrollView } from 'react-native';

export default class HomeTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const deneme=[];
      for (let index = 0; index < 8; index++) {
          
          
      }
    return (
        <View style={{flex:1,backgroundColor:'grey'}}>
   <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

  
         
         <View style={{flex:1,backgroundColor:'green'}}>
             <View style={{height:'50%',width:'50%',backgroundColor:'blue'}}>
               
             </View>
         </View> 
         </ScrollView>
      </View>
    );
  }
}
