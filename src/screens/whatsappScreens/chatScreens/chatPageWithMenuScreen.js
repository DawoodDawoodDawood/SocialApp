import React, {Component} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';

import {Stopwatch} from 'react-native-stopwatch-timer';
import ChatHeaderComponent from '../../../components/whatsappComponents/chatHeaderComponent';
import ChatLeftComponent from '../../../components/whatsappComponents/chatLeftComponent';
import ChatRightComponent from '../../../components/whatsappComponents/chatRightComponent';
import ClickableComponent from '../../../components/whatsappComponents/clickableComponent';
import {
  WHITE_COLOR,
  VIEW_BG_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import {MEDIUM} from '../../../themes/fonts';
import FileMenuComponent from '../../../components/whatsappComponents/fileMenuComponent';
class ChatPageWithMenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupVisible: false,
      menuPopupVisible: false,
      isFocus: false,
      msgText: '',
      isTimerStart: false,
      isStopwatchStart: false,
      timerDuration: 90000,
      resetTimer: false,
      resetStopwatch: false,
      voiceRecording: false,
    };
    this.startStopTimer = this.startStopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.startStopStopWatch = this.startStopStopWatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }
  togglePopup() {
    this.setState({popupVisible: !this.state.popupVisible});
  }
  toggleMenuPopup() {
    this.setState({menuPopupVisible: !this.state.menuPopupVisible});
  }

  startStopTimer() {
    this.setState({isTimerStart: !this.state.isTimerStart, resetTimer: false});
  }
  resetTimer() {
    this.setState({isTimerStart: false, resetTimer: true});
  }
  startStopStopWatch() {
    this.setState({
      isStopwatchStart: !this.state.isStopwatchStart,
      resetStopwatch: false,
    });
  }
  resetStopwatch() {
    this.setState({isStopwatchStart: false, resetStopwatch: true});
  }
  getFormattedTime(time) {
    // this.currentTime = time;
  }

  StartRecording() {
    this.setState({voiceRecording: true});
  }
  StopRecording() {
    this.setState({voiceRecording: false});
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F6F6F6'}}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <ChatHeaderComponent
          showVideoCallButton
          backArrow={require('../../../Icons/backIcon.png')}
          headerProfile={require('../../../Images/personImage.jpg')}
          headerText={'Dolor Lorem'}
          onPressMenuIcon={() => this.toggleMenuPopup()}
          onPressBackArrow={() => this.props.navigation.goBack()}
          onPressBio={() =>
            this.props.navigation.navigate('GroupMainTabScreen')
          }
          onPressVideoButton={() =>
            this.props.navigation.navigate('VideoCallScreen')
          }
          onPressAudioCall={() =>
            this.props.navigation.navigate('AudioCallScreen')
          }
        />

        {this.state.menuPopupVisible ? (
          <View style={styles.popupMainViewStyle}>
            <View style={{flex: 1.2, backgroundColor: 'transparent'}} />
            <View style={styles.popupInnerViewStyle}>
              <ClickableComponent
                text={'Search'}
                image={require('../../../Icons/searchIcon.png')}
                iconHeight={18}
                iconWidth={18}
                flex={2.5}
              />
              <ClickableComponent
                text={'Clear History'}
                image={require('../../../Icons/historyIcon.png')}
                iconHeight={19}
                iconWidth={22}
                flex={2.5}
              />
              <ClickableComponent
                text={'Mute Notification'}
                image={require('../../../Icons/muteBlackIcon.png')}
                iconHeight={22}
                iconWidth={20}
                flex={2.5}
              />
              <ClickableComponent
                text={'Delete Chat'}
                image={require('../../../Icons/deleteIcon.png')}
                iconHeight={20}
                iconWidth={16}
                flex={2.5}
              />
            </View>
          </View>
        ) : (
          false
        )}
        <ImageBackground
          resizeMode={'stretch'}
          style={{flex: 1}}
          source={require('../../../Images/chatBgImage.png')}>
          <View style={{height: 10}} />

          <ScrollView>
            <ChatLeftComponent />
            <ChatRightComponent />
            <View
              style={[
                styles.flexStyle,
                {height: 40, justifyContent: 'flex-start'},
              ]}>
              <View style={styles.timeViewStyle}>
                <Text style={{color: WHITE_COLOR, fontSize: MEDIUM}}>
                  March 18
                </Text>
              </View>
            </View>
            {/* <View style={{height: 5}} /> */}
            <ChatLeftComponent />
            <ChatRightComponent />
            <ChatLeftComponent />
            <ChatRightComponent />
            <ChatRightComponent />
            <ChatLeftComponent />
            <ChatRightComponent />
          </ScrollView>
        </ImageBackground>

        {this.state.popupVisible ? (
          <View style={{height: 200}}>
            <FileMenuComponent />
          </View>
        ) : (
          false
        )}

        {this.state.voiceRecording ? (
          <View style={{height: 50, flexDirection: 'row'}}>
            <View style={{flex: 7, justifyContent: 'center'}}>
              <View style={styles.recordingViewStyle}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{width: 10}} />
                  <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
                    <Stopwatch
                      laps
                      start={this.state.isStopwatchStart}
                      //To start
                      reset={this.state.resetStopwatch}
                      //To reset
                      options={styles.container}
                      //options for the styling
                      getTime={this.getFormattedTime}
                    />
                  </View>
                </View>
                <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
                  <TouchableOpacity
                    onPress={() => {
                      this.resetStopwatch();
                      this.StopRecording();
                    }}>
                    <Text style={{color: 'red', paddingRight: 10}}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={[styles.flexStyle, {alignItems: 'flex-end', right: 7}]}>
              <TouchableOpacity
                style={[styles.microphoneButtonStyle, {height: 45, width: 45}]}>
                <Image
                  resizeMode="stretch"
                  source={require('../../../Icons/shareIcon.png')}
                  style={{height: 22, width: 22, marginRight: 2}}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.bottomMainViewStyle}>
            <View style={styles.flexStyle}>
              <Image
                resizeMode="stretch"
                source={require('../../../Icons/faceIcon.png')}
                style={{height: 20, width: 20}}
              />
            </View>
            <View style={{flex: 5, justifyContent: 'center'}}>
              <TextInput
                placeholder={'Type something'}
                onChangeText={text => {
                  if (text === '') {
                    this.setState({msgText: text, isFocus: false});
                  } else if (text != '') {
                    this.setState({msgText: text, isFocus: true});
                  }
                }}
              />
            </View>
            <View style={styles.flexStyle}>
              <TouchableOpacity onPress={() => this.togglePopup()}>
                <Image
                  resizeMode="stretch"
                  source={require('../../../Icons/selectFileIcon.png')}
                  style={{height: 25, width: 20}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.flexStyle}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('ChatCameraScreen')
                }>
                <Image
                  resizeMode="stretch"
                  source={require('../../../Icons/selectImageIcon.png')}
                  style={{height: 20, width: 20}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.flexStyle}>
              {this.state.isFocus ? (
                <TouchableOpacity style={styles.microphoneButtonStyle}>
                  <Image
                    resizeMode="stretch"
                    source={require('../../../Icons/shareIcon.png')}
                    style={{height: 15, width: 15, marginRight: 1}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    this.StartRecording();
                    this.startStopStopWatch();
                  }}
                  style={styles.microphoneButtonStyle}>
                  <Image
                    resizeMode="stretch"
                    source={require('../../../Icons/microphoneIcon.png')}
                    style={{height: 15, width: 10}}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default ChatPageWithMenuScreen;

const styles = StyleSheet.create({
  timeViewStyle: {
    height: 30,
    width: 120,
    borderRadius: 30,
    backgroundColor: '#D2CFCD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupMainViewStyle: {
    marginTop: 50,
    height: 160,
    flexDirection: 'row',
    width: '85%',
    alignSelf: 'center',
    position: 'absolute',
  },
  popupInnerViewStyle: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: WHITE_COLOR,
    elevation: 1,
  },
  bottomMainViewStyle: {
    height: 50,
    backgroundColor: 'white',
    elevation: 5,
    flexDirection: 'row',
  },
  microphoneButtonStyle: {
    height: 30,
    width: 30,
    backgroundColor: VIEW_BG_COLOR,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#FF0000',
    width: 100,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: '#FFF',
    marginLeft: 7,
  },
  recordingViewStyle: {
    height: 45,
    width: '98%',
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: WHITE_COLOR,
    elevation: 1,
    flexDirection: 'row',
  },
});
