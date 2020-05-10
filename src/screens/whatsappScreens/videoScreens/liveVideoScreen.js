import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  TextInput,
  StatusBar,
} from 'react-native';
import Video from 'react-native-video';
import {WHITE_COLOR, STATUS_BAR_COLOR} from '../../../themes/colors';
import {SMALL} from '../../../themes/fonts';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/AntDesign';
import Animated from 'react-native-reanimated';
const AnimatedIcon = Animatable.createAnimatableComponent(Icon);
const colors = {
  transparent: 'transparent',
  white: '#fff',
  heartColor: '#e92f3c',
  textPrimary: 'white',
  black: '#000',
};
const {height} = Dimensions.get('window');
class LiveVideoScreen extends Component {
  // state = {likeUnlike: false};
  // toggleHeart() {
  //   this.setState({likeUnlike: !this.state.likeUnlike});
  // }
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
    };

    this.lastPress = 0;
  }

  handleLargeAnimatedIconRef = ref => {
    this.largeAnimatedIcon = ref;
  };

  handleSmallAnimatedIconRef = ref => {
    this.smallAnimatedIcon = ref;
  };

  handleOnPressLike = () => {
    this.smallAnimatedIcon.bounceIn();
    this.setState(prevState => ({liked: !prevState.liked}));
  };

  render() {
    const {liked} = this.state;
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <Video
          source={{
            uri:
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
          }}
          style={styles.backgroundVideo}
          muted={false}
          repeat={true}
          resizeMode={'cover'}
          rate={1.0}
          ignoreSilentSwitch={'obey'}
        />
        <View style={styles.upperBarMainViewStyle}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.flexStyle}>
            <Image
              resizeMode="stretch"
              source={require('../../../Icons/arrowBackWhiteIcon.png')}
              style={{
                height: this.props.backArrowHeight
                  ? this.props.backArrowHeight
                  : 12,
                width: this.props.backArrowWidth
                  ? this.props.backArrowWidth
                  : 10,
              }}
            />
          </TouchableOpacity>
          <View style={{flex: 6, flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Image
                source={require('../../../Images/personImage.jpg')}
                style={{height: 35, width: 35, borderRadius: 100}}
              />
            </View>
            <View style={{flex: 4, justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold', color: WHITE_COLOR}}>
                Qasim
              </Text>
            </View>
          </View>
          <View style={{flex: 2.5, flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <TouchableOpacity style={styles.liveButtonViewStyle}>
                <Text style={styles.liveButtonTextStyle}>Live</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <View style={styles.eyeViewStyle}>
                <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
                  <Image
                    source={require('../../../Icons/eyeIcon.png')}
                    style={{height: 8, width: 12}}
                  />
                </View>
                <View style={styles.flexStyle}>
                  <Text style={{color: WHITE_COLOR, fontWeight: 'bold'}}>
                    1
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{justifyContent: 'flex-end', flex: 1}}>
          <View style={styles.lowerBarMainViewStyle}>
            <View
              style={{
                flex: 5,
                justifyContent: 'center',
              }}>
              <TextInput
                style={styles.textInputStyle}
                placeholder={'Comment'}
                placeholderTextColor={WHITE_COLOR}
              />
            </View>

            <View style={styles.flexStyle}>
              <Image
                source={require('../../../Icons/shareIcon.png')}
                style={{height: 30, width: 30}}
              />
            </View>
            <View style={styles.flexStyle}>
              {/* <TouchableOpacity onPress={() => this.toggleHeart()}>
                {this.state.likeUnlike ? (
                  <Image
                    source={require('../../../Icons/heartFilledIcon.png')}
                    style={{height: 25, width: 29}}
                  />
                ) : (
                  <Image
                    source={require('../../../Icons/heartIcon.png')}
                    style={{height: 25, width: 28}}
                  />
                )}
              </TouchableOpacity> */}
              <TouchableOpacity
                activeOpacity={1}
                onPress={this.handleOnPressLike}>
                <AnimatedIcon
                  ref={this.handleSmallAnimatedIconRef}
                  name={liked ? 'heart' : 'hearto'}
                  color={liked ? colors.heartColor : colors.textPrimary}
                  size={30}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default LiveVideoScreen;

const styles = StyleSheet.create({
  wrapperStyle: {flex: 1},
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: height,
  },
  upperBarMainViewStyle: {
    height: 60,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  liveButtonViewStyle: {
    height: 20,
    width: 40,
    borderRadius: 3,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  liveButtonTextStyle: {
    color: WHITE_COLOR,
    fontWeight: 'bold',
    fontSize: SMALL,
  },
  eyeViewStyle: {
    height: 20,
    width: 35,
    borderRadius: 3,
    backgroundColor: '#5A6775',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  lowerBarMainViewStyle: {
    height: 60,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  textInputStyle: {
    borderColor: WHITE_COLOR,
    borderWidth: 2,
    borderRadius: 20,
    height: 40,
    width: '90%',
    alignSelf: 'center',
    padding: 10,
  },
});
