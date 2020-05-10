import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video';
import {WHITE_COLOR, TEXT_NOTE_COLOR} from '../../themes/colors';
import {SMALL, EXTRA_SMALL, LARGE, MEDIUM} from '../../themes/fonts';
const {width} = Dimensions.get('window') / 2;
class LiveStreamingComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.wrapperStyle}>
          <TouchableOpacity onPress={this.props.onPress} style={{flex: 2}}>
            <Video
              source={{
                uri:
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
              }}
              style={styles.backgroundVideo}
              muted={true}
              repeat={true}
              resizeMode={'cover'}
              rate={1.0}
              ignoreSilentSwitch={'obey'}
            />
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <View style={styles.upperBarMainViewStyle}>
                <View style={styles.flexStyle}>
                  <View style={styles.liveButtonViewStyle}>
                    <Text style={styles.liveButtonTextStyle}>Live</Text>
                  </View>
                </View>
                <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
                  <View style={styles.viewStyle}>
                    <View style={{height: 2}} />
                    <Image
                      style={{height: 11, width: 13}}
                      source={require('../../Icons/heartFilledIcon.png')}
                    />
                    <View style={{height: 2}} />
                    <Text
                      style={{fontSize: EXTRA_SMALL, color: TEXT_NOTE_COLOR}}>
                      130
                    </Text>

                    <View style={{height: 2}} />
                    <Image
                      style={{height: 12, width: 15}}
                      source={require('../../Icons/commentIcon.png')}
                    />
                    <View style={{height: 2}} />
                    <Text
                      style={{fontSize: EXTRA_SMALL, color: TEXT_NOTE_COLOR}}>
                      130
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={[styles.flexStyle2, {alignItems: 'flex-start'}]}>
              <Image
                source={require('../../Images/personImage.jpg')}
                style={{height: 40, width: 40, borderRadius: 50}}
              />
            </View>
            <View
              style={[
                styles.flexStyle2,
                {flex: 2.5, alignItems: 'flex-start'},
              ]}>
              <Text style={{fontSize: LARGE, fontWeight: '700'}}>Qasim</Text>

              <Text style={{fontSize: SMALL, color: TEXT_NOTE_COLOR}}>
                Live from 12:00 PM
              </Text>
            </View>
          </View>
        </View>
        <View style={{height: 10}} />
      </React.Fragment>
    );
  }
}

export default LiveStreamingComponent;

const styles = StyleSheet.create({
  wrapperStyle: {
    height: 200,
    width: 178,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
  },
  upperBarMainViewStyle: {
    height: 60,
    flexDirection: 'row',
  },
  liveButtonViewStyle: {
    height: 25,
    width: 40,
    borderRadius: 5,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 5,
  },
  liveButtonTextStyle: {
    color: WHITE_COLOR,
    fontWeight: 'bold',
    fontSize: 14,
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
});
