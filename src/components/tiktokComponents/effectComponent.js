import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {WHITE_COLOR} from '../../themes/colors';
import {EXTRA_SMALL} from '../../themes/fonts';
class EffectComponent extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.wrapperStyle}>
        <Image
          source={this.props.source}
          style={{height: 50, width: 50, borderRadius: 100}}
        />
        <View style={{height: 5}} />
        <Text style={styles.textStyle1}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default EffectComponent;

const styles = StyleSheet.create({
  wrapperStyle: {
    height: 100,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle1: {
    color: WHITE_COLOR,
    fontSize: EXTRA_SMALL,
  },
});
