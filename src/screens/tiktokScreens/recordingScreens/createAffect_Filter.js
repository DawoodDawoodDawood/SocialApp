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
import {SMALL, EXTRA_SMALL, MEDIUM} from '../../../themes/fonts';
import {WHITE_COLOR} from '../../../themes/colors';

class CreateAffectAndFilterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likecount: 200,
      commentcount: 9,
      recording: false,
      processing: false,
      arrowUp: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  toggleArrow() {
    this.setState({arrowUp: !this.state.arrowUp});
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
          <View style={{left: 15, top: 43}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                resizeMode={'stretch'}
                style={{width: 20, height: 20}}
                source={require('../../../Icons/leftArrowIcon.png')}
              />
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

            <View style={{right: 15}}>
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
              <TouchableOpacity
                style={styles.touchableStyle}
                onPress={this.handleClick}>
                <Image
                  resizeMode={'stretch'}
                  style={{width: 20, height: 20}}
                  source={require('../../../Icons/adjustmentIcon.png')}
                />
                <View style={{height: 2}} />
                <Text style={styles.textStyle1}>Adjust</Text>
                <Text style={styles.textStyle1}>Clip</Text>
              </TouchableOpacity>
              <View style={{height: 20}} />
              <TouchableOpacity style={styles.touchableStyle}>
                <Image
                  resizeMode={'stretch'}
                  style={{width: 20, height: 20}}
                  source={require('../../../Icons/voiceAffectIcon.png')}
                />
                <View style={{height: 2}} />
                <Text style={styles.textStyle1}>Voice</Text>
                <Text style={styles.textStyle1}>Affects</Text>
              </TouchableOpacity>

              {this.state.arrowUp ? (
                <React.Fragment>
                  <View style={{height: 20}} />
                  <TouchableOpacity style={styles.touchableStyle}>
                    <Image
                      resizeMode={'stretch'}
                      style={{width: 15, height: 20}}
                      source={require('../../../Icons/microphoneIcon.png')}
                    />
                    <View style={{height: 2}} />
                    <Text style={styles.textStyle1}>Voiceover</Text>
                  </TouchableOpacity>
                  <View style={{height: 20}} />
                  <TouchableOpacity style={styles.touchableStyle}>
                    <Image
                      resizeMode={'stretch'}
                      style={{width: 20, height: 20}}
                      source={require('../../../Icons/cropIcon.png')}
                    />
                    <View style={{height: 2}} />
                    <Text style={styles.textStyle1}>Trim</Text>
                  </TouchableOpacity>
                  <View style={{height: 20}} />
                  <TouchableOpacity
                    style={styles.touchableStyle}
                    onPress={this.handleClick}>
                    <Image
                      resizeMode={'stretch'}
                      style={{width: 20, height: 20}}
                      source={require('../../../Icons/volumeIcon.png')}
                    />
                    <View style={{height: 2}} />
                    <Text style={styles.textStyle1}>Volume</Text>
                  </TouchableOpacity>
                </React.Fragment>
              ) : (
                false
              )}

              <View style={{height: 30}} />
              <TouchableOpacity
                onPress={() => this.toggleArrow()}
                style={styles.arrowButtonStyle}>
                {this.state.arrowUp ? (
                  <Image
                    style={{width: 12, height: 12}}
                    source={require('../../../Icons/arrowUpIcon.png')}
                  />
                ) : (
                  <Image
                    style={{width: 12, height: 12}}
                    source={require('../../../Icons/arrowDownIcon2.png')}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 60,
            backgroundColor: 'black',
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={styles.flexStyle}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../../Icons/musicNoteIcon.png')}
            />
            <View style={{height: 5}} />
            <Text style={styles.textStyle1}>Sounds</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ApplyAffectScreen')}
            style={styles.flexStyle}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../../Icons/effectIcon2.png')}
            />
            <View style={{height: 5}} />
            <Text style={styles.textStyle1}>Effects</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexStyle}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../../Icons/textEditorIcon.png')}
            />
            <View style={{height: 5}} />
            <Text style={styles.textStyle1}>Text</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.flexStyle}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../../Icons/happy.png')}
            />
            <View style={{height: 5}} />
            <Text style={styles.textStyle1}>Stickers</Text>
          </TouchableOpacity>
          <View style={[styles.flexStyle, {flex: 2}]}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('FinalPostPageScreen')
              }
              style={{
                height: 45,
                width: 80,
                backgroundColor: '#FE2B54',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{color: WHITE_COLOR, fontSize: MEDIUM, borderRadius: 5}}>
                Next
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
  tickButtonStyle: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: '#FD2B54',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle1: {
    color: WHITE_COLOR,
    fontSize: EXTRA_SMALL,
  },
  touchableStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowButtonStyle: {
    height: 25,
    width: 25,
    borderRadius: 50,
    backgroundColor: '#202840',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default CreateAffectAndFilterScreen;
