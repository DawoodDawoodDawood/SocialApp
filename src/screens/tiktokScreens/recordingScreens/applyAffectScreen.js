import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {WHITE_COLOR, BLACK_COLOR} from '../../../themes/colors';

import Video from 'react-native-video';
import {MEDIUM, LARGE} from '../../../themes/fonts';
import EffectComponent from '../../../components/tiktokComponents/effectComponent';
class ApplyAffectScreen extends Component {
  state = {
    visual: true,
    sticker: false,
    transition: false,
    split: false,
    time: false,
  };
  showVisual() {
    this.setState({
      visual: true,
      sticker: false,
      transition: false,
      split: false,
      time: false,
    });
  }
  showStickers() {
    this.setState({
      visual: false,
      sticker: true,
      transition: false,
      split: false,
      time: false,
    });
  }

  showTransition() {
    this.setState({
      visual: false,
      sticker: false,
      transition: true,
      split: false,
      time: false,
    });
  }

  showSplit() {
    this.setState({
      visual: false,
      sticker: false,
      transition: false,
      split: true,
      time: false,
    });
  }

  showTime() {
    this.setState({
      visual: false,
      sticker: false,
      transition: false,
      split: false,
      time: true,
    });
  }

  render() {
    return (
      <View style={styles.wrapperStyle}>
        <View style={styles.headerMainViewStyle}>
          <View
            style={[styles.flexStyle, {alignItems: 'flex-start', flex: 1.1}]}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text style={{color: WHITE_COLOR, paddingLeft: 15}}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 4.5}} />
          <View style={[styles.flexStyle, {alignItems: 'flex-end', flex: 1.1}]}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('CreateAffectScreen')
              }>
              <Text
                style={{
                  color: WHITE_COLOR,
                  paddingRight: 15,
                }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            width: '85%',
            alignSelf: 'center',
          }}>
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

          <View style={[styles.flexStyle, {alignItems: 'center'}]}>
            <TouchableOpacity>
              <Image
                source={require('../../../Icons/playIcon.png')}
                style={styles.playIconStyle}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            height: 100,
            backgroundColor: '#161824',
          }}>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <EffectComponent
                source={require('../../../Images/e1.jpg')}
                text={'Halo'}
              />

              <EffectComponent
                source={require('../../../Images/e2.jpg')}
                text={'Stars'}
              />

              <EffectComponent
                source={require('../../../Images/e3.jpg')}
                text={'Rain'}
              />

              <EffectComponent
                source={require('../../../Images/e4.jpg')}
                text={'Gitch'}
              />
              <EffectComponent
                source={require('../../../Images/e1.jpg')}
                text={'Halo'}
              />

              <EffectComponent
                source={require('../../../Images/e2.jpg')}
                text={'Stars'}
              />

              <EffectComponent
                source={require('../../../Images/e3.jpg')}
                text={'Rain'}
              />

              <EffectComponent
                source={require('../../../Images/e4.jpg')}
                text={'Gitch'}
              />
            </ScrollView>
          </View>
        </View>
        <View style={{height: 1, backgroundColor: '#8B8C91'}} />
        <View
          style={{
            height: 60,
            backgroundColor: '#161824',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => this.showVisual()}
            style={styles.flexStyle}>
            {this.state.visual ? (
              <Text style={styles.textStyle1}>Visual</Text>
            ) : (
              <Text style={[styles.textStyle1, {color: '#8B8C91'}]}>
                Visual
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.showStickers()}
            style={styles.flexStyle}>
            {this.state.sticker ? (
              <Text style={styles.textStyle1}>Sticker</Text>
            ) : (
              <Text style={[styles.textStyle1, {color: '#8B8C91'}]}>
                Sticker
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.showTransition()}
            style={[styles.flexStyle, {flex: 1.4}]}>
            {this.state.transition ? (
              <Text style={styles.textStyle1}>Transition</Text>
            ) : (
              <Text style={[styles.textStyle1, {color: '#8B8C91'}]}>
                Transition
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.showSplit()}
            style={styles.flexStyle}>
            {this.state.split ? (
              <Text style={styles.textStyle1}>Split</Text>
            ) : (
              <Text style={[styles.textStyle1, {color: '#8B8C91'}]}>Split</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.showTime()}
            style={styles.flexStyle}>
            {this.state.time ? (
              <Text style={styles.textStyle1}>Time</Text>
            ) : (
              <Text style={[styles.textStyle1, {color: '#8B8C91'}]}>Time</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ApplyAffectScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  headerMainViewStyle: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#0F0F1B',
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
  },
  playIconStyle: {
    height: 22,
    width: 17,
  },
  textStyle1: {
    color: WHITE_COLOR,
    fontSize: MEDIUM,
    fontWeight: '700',
  },
});
