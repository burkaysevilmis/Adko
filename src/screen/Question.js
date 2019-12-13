import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Table, TableWrapper, Row} from 'react-native-table-component';
const {width, height} = Dimensions.get('window');
export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Kayıt Tarihi', 'Soru', 'Cevap'],
      widthArr: [120, 100, 200],
    };
  }
  componentDidMount() {
    const deger = this.state.tableHead.length;
    const bolum = width / deger;
    this.setState({
      widthArr: [bolum, bolum, bolum],
    });
  }
  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 3; i += 1) {
      const rowData = [];
      for (let j = 0; j < 3; j += 1) {
        rowData.push(width);
      }
      tableData.push(rowData);
    }
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row
                data={state.tableHead}
                widthArr={state.widthArr}
                style={styles.header}
                textStyle={styles.text}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={state.widthArr}
                    heightArr={state.heightArr}
                    style={[
                      styles.row,
                      index % 2 && {backgroundColor: '#F7F6E7'},
                    ]}
                    textStyle={styles.text}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {height: 50, backgroundColor: '#537791'},
  text: {textAlign: 'center', fontWeight: '100'},
  dataWrapper: {marginTop: -1},
  row: {height: 70, backgroundColor: '#E7E6E1'},
});
