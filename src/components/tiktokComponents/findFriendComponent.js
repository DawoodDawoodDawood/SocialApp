import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {TEXT_NOTE_COLOR, WHITE_COLOR} from '../../themes/colors';
import {EXTRA_SMALL} from '../../themes/fonts';
class FindFriendComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={styles.clickableViewStyle}>
          <View style={styles.flexStyle}>
            <View
              style={[
                styles.iconBgViewColor,
                {
                  backgroundColor: this.props.iconViewBgColor,
                  height: this.props.bgHeight ? this.props.bgHeight : 50,
                  width: this.props.bgWidth ? this.props.bgWidth : 50,
                  borderRadius: this.props.borderRadius
                    ? this.props.borderRadius
                    : 50,
                },
              ]}>
              <Image
                source={this.props.image}
                style={{
                  height: this.props.iconHeight,
                  width: this.props.iconWidth,
                }}
              />
            </View>
          </View>
          <View
            style={[
              styles.flexStyle,
              {flex: this.props.flex ? this.props.flex : 3},
            ]}>
            <Text
              style={{
                color: this.props.textColor ? this.props.textColor : 'black',
              }}>
              {this.props.text}
            </Text>
            {this.props.subText ? (
              <Text style={{color: TEXT_NOTE_COLOR, fontSize: EXTRA_SMALL}}>
                {this.props.subTxt}
              </Text>
            ) : (
              false
            )}
          </View>
          {this.props.showArrowRight ? (
            <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
              <TouchableOpacity>
                <Image
                  source={require('../../Icons/arrowRightIconGrey.png')}
                  style={{height: 14, width: 8}}
                />
              </TouchableOpacity>
            </View>
          ) : (
            false
          )}
        </TouchableOpacity>
        <View style={{height: 5}} />
      </React.Fragment>
    );
  }
}

export default FindFriendComponent;

const styles = StyleSheet.create({
  clickableViewStyle: {
    height: 60,
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
