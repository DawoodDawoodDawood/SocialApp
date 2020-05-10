import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, ImageBackground} from 'react-native';
import {TEXT_NOTE_COLOR, TEXT_BLUE_COLOR} from '../../themes/colors';
import {EXTRA_SMALL, SMALL} from '../../themes/fonts';

class ChatLeftComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <View style={{height: 60, flexDirection: 'row'}}>
          {this.props.showUserImage ? (
            <View
              style={[
                styles.flexStyle,
                {justifyContent: 'flex-end', alignItems: 'flex-end'},
              ]}>
              <Image
                source={require('../../Images/personImage.jpg')}
                style={{height: 40, width: 40, borderRadius: 100}}
              />
            </View>
          ) : (
            false
          )}
          <ImageBackground
            resizeMode={'stretch'}
            source={require('../../Images/chatLeftBG.png')}
            style={styles.msgTextViewStyle}>
            {this.props.showGroupChatContext ? (
              <View
                style={[
                  styles.flexStyle,
                  {flex: 4, justifyContent: 'flex-start'},
                ]}>
                <Text style={{color: TEXT_BLUE_COLOR, fontSize: SMALL}}>
                  Muhammad Salman
                </Text>
                <Text style={{color: 'black'}}>
                  There are additional steps. There are additional steps
                </Text>
              </View>
            ) : (
              <View style={[styles.flexStyle, {flex: 4}]}>
                <Text style={{color: 'black'}}>
                  There are additional steps. There are additional steps
                </Text>
              </View>
            )}
            <View style={{flex: 1.5, flexDirection: 'row'}}>
              <View
                style={[
                  styles.flexStyle,
                  {flex: 2, justifyContent: 'flex-end'},
                ]}>
                <Text style={styles.timingTextStyle}>10:32 am</Text>
              </View>

              <View style={{flex: 1}} />
            </View>
          </ImageBackground>
        </View>
        <View style={{height: 5}} />
      </React.Fragment>
    );
  }
}

export default ChatLeftComponent;

const styles = StyleSheet.create({
  msgTextViewStyle: {
    flex: 5,
    minHeight: 60,
    marginRight: 40,
    borderRadius: 5,
    paddingLeft: 20,
    marginLeft: 10,
    flexDirection: 'row',
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  imageStyle: {height: 45, width: 45, borderRadius: 50},
  bgImageStyle: {
    height: 50,
    width: '60%',
    alignSelf: 'center',
  },
  timingTextStyle: {
    color: TEXT_NOTE_COLOR,
    fontSize: EXTRA_SMALL,
    paddingBottom: 5,
  },
});
