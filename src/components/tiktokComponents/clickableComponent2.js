import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
class ClickableComponent2 extends Component {
  render() {
    return (
      <React.Fragment>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={styles.clickableViewStyle}>
          <View style={[styles.flexStyle, {alignItems: 'center'}]}>
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
                fontWeight: '900',
              }}>
              {this.props.text}
            </Text>
          </View>

          <View style={[styles.flexStyle, {alignItems: 'center'}]}>
            {this.props.showTick ? (
              <TouchableOpacity>
                <Image
                  source={require('../../Icons/redTickIcon.png')}
                  style={{height: 14, width: 20}}
                />
              </TouchableOpacity>
            ) : (
              false
            )}
          </View>
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}

export default ClickableComponent2;

const styles = StyleSheet.create({
  clickableViewStyle: {
    height: 40,
    width: '100%',
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
