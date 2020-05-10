import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {TEXT_NOTE_COLOR, WHITE_COLOR} from '../../themes/colors';
import {EXTRA_SMALL} from '../../themes/fonts';
class ClickableComponent extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          height: 55,
          flexDirection: 'row',
        }}>
        <View
          style={[
            styles.flexStyle,
            {alignItems: 'flex-start', marginLeft: 15},
          ]}>
          <Text style={{fontSize: 14, fontWeight: '500'}}>
            {this.props.text}
          </Text>
        </View>
        <View
          style={[styles.flexStyle, {alignItems: 'flex-end', marginRight: 17}]}>
          <Image
            source={require('../../Icons/arrowRightBlackIcon.png')}
            style={{height: 14, width: 8}}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default ClickableComponent;

const styles = StyleSheet.create({
  clickableViewStyle: {
    height: 40,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: WHITE_COLOR,
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  iconBgViewColor: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
