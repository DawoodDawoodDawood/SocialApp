import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {TEXT_NOTE_COLOR} from '../../themes/colors';
import {SMALL} from '../../themes/fonts';
class ClickableComponent3 extends Component {
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
                  height: this.props.bgHeight ? this.props.bgHeight : 30,
                  width: this.props.bgWidth ? this.props.bgWidth : 30,
                },
              ]}>
              <Image
                source={this.props.imageSource}
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
              {flex: this.props.flex ? this.props.flex : 5},
            ]}>
            <Text
              style={{
                color: this.props.textColor ? this.props.textColor : 'black',
                fontSize: 13,
                fontWeight: '600',
              }}>
              {this.props.text}
            </Text>
          </View>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <View style={[styles.flexStyle, {alignItems: 'flex-end', flex: 3}]}>
              <Text style={{color: TEXT_NOTE_COLOR}}>Public</Text>
            </View>
            <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
              <Image
                source={require('../../Icons/arrowRightIconGrey.png')}
                style={{height: 12, width: 7, marginTop: 4}}
              />
            </View>
          </View>
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}

export default ClickableComponent3;

const styles = StyleSheet.create({
  clickableViewStyle: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  iconBgViewColor: {justifyContent: 'center', alignItems: 'center'},
});
