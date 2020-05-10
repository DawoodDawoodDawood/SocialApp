import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import {WHITE_COLOR} from '../../themes/colors';
import {EXTRA_SMALL} from '../../themes/fonts';

class BroadcastChatHeaderComponent extends Component {
  state = {};
  render() {
    return (
      <TouchableOpacity style={styles.mainViewStyle}>
        <TouchableOpacity
          onPress={this.props.onPressBackArrow}
          style={styles.flexStyle}>
          <Image
            resizeMode="stretch"
            source={this.props.backArrow}
            style={{
              height: this.props.backArrowHeight
                ? this.props.backArrowHeight
                : 15,
              width: this.props.backArrowWidth ? this.props.backArrowWidth : 11,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 5, flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <View
              style={{
                height: 35,
                width: 35,
                borderRadius: 50,
                backgroundColor: '#B1D1CE',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../Icons/technology.png')}
                style={{height: 13, width: 15}}
              />
            </View>
          </View>
          <View style={{flex: 6, justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>{this.props.headerText}</Text>
            {/* {this.props.subText ? (
              <Text style={{fontSize: EXTRA_SMALL}}>
                {this.props.headerSubText}
              </Text>
            ) : (
              false
            )} */}
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

export default BroadcastChatHeaderComponent;

const styles = StyleSheet.create({
  onlineStatusStyle: {
    height: 10,
    width: 10,
    borderRadius: 20,
    backgroundColor: '#50DAFE',
    marginTop: -12,
    marginLeft: 30,
    borderColor: WHITE_COLOR,
    borderWidth: 2,
  },
  mainViewStyle: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: WHITE_COLOR,
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
