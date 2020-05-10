import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {WHITE_COLOR} from '../../themes/colors';
import {MEDIUM} from '../../themes/fonts';
import FollowerSingleComponent from './followersComponent';
import VideoComponent from './videoComponent';
import CustomSearchBar from '../whatsappComponents/customSearchBar';
class FollowerSoundScreenComponent extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <View style={{height: 15}} />
        <CustomSearchBar />
        <View style={{height: 10}} />
      </View>
    );
  }
}

export default FollowerSoundScreenComponent;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
});
