import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {WHITE_COLOR, TEXT_NOTE_COLOR} from '../../themes/colors';
import {SMALL} from '../../themes/fonts';
import Video from 'react-native-video';
class SoundScreenComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={{height: 15}} />
        <View
          style={[
            styles.mainViewStyle,
            {
              backgroundColor: this.props.backgroundColor
                ? this.props.backgroundColor
                : WHITE_COLOR,
            },
          ]}>
          <View style={[styles.flexStyle, {flex: 1.3}]}>
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

            <View style={styles.flexStyle}>
              <Image
                source={require('../../Icons/playFullicon.png')}
                style={{height: 21, width: 17}}
              />
            </View>
          </View>
          <View style={{width: 25}} />
          <View style={{flex: 3}}>
            <View style={styles.flexStyle2}>
              <Text style={styles.nameTextStyle}>Lottery</Text>

              <Text style={{color: TEXT_NOTE_COLOR}}>punk</Text>
            </View>

            <View style={[styles.flexStyle2, {justifyContent: 'flex-end'}]}>
              <Text style={{color: TEXT_NOTE_COLOR, fontSize: SMALL}}>
                00:15
              </Text>
            </View>
          </View>

          <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
            <TouchableOpacity>
              <Image
                source={require('../../Icons/savedIcon.png')}
                style={{height: 20, width: 16}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default SoundScreenComponent;

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 70,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    alignSelf: 'center',
  },
  nameTextStyle: {
    fontSize: 13,
    fontWeight: '700',
  },
  buttonStyle2: {
    height: 30,
    width: 80,
    borderRadius: 2,
    backgroundColor: '#FC3C6A',
    borderColor: '#FC3C6A',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  followButtonTextStyle: {
    fontSize: SMALL,
    fontWeight: '700',
    color: WHITE_COLOR,
  },
  flexStyle2: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
