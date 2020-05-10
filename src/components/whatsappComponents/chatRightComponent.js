import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, ImageBackground} from 'react-native';
import {BLACK_COLOR, TEXT_NOTE_COLOR} from '../../themes/colors';
import {EXTRA_SMALL} from '../../themes/fonts';

class ChatRightComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <View style={{height: 60, flexDirection: 'row'}}>
          <ImageBackground
            resizeMode={'stretch'}
            source={require('../../Images/chatRightBG.png')}
            style={{
              flex: 8,
              minHeight: 60,
              marginLeft: 40,
              marginRight: 10,
              borderRadius: 5,
              paddingLeft: 10,
              paddingRight: 25,
              flexDirection: 'row',
            }}>
            <View style={[styles.flexStyle, {flex: 5}]}>
              <Text style={{color: 'black'}}>There are additional steps</Text>
            </View>
            <View style={{flex: 2, flexDirection: 'row'}}>
              <View
                style={[
                  styles.flexStyle,
                  {flex: 2, justifyContent: 'flex-end'},
                ]}>
                <Text style={styles.timingTextStyle}>10:34 am</Text>
              </View>

              <View style={[styles.flexStyle, {justifyContent: 'flex-end'}]}>
                <Image
                  source={require('../../Icons/seenIcon.png')}
                  style={{height: 10, width: 15, marginBottom: 7}}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={{height: 5}} />
      </React.Fragment>
    );
  }
}

export default ChatRightComponent;

const styles = StyleSheet.create({
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
