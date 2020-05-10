import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video';
import {WHITE_COLOR} from '../../themes/colors';
import {SMALL, EXTRA_LARGE} from '../../themes/fonts';

const {width} = Dimensions.get('window') / 2;
class VideoComponent extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          height: this.props.videoHeight ? this.props.videoHeight : 190,
          width: this.props.videoWidth ? this.props.videoWidth : '99%',
        }}>
        <Video
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          style={styles.backgroundVideo}
          muted={true}
          repeat={true}
          resizeMode={'cover'}
          rate={1.0}
          ignoreSilentSwitch={'obey'}
        />
        {this.props.showDraftVideo ? (
          <View style={[styles.flexStyle, {alignItems: 'center', flex: 1.2}]}>
            <Text
              style={{
                color: WHITE_COLOR,
                fontWeight: 'bold',
                fontSize: EXTRA_LARGE,
              }}>
              Draft
            </Text>
          </View>
        ) : (
          false
        )}

        {this.props.hideVideoLikes ? (
          false
        ) : (
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View style={styles.upperBarMainViewStyle}>
              <View style={{flex: 2, flexDirection: 'row'}}>
                <View style={styles.flexStyle}>
                  <Image
                    source={require('../../Icons/playIcon.png')}
                    style={styles.playIconStyle}
                  />
                </View>
                <View style={[styles.flexStyle, {flex: 1.6}]}>
                  <Text style={styles.likesTextStyle}>5</Text>
                </View>
              </View>
              <View style={{flex: 1}} />
            </View>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

export default VideoComponent;

const styles = StyleSheet.create({
  wrapperStyle: {},
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: '100%',
    width: '99%',
    justifyContent: 'center',
  },

  flexStyle: {flex: 1, justifyContent: 'flex-end', alignItems: 'flex-start'},
  viewStyle: {
    height: '100%',
    width: 30,
    borderRadius: 20,
    backgroundColor: WHITE_COLOR,
    marginRight: 10,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexStyle2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIconStyle: {
    height: 15,
    width: 12,
    marginLeft: 15,
    marginBottom: 10,
  },
  likesTextStyle: {
    color: WHITE_COLOR,
    fontSize: SMALL,
    paddingBottom: 9,
  },
  upperBarMainViewStyle: {height: 60, flexDirection: 'row'},
});
