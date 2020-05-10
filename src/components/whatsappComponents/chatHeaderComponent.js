import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import {WHITE_COLOR} from '../../themes/colors';
import {EXTRA_SMALL} from '../../themes/fonts';

class ChatHeaderComponent extends Component {
  state = {};
  render() {
    return (
      <TouchableOpacity
        style={styles.mainViewStyle}
        onPress={this.props.onPressHeader}>
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
        <TouchableOpacity
          onPress={this.props.onPressBio}
          style={{flex: 5, flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Image
              source={this.props.headerProfile}
              style={{height: 35, width: 35, borderRadius: 100}}
            />
            {this.props.showOnlineStatus ? (
              <View style={styles.onlineStatusStyle} />
            ) : (
              false
            )}
          </View>
          <View style={{flex: 4, justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>{this.props.headerText}</Text>
            {this.props.subText ? (
              <Text style={{fontSize: EXTRA_SMALL}}>
                {this.props.headerSubText}
              </Text>
            ) : (
              false
            )}
          </View>
        </TouchableOpacity>
        <View style={{flex: 2.5, flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            {this.props.showVideoCallButton ? (
              <TouchableOpacity onPress={this.props.onPressVideoButton}>
                <Image
                  resizeMode="stretch"
                  source={require('../../Icons/videoCallicon-o.png')}
                  style={{height: 11, width: 15}}
                />
              </TouchableOpacity>
            ) : (
              false
            )}
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity onPress={this.props.onPressAudioCall}>
              <Image
                resizeMode="stretch"
                source={require('../../Icons/audioCallicon-o.png')}
                style={{height: 15, width: 15}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity onPress={this.props.onPressMenuIcon}>
              <Image
                resizeMode="stretch"
                source={require('../../Icons/menuIcon-o.png')}
                style={{height: 15, width: 5}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ChatHeaderComponent;

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
