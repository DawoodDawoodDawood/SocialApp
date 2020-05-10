import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {WHITE_COLOR} from '../../themes/colors';
import {MEDIUM} from '../../themes/fonts';
import FollowerSingleComponent from './followersComponent';
import CustomSearchBar from '../whatsappComponents/customSearchBar';
class FollowerScreenComponent extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <View style={{height: 10}} />
        <CustomSearchBar />
        <View style={{height: 10}} />
        <FollowerSingleComponent forFollowers />
        <FollowerSingleComponent forFollowers />
        <FollowerSingleComponent forFollowers friend />
        <FollowerSingleComponent forFollowers />
      </View>
    );
  }
}

export default FollowerScreenComponent;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
});
