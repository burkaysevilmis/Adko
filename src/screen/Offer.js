import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {Table, TableWrapper, Row} from 'react-native-table-component';
const {width, height} = Dimensions.get('window');
export default class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['+', 'Kategori', 'Öneri', 'Fotograf', 'Tarih'],
      widthArr: [50, 150, 75, 75, 100],
      heightArr: [50, 25, 25, 25, 25],
    };
  }
  componentDidMount() {
    const deger = this.state.tableHead.length;
    const bolum = width / deger;
    this.setState({
      widthArr: [bolum, bolum, bolum, bolum, bolum],
    });
  }

  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 5; j += 1) {
        rowData.push('1\nTeşhir\nÖneri');
      }
      tableData.push(rowData);
    }
    return (
      <View style={styles.container}>
        <Text style={{alignSelf: 'center', fontSize: 20}}>Öneriler</Text>
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

      //   <View>
      //      <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
      //   </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 10, backgroundColor: '#fff'},
  header: {height: 50, backgroundColor: '#537791'},
  text: {textAlign: 'center', fontWeight: '100'},
  dataWrapper: {marginTop: -1},
  row: {height: 70, backgroundColor: '#E7E6E1'},
});
