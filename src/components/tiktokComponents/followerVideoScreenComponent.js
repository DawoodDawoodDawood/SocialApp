import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {WHITE_COLOR} from '../../themes/colors';
import {MEDIUM} from '../../themes/fonts';
import FollowerSingleComponent from './followersComponent';
import VideoComponent from './videoComponent';
import CustomSearchBar from '../whatsappComponents/customSearchBar';
class FollowerVideoScreenComponent extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <View style={{height: 15}} />
        <CustomSearchBar />
        <View style={{height: 20}} />
        <View
          style={{
            height: 200,
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
          }}>
          <View style={{flex: 1}}>
            <VideoComponent />
          </View>
          <View style={{flex: 1}}>
            <VideoComponent />
          </View>
          <View style={{flex: 1}}>
            <VideoComponent />
          </View>
        </View>
      </View>
    );
  }
}

export default FollowerVideoScreenComponent;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
});
