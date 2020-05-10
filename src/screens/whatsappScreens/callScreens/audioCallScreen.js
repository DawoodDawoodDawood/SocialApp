import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {
  WHITE_COLOR,
  VIEW_BG_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import {MEDIUM, EXTRA_LARGE, LARGE} from '../../../themes/fonts';
class AudioCallScreen extends Component {
  state = {voiceOn: false, speakerOn: false};
  toggleVoiceIcon() {
    this.setState({voiceOn: !this.state.voiceOn});
  }
  toggleSpeaker() {
    this.setState({speakerOn: !this.state.speakerOn});
  }
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <View style={{height: 50, backgroundColor: VIEW_BG_COLOR}}>
          <StatusBar
            backgroundColor={STATUS_BAR_COLOR}
            barStyle="dark-content"
          />
          <View style={{height: 50, flexDirection: 'row'}}>
            <TouchableOpacity style={styles.flexStyle}>
              <Image
                source={require('../../../Icons/arrowDownIcon.png')}
                style={{height: 15, width: 15}}
              />
            </TouchableOpacity>
            <View style={[styles.flexStyle, {flex: 6}]}>
              <Text
                style={{
                  fontSize: MEDIUM,
                  color: WHITE_COLOR,
                }}>
                VOICE CALL
              </Text>
            </View>
            <View style={{flex: 1}} />
          </View>
        </View>
        <View style={styles.textViewStyle}>
          <Text style={{color: WHITE_COLOR, fontSize: LARGE}}>
            Muhammad Qasim
          </Text>
          <View style={{height: 15}} />
          <Text style={{color: WHITE_COLOR, fontSize: 13}}>Calling</Text>
        </View>

        <View style={{flex: 1, backgroundColor: 'red'}}>
          <ImageBackground
            source={require('../../../Images/image.jpg')}
            style={[styles.flexStyle, {justifyContent: 'flex-end'}]}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.endCallButtonStyle}>
              <Image
                source={require('../../../Icons/callicon.png')}
                style={{height: 25, width: 25}}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={styles.bottomViewStyle}>
          <View style={styles.flexStyle}>
            <TouchableOpacity onPress={() => this.toggleSpeaker()}>
              {this.state.speakerOn ? (
                <View
                  style={[
                    styles.endCallButtonStyle,
                    {bottom: 0, backgroundColor: '#02819B'},
                  ]}>
                  <Image
                    source={require('../../../Icons/volumeOnIcon.png')}
                    style={{height: 20, width: 20}}
                  />
                </View>
              ) : (
                <Image
                  source={require('../../../Icons/volumeOffIcon.png')}
                  style={{height: 20, width: 20}}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.flexStyle}>
            <TouchableOpacity>
              <Image
                source={require('../../../Icons/videoCameraIcon.png')}
                style={{height: 15, width: 20}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.flexStyle}>
            <TouchableOpacity onPress={() => this.toggleVoiceIcon()}>
              {this.state.voiceOn ? (
                <View
                  style={[
                    styles.endCallButtonStyle,
                    {bottom: 0, backgroundColor: '#02819B'},
                  ]}>
                  <Image
                    source={require('../../../Icons/microphoneOnIcon.png')}
                    style={{height: 20, width: 20}}
                  />
                </View>
              ) : (
                <Image
                  source={require('../../../Icons/microphoneOffIcon.png')}
                  style={{height: 20, width: 20}}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default AudioCallScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  flexStyle: {justifyContent: 'center', alignItems: 'center', flex: 1},
  textViewStyle: {
    height: 80,
    backgroundColor: VIEW_BG_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomViewStyle: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: VIEW_BG_COLOR,
  },
  endCallButtonStyle: {
    height: 55,
    width: 55,
    borderRadius: 100,
    backgroundColor: '#E81C43',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
