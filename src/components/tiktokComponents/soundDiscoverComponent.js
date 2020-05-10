import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {WHITE_COLOR, TEXT_NOTE_COLOR} from '../../themes/colors';
import {SMALL} from '../../themes/fonts';
import SoundScreenComponent from './soundScreenComponent';

class SoundDiscoverComponent extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <View style={{height: 10}} />
        <View style={styles.mainViewStyle}>
          <View style={styles.flexStyle}>
            <Text style={{color: TEXT_NOTE_COLOR, fontSize: SMALL}}>
              For you
            </Text>
          </View>
          <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
            <Text style={{color: TEXT_NOTE_COLOR, fontSize: SMALL}}>All</Text>
          </View>
        </View>

        <SoundScreenComponent />
        <SoundScreenComponent />
        <SoundScreenComponent />
        <SoundScreenComponent />
        <SoundScreenComponent />
        <SoundScreenComponent />
      </View>
    );
  }
}

export default SoundDiscoverComponent;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  mainViewStyle: {
    height: 40,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  flexStyle: {flex: 1, justifyContent: 'center', alignItems: 'flex-start'},
});
