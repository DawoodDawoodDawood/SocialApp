import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {SMALL, EXTRA_SMALL, LARGE} from '../../../themes/fonts';
import {WHITE_COLOR} from '../../../themes/colors';

class VideoCallScreen extends Component {
  state = {voiceOn: false, camera: false};
  toggleVoiceIcon() {
    this.setState({voiceOn: !this.state.voiceOn});
  }
  toggleCamera() {
    this.setState({camera: !this.state.camera});
  }
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likecount: 200,
      commentcount: 9,
      recording: false,
      processing: false,
      time1: false,
      time2: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  selectTime1() {
    this.setState({time1: true, time2: false});
  }

  selectTime2() {
    this.setState({time1: false, time2: true});
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
  handleClick() {
    this.setState({
      liked: !this.state.liked,
      likecount: this.state.likecount + 1,
    });
  }

  async startRecording() {
    this.setState({recording: true});
    // default to mp4 for android as codec is not set
    const {uri, codec = 'mp4'} = await this.camera.recordAsync();
  }
  stopRecording() {
    this.setState({recording: false});
  }

  render() {
    const {recording, processing} = this.state;

    let button = (
      <TouchableOpacity onPress={this.startRecording.bind(this)}>
        <Image
          style={styles.capture}
          source={require('../../../Images/cameraStart.png')}
        />
      </TouchableOpacity>
    );

    if (recording) {
      button = (
        <TouchableOpacity
          onPress={this.stopRecording.bind(this)}
          style={styles.capture}>
          <Text style={{fontSize: 11, fontWeight: 'bold'}}>STOP </Text>
        </TouchableOpacity>
      );
    }

    if (processing) {
      button = (
        <View style={styles.capture}>
          <ActivityIndicator animating size={18} />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={
            'We need your permission to use your camera phone'
          }
        />
        <View style={styles.full}>
          <View style={{left: 20, top: 25}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                resizeMode={'stretch'}
                style={{width: 15, height: 15}}
                source={require('../../../Icons/arrowDownIcon.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{left: 130, marginTop: 25}}>
            <Text
              style={{
                color: WHITE_COLOR,
              }}>
              VIDEO CALL
            </Text>
          </View>
          <View style={styles.flexStyle1}>
            <View style={{height: 40}} />
            <View>
              <Image
                resizeMode={'stretch'}
                style={{width: 100, height: 100}}
                source={require('../../../Images/person.png')}
              />
              <View style={{height: 10}} />
              <Text
                style={{
                  color: WHITE_COLOR,
                  marginLeft: 10,
                  fontSize: LARGE,
                }}>
                M Qasim
              </Text>
              <View style={{height: 10}} />
              <Text
                style={{
                  color: WHITE_COLOR,
                  marginLeft: 20,
                }}>
                Ringing
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 60,
            bottom: 130,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.endCallButtonStyle}>
            <Image
              source={require('../../../Icons/callicon.png')}
              style={{height: 25, width: 25}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            position: 'absolute',
            bottom: 25,
          }}>
          <View style={styles.flexStyle}>
            <TouchableOpacity onPress={() => this.toggleCamera()}>
              {/* <View style={styles.bgViewStyleStyle}>
                  <Image
                    source={require('../../../Icons/flipCameraIcon.png')}
                    style={{height: 28, width: 28}}
                  />
                </View> */}

              <Image
                source={require('../../../Icons/flipCameraIcon.png')}
                style={{height: 28, width: 28}}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.flexStyle}>
            <TouchableOpacity>
              <Image
                source={require('../../../Icons/videoGreyIcon.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.flexStyle}>
            <TouchableOpacity>
              <Image
                source={require('../../../Icons/microphoneOnIcon.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  capture: {
    flex: 0,
    backgroundColor: '#FC3C6A',
    borderRadius: 50,
    alignSelf: 'center',
    margin: 20,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  full: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
  },
  rightside: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 8,
  },
  leftside: {
    alignItems: 'flex-start',
  },
  rightcontent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  likecount: {
    color: 'white',
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  commentcount: {
    color: 'white',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  share: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagtitle: {
    padding: 10,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  tag: {
    backgroundColor: '#f20b3a',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  username: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
  },
  commentsBottom: {
    color: 'white',
    marginLeft: 8,
  },
  imageStyle: {
    height: 40,
    width: 40,
    borderColor: WHITE_COLOR,
    borderWidth: 1,
    borderRadius: 10,
  },
  innerViewStyle: {
    height: '100%',
    width: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexStyle1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 70,
    marginTop: 30,
  },
  endCallButtonStyle: {
    height: 55,
    width: 55,
    borderRadius: 100,
    backgroundColor: '#E81C43',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgViewStyleStyle: {
    height: 55,
    width: 55,
    borderRadius: 100,
    backgroundColor: '#E81C43',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VideoCallScreen;
