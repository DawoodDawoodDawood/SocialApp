'use strict';
import React, {PureComponent} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {SMALL} from '../../../themes/fonts';
import {WHITE_COLOR} from '../../../themes/colors';

export default class CameraScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likecount: 200,
      commentcount: 9,
      recording: false,
      processing: false,
    };
    this.handleClick = this.handleClick.bind(this);
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
    this.camera.stopRecording();
  }
  render() {
    const {recording, processing} = this.state;

    let button = (
      <TouchableOpacity
        onPress={this.startRecording.bind(this)}
        style={styles.capture}>
        <Text style={{fontSize: 11, fontWeight: 'bold'}}>RECORD</Text>
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
        <StatusBar backgroundColor={'black'} barStyle="dark-content" />
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={
            'We need your permission to use your camera phone'
          }
        />
        <View
          style={{
            flex: 0,
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            position: 'absolute',
            top: '80%',
          }}>
          <View style={{flex: 1}} />
          <View style={[styles.flexStyle, {flex: 3}]}>
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={this.takePicture.bind(this)}>
              {button}
            </TouchableOpacity>
          </View>
          <View style={styles.flexStyle}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('LiveVideoScreen')}
              style={styles.capture1}>
              <Text
                style={{
                  fontSize: SMALL,
                  color: WHITE_COLOR,
                  fontWeight: 'bold',
                }}>
                Go Live
              </Text>
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
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignSelf: 'center',
    margin: 20,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  capture1: {
    flex: 0,
    backgroundColor: '#D60000',
    borderRadius: 50,
    alignSelf: 'center',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexStyle: {justifyContent: 'center', alignItems: 'center', flex: 1},
});

AppRegistry.registerComponent('CameraScreen', () => CameraScreen);
