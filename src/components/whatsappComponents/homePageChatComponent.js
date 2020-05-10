import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {WHITE_COLOR, TEXT_NOTE_COLOR, VIEW_BG_COLOR} from '../../themes/colors';
import {EXTRA_LARGE, MEDIUM, SMALL, EXTRA_SMALL} from '../../themes/fonts';
class HomePageChatComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <TouchableOpacity
          style={[styles.mainViewStyle, {backgroundColor: this.props.bgColor}]}
          onPress={this.props.onPressMsgBar}>
          <View style={[styles.flexStyle, {alignItems: 'center'}]}>
            <Image
              source={require('../../Images/personImage.jpg')}
              style={styles.imageStyle}
            />
            {this.props.showOnlineStatus ? (
              <View style={styles.onlineStatusStyle} />
            ) : (
              false
            )}
          </View>
          <View style={{width: 5}} />
          <View style={{flex: 3}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View
                style={[
                  styles.flexStyle,
                  {
                    flex: 4,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                  },
                ]}>
                <Text style={styles.nameTextStyle}>
                  {this.props.nameText ? this.props.nameText : 'Person Name'}
                </Text>
              </View>
              <View style={[styles.flexStyle, {justifyContent: 'flex-end'}]}>
                {this.props.chatMuted ? (
                  <Image
                    source={require('../../Icons/muteIcon.png')}
                    style={{height: 20, width: 20}}
                  />
                ) : (
                  false
                )}
              </View>
            </View>
            <View style={{height: 5}} />
            <View
              style={[
                styles.flexStyle,
                {
                  paddingLeft: 5,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                },
              ]}>
              <Text style={{color: TEXT_NOTE_COLOR}}>
                {this.props.msgText
                  ? this.props.msgText
                  : ' Message Text will be show here'}
              </Text>
            </View>
            <View style={styles.underLineStyle} />
          </View>
          <View style={{flex: 1.1}}>
            <View style={[styles.flexStyle, {justifyContent: 'flex-end'}]}>
              <Text style={styles.msgTimeTextStyle}>
                {this.props.timeOfMsgReceived
                  ? this.props.timeOfMsgReceived
                  : '12:00 PM'}
              </Text>
            </View>
            <View style={{height: 5}} />
            <View style={[styles.flexStyle, {justifyContent: 'flex-start'}]}>
              {this.props.showArchiveButton ? (
                <TouchableOpacity style={styles.archiveViewStyle}>
                  <Text style={styles.archiveTextStyle}>Archive</Text>
                </TouchableOpacity>
              ) : (
                <View
                  style={[
                    styles.msgNumberViewStyle,
                    {
                      backgroundColor: this.props.numViewColor
                        ? this.props.numViewColor
                        : VIEW_BG_COLOR,
                    },
                  ]}>
                  <Text
                    style={{
                      color: WHITE_COLOR,
                      fontWeight: 'bold',
                      padding: 10,
                      fontSize: EXTRA_SMALL,
                    }}>
                    {this.props.numberofMsgs ? this.props.numberofMsgs : '120'}
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.underLineStyle} />
          </View>
        </TouchableOpacity>

        {this.props.showBroadcast ? (
          <TouchableOpacity
            style={[
              styles.mainViewStyle,
              {backgroundColor: this.props.bgColor},
            ]}
            onPress={this.props.onPressMsgBar}>
            <View style={[styles.flexStyle, {alignItems: 'center'}]}>
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 100,
                  backgroundColor: '#B1D1CE',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../Icons/technology.png')}
                  style={{height: 20, width: 22}}
                />
              </View>
            </View>
            <View style={{width: 5}} />
            <View style={{flex: 3}}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={[
                    styles.flexStyle,
                    {
                      flex: 4,
                      alignItems: 'flex-start',
                      justifyContent: 'flex-end',
                    },
                  ]}>
                  <Text style={styles.nameTextStyle}>
                    {this.props.nameText
                      ? this.props.nameText
                      : 'Qasim, Abbas, Faheem...'}
                  </Text>
                </View>

                <View
                  style={[
                    styles.flexStyle,
                    {
                      justifyContent: 'flex-end',
                      flex: 1.5,
                      alignItems: 'flex-start',
                    },
                  ]}>
                  <Text style={styles.msgTimeTextStyle}>
                    {this.props.timeOfMsgReceived
                      ? this.props.timeOfMsgReceived
                      : '4/21/2020'}
                  </Text>
                </View>
              </View>
              <View style={{height: 5}} />
              <View
                style={[
                  styles.flexStyle,
                  {
                    paddingLeft: 5,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  },
                ]}>
                <Text style={{color: TEXT_NOTE_COLOR}}>
                  {this.props.msgText
                    ? this.props.msgText
                    : 'You created a broadcast with 6 contacts'}
                </Text>
              </View>
              <View style={styles.underLineStyle} />
            </View>
          </TouchableOpacity>
        ) : (
          false
        )}
      </React.Fragment>
    );
  }
}

export default HomePageChatComponent;

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 80,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  onlineStatusStyle: {
    height: 15,
    width: 15,
    borderRadius: 20,
    backgroundColor: '#00B5AA',
    marginTop: -20,
    marginLeft: 43,
    borderColor: WHITE_COLOR,
    borderWidth: 2,
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {height: 55, width: 55, borderRadius: 50},
  nameTextStyle: {
    fontSize: MEDIUM,
    fontWeight: '300',
    paddingLeft: 5,
  },
  underLineStyle: {height: 1, backgroundColor: '#EAEAEA'},
  msgTimeTextStyle: {
    fontSize: SMALL,
    paddingLeft: 5,
    color: TEXT_NOTE_COLOR,
  },
  msgNumberViewStyle: {
    height: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  archiveViewStyle: {
    height: 18,
    borderColor: TEXT_NOTE_COLOR,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  archiveTextStyle: {fontSize: 10, color: TEXT_NOTE_COLOR, padding: 10},
});
