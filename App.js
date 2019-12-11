import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Root from './src/Root';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <Root/>
    );
  }
}
