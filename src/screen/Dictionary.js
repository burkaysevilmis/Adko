import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container, Header, Content, Accordion} from 'native-base';
const dataArray = [
  {
    title: 'BİTKİSEL HURMA YAĞI',
    content:
      'HURMA AĞACINDAN (PALM OİL) ELDE EDİLEN BİR TÜR BİTKİSEL YAĞDIR.ZENGİN BİR ANTİOKSİDAN KAYNAĞIDIR..',
  },
  {
    title: 'SKU',
    content: 'Satış Noktasında satılan ürün çeşitlerinin toplamıdır.',
  },
];
export default class Dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
      </View>
    );
  }
}
