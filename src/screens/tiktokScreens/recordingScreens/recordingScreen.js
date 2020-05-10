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
import {SMALL, EXTRA_SMALL} from '../../../themes/fonts';
import {WHITE_COLOR} from '../../../themes/colors';

class RecordingScreen extends Component {
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
          <View style={{left: 15, top: 40}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                resizeMode={'stretch'}
                style={{width: 16, height: 16}}
                source={require('../../../Icons/cameraCancleIcon.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{left: 134, top: 40}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SoundMainScreen')}>
              {this.state.recording ? (
                <Image
                  resizeMode={'stretch'}
                  style={{width: 60, height: 16}}
                  source={require('../../../Icons/audioIcon3.png')}
                />
              ) : (
                <Image
                  resizeMode={'stretch'}
                  style={{width: 75, height: 20}}
                  source={require('../../../Icons/audioIcon3.png')}
                />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <View style={{height: 40}} />

            <View style={{right: 5}}>
              <TouchableOpacity style={styles.touchableStyle}>
                <Image
                  resizeMode={'stretch'}
                  style={{width: 22, height: 20}}
                  source={require('../../../Icons/flipCamera-oIcon.png')}
                />
                <View style={{height: 2}} />
                <Text style={styles.textStyle1}>Flip</Text>
              </TouchableOpacity>
              <View style={{height: 20}} />
              <TouchableOpacity style={styles.touchableStyle}>
                <Image
                  resizeMode={'stretch'}
                  style={{width: 22, height: 19}}
                  source={require('../../../Icons/speedIcon.png')}
                />
                <View style={{height: 2}} />
                <Text style={styles.textStyle1}>Speed</Text>
              </TouchableOpacity>
              <View style={{height: 20}} />
              <TouchableOpacity style={styles.touchableStyle}>
                <Image
                  resizeMode={'stretch'}
                  style={{width: 20, height: 20}}
                  source={require('../../../Icons/effectIcon.png')}
                />
                <View style={{height: 2}} />
                <Text style={styles.textStyle1}>Effect</Text>
              </TouchableOpacity>
              <View style={{height: 20}} />
              <TouchableOpacity
                style={styles.touchableStyle}
                onPress={this.handleClick}>
                <Image
                  resizeMode={'stretch'}
                  style={{width: 30, height: 35}}
                  source={require('../../../Icons/filter.png')}
                />
              </TouchableOpacity>
              <View style={{height: 20}} />
              <TouchableOpacity style={styles.touchableStyle}>
                <Image
                  resizeMode={'stretch'}
                  style={{width: 20, height: 20}}
                  source={require('../../../Icons/TimerIcon.png')}
                />
                <View style={{height: 2}} />
                <Text style={styles.textStyle1}>Timer</Text>
              </TouchableOpacity>
              <View style={{height: 20}} />
              <TouchableOpacity style={styles.touchableStyle}>
                <Image
                  resizeMode={'stretch'}
                  style={{width: 20, height: 20}}
                  source={require('../../../Icons/flashOffIcon.png')}
                />
                <View style={{height: 2}} />
                <Text style={styles.textStyle1}>Flash</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            position: 'absolute',
            bottom: 45,
          }}>
          <View style={styles.flexStyle}>
            <TouchableOpacity style={styles.innerViewStyle}>
              <Image
                source={require('../../../Images/affectImage.jpg')}
                style={styles.imageStyle}
              />
              <View style={{height: 5}} />
              <Text style={{color: WHITE_COLOR, fontSize: EXTRA_SMALL}}>
                Effects
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={{flex: 1}}>
            {button}
          </TouchableOpacity>

          {this.state.recording ? (
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 0.5}} />
              <View style={styles.flexStyle}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}>
                  <Image
                    source={require('../../../Icons/tiktokCancelicon.png')}
                    style={{height: 18, width: 25}}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.flexStyle}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('CreateAffectScreen')
                  }
                  style={styles.tickButtonStyle}>
                  <Image
                    source={require('../../../Icons/tickIcon.png')}
                    style={{height: 12, width: 15, marginRight: 3}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.flexStyle}>
              <TouchableOpacity style={styles.innerViewStyle}>
                <Image
                  source={require('../../../Images/colorImage.jpeg')}
                  style={styles.imageStyle}
                />
                <View style={{height: 5}} />
                <Text style={{color: WHITE_COLOR, fontSize: EXTRA_SMALL}}>
                  Upload
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View
          style={{
            height: 50,
            backgroundColor: 'black',
            flexDirection: 'row',
          }}>
          <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
            <TouchableOpacity onPress={() => this.selectTime1()}>
              {this.state.time1 ? (
                <Text style={{color: WHITE_COLOR, fontSize: SMALL}}>60s</Text>
              ) : (
                <Text style={{color: '#A4A4A4', fontSize: SMALL}}>60s</Text>
              )}
            </TouchableOpacity>
            <View style={{height: 8}} />
            {this.state.time1 ? (
              <View
                style={{
                  height: 5,
                  width: 5,
                  borderRadius: 20,
                  backgroundColor: WHITE_COLOR,
                  marginRight: 7,
                }}
              />
            ) : (
              <View
                style={{
                  height: 5,
                  width: 5,
                  borderRadius: 20,
                  backgroundColor: 'black',
                  marginRight: 7,
                }}
              />
            )}
          </View>
          <View style={{width: 30}} />
          <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
            <TouchableOpacity onPress={() => this.selectTime2()}>
              {this.state.time2 ? (
                <Text style={{color: WHITE_COLOR, fontSize: SMALL}}>15s</Text>
              ) : (
                <Text style={{color: '#A4A4A4', fontSize: SMALL}}>15s</Text>
              )}
            </TouchableOpacity>
            <View style={{height: 8}} />
            {this.state.time2 ? (
              <View
                style={{
                  height: 5,
                  width: 5,
                  borderRadius: 20,
                  backgroundColor: WHITE_COLOR,
                  marginLeft: 10,
                }}
              />
            ) : (
              <View
                style={{
                  height: 5,
                  width: 5,
                  borderRadius: 20,
                  backgroundColor: 'black',
                  marginRight: 7,
                }}
              />
            )}
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
  textStyle1: {
    color: WHITE_COLOR,
    fontSize: EXTRA_SMALL,
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
  touchableStyle: {
    justifyContent: 'center',
    alignItems: 'center',
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
  tickButtonStyle: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: '#FD2B54',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecordingScreen;
