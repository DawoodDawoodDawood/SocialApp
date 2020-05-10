import Carousel from 'react-native-snap-carousel';
import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {STATUS_BAR_COLOR} from '../../../themes/colors';

export class ShowStatusScreen extends Component {
  state = {
    entries: [{id: 1}, {id: 2}, {id: 3}],
  };
  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>Farhan</Text>
      </View>
    );
  };

  render() {
    return (
      <React.Fragment>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={'70%'}
          itemWidth={'70%'}
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
  },
  slide: {backgroundColor: 'red', width: '90%', height: '70%'},
});
