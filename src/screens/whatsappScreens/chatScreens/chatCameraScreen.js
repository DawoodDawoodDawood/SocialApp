import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {WHITE_COLOR} from '../../../themes/colors';

class ChatCameraScreen extends Component {
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
      flashLight: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  selectTime1() {
    this.setState({time1: true, time2: false});
  }

  selectTime2() {
    this.setState({time1: false, time2: true});
  }
  toggleFlashLight() {
    this.setState({flashLight: !this.state.flashLight});
  }

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
    // const {recording, processing} = this.state;

    // let button = (
    //   <TouchableOpacity onPress={this.startRecording.bind(this)}>
    //     <Image
    //       style={styles.capture}
    //       source={require('../../../Images/cameraStart.png')}
    //     />
    //   </TouchableOpacity>
    // );

    // if (recording) {
    //   button = (
    //     <TouchableOpacity
    //       onPress={this.stopRecording.bind(this)}
    //       style={styles.capture}>
    //       <Text style={{fontSize: 11, fontWeight: 'bold'}}>STOP </Text>
    //     </TouchableOpacity>
    //   );
    // }

    // if (processing) {
    //   button = (
    //     <View style={styles.capture}>
    //       <ActivityIndicator animating size={18} />
    //     </View>
    //   );
    // }
    return (
      <View style={styles.container}>
        {/* <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={
            'We need your permission to use your camera phone'
          }
        /> */}

        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
          }}
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            position: 'absolute',
            bottom: 15,
          }}>
          <View style={styles.flexStyle}>
            <TouchableOpacity onPress={() => this.toggleFlashLight()}>
              {this.state.flashLight ? (
                <Image
                  source={require('../../../Icons/flashOnIcon.png')}
                  style={{height: 30, width: 18}}
                />
              ) : (
                <Image
                  source={require('../../../Icons/flashOffIcon.png')}
                  style={{height: 30, width: 18}}
                />
              )}
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={{flex: 1}}>
            {button}
          </TouchableOpacity> */}

          <View style={styles.flexStyle}>
            <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style={{
                height: 80,
                width: 80,
                borderRadius: 100,
                backgroundColor: 'transparent',
                borderColor: WHITE_COLOR,
                borderWidth: 3,
              }}
            />
          </View>

          <View style={styles.flexStyle}>
            <TouchableOpacity>
              <Image
                source={require('../../../Icons/flipCameraIcon.png')}
                style={{height: 28, width: 28}}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View
          style={{
            height: 50,
            backgroundColor: 'black',
            flexDirection: 'row',
          }}></View> */}
      </View>
    );
  }
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
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
    height: 30,
    width: 20,
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
});

export default ChatCameraScreen;
