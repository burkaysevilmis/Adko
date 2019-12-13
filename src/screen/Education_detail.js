import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
export default class Education_detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree',
      ],
    };
  }
  //<SliderBox images={this.state.images} />
  render() {
    return (
      <View style={styles.detailContainer}>
        <View style={styles.detailView}>
          <Text style={styles.detailText}>INDOMIE EĞİTİM 1</Text>
          <View style={styles.detailSlider}>
            <SliderBox sliderBoxHeight={'100%'} images={this.state.images} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  detailContainer: {
    alignSelf: 'center',
    fontSize: 18,
    paddingTop: 5,
  },
  detailView: {
    width: '90%',
    height: '70%',
  },
  detailText: {
    alignSelf: 'center',
    fontSize: 18,
    paddingTop: 5,
  },
  detailSlider: {
    width: '100%',
    height: '100%',
    marginTop: 10,
    alignItems: 'center',
  },
});
