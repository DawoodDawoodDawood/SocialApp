import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import {
  WHITE_COLOR,
  BLACK_COLOR,
  TEXT_NOTE_COLOR,
  STATUS_BAR_COLOR,
} from '../../themes/colors';
import {MEDIUM, SMALL} from '../../themes/fonts';
import Video from 'react-native-video';
import ClickableComponent3 from '../../components/tiktokComponents/clickableComponent3';
import ToggleBarComponent2 from '../../components/tiktokComponents/toggleBarComponent2';
class FinalPostPage extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <View style={styles.headerMainViewStyle}>
          <View
            style={[styles.flexStyle, {alignItems: 'flex-start', flex: 1.1}]}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../../Icons/arrowBackBlackIcon.png')}
                style={{height: 15, width: 10, marginLeft: 18}}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.flexStyle, {flex: 4.5}]}>
            <Text style={styles.titleTextStyle}>Post</Text>
          </View>
          <View style={[styles.flexStyle, {alignItems: 'flex-end', flex: 1.1}]}>
            <View style={{flex: 1}} />
          </View>
        </View>

        <View style={{height: 1, backgroundColor: '#EBEBEB'}} />
        <View style={{height: 15}} />

        <View style={styles.viewStyle}>
          <View style={{flex: 2.5}}>
            <View style={{flex: 2}}>
              <TextInput
                placeholder={'Describe your video'}
                placeholderTextColor={TEXT_NOTE_COLOR}
                multiline={true}
                numberOfLines={4}
                textAlignVertical={'top'}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
                <TouchableOpacity style={styles.buttonStyle}>
                  <Text style={{padding: 5}}>#Hashtags</Text>
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.flexStyle,
                  {alignItems: 'flex-start', flex: 1.5},
                ]}>
                <TouchableOpacity style={styles.buttonStyle}>
                  <Text style={{padding: 5}}>@Friends</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{flex: 1}}>
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

            <View style={[styles.flexStyle, {justifyContent: 'flex-end'}]}>
              <Text style={{color: WHITE_COLOR, paddingBottom: 5}}>
                Select Cover
              </Text>
            </View>
          </View>
        </View>

        <View style={{height: 15}} />
        <View style={styles.lineStyle} />
        <View style={{height: 10}} />

        <ClickableComponent3
          imageSource={require('../../Icons/unlock.png')}
          iconHeight={20}
          iconWidth={20}
          text={'Who can view this video'}
        />

        <ToggleBarComponent2
          toggleText={'Allow comments'}
          source={require('../../Icons/comment.png')}
          height={18}
          width={18}
        />
        <ToggleBarComponent2
          toggleText={'Allow Duet and React'}
          source={require('../../Icons/camera.png')}
          height={21}
          width={21}
        />
        <ToggleBarComponent2
          toggleText={'Save to device'}
          source={require('../../Icons/save-file.png')}
          height={20}
          width={20}
        />

        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={styles.textViewStyle}>
            <Text style={{color: TEXT_NOTE_COLOR, fontSize: 13}}>
              Share Posted video to:
            </Text>
          </View>
          <View style={[styles.bottomButtonsViewStyle, {height: 80}]}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
                <TouchableOpacity style={styles.socialMediaIconViewStyle}>
                  <Image
                    source={require('../../Icons/whatsapp.png')}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
              </View>
              <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
                <TouchableOpacity style={styles.socialMediaIconViewStyle}>
                  <Image
                    source={require('../../Icons/instagram.png')}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
              </View>
              <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
                <TouchableOpacity style={styles.socialMediaIconViewStyle}>
                  <Image
                    source={require('../../Icons/facebook.png')}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 1}} />
          </View>

          <View style={styles.bottomButtonsViewStyle}>
            <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('TiktokFooterTabScreen')
                }
                style={styles.buttonStyle1}>
                <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
                  <Image
                    source={require('../../Icons/laundry.png')}
                    style={{height: 17, width: 17}}
                  />
                </View>
                <View style={{width: 20}} />
                <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
                  <Text>Drafts</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('TiktokFooterTabScreen')
                }
                style={styles.buttonStyle2}>
                <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
                  <Image
                    source={require('../../Icons/up-arrow.png')}
                    style={{height: 18, width: 18}}
                  />
                </View>
                <View style={{width: 20}} />
                <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
                  <Text style={{color: WHITE_COLOR}}>Post</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: 10}} />
        </View>
      </View>
    );
  }
}

export default FinalPostPage;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  headerMainViewStyle: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#FCFCFC',
  },

  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTextStyle: {
    color: BLACK_COLOR,
    fontWeight: 'bold',
    fontSize: MEDIUM,
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
  viewStyle: {
    height: 130,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  buttonStyle: {
    height: 30,
    borderColor: '#EAEAEA',
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineStyle: {
    height: 1,
    backgroundColor: '#EBEBEB',
    width: '90%',
    alignSelf: 'center',
  },
  buttonStyle1: {
    height: 45,
    width: '95%',
    borderColor: '#E9E9E9',
    borderWidth: 1,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomButtonsViewStyle: {
    height: 60,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  buttonStyle2: {
    height: 45,
    width: '95%',
    backgroundColor: '#FE2B54',
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textViewStyle: {
    height: 20,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  socialMediaIconViewStyle: {
    height: 45,
    width: 45,
    borderRadius: 100,
    borderColor: '#EBEBEB',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
