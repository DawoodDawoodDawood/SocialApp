import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StatusBar,
} from 'react-native';
import {
  WHITE_COLOR,
  BLACK_COLOR,
  TEXT_NOTE_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import ProfileHeaderComponent from '../../../components/tiktokComponents/profileHeaderComponent';
import {SMALL} from '../../../themes/fonts';
import VideoComponent from '../../../components/tiktokComponents/videoComponent';
class ProfileScreen extends Component {
  // state = {
  //   array: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}],
  // };
  state = {profileVideos: true, likedVideos: false, privateVideos: false};
  showProfileVideos() {
    this.setState({
      profileVideos: true,
      likedVideos: false,
      privateVideos: false,
    });
  }
  showLikedVideos() {
    this.setState({
      profileVideos: false,
      likedVideos: true,
      privateVideos: false,
    });
  }

  showPrivateVideos() {
    this.setState({
      profileVideos: false,
      likedVideos: false,
      privateVideos: true,
    });
  }
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <ScrollView>
          <ProfileHeaderComponent headerTitle={'Qasim'} />
          <View style={{height: 300}}>
            <View style={{height: 10}} />
            <View style={[styles.flexStyle, {flex: 2}]}>
              <Image
                source={require('../../../Images/person.png')}
                style={{height: 100, width: 100, borderRadius: 100}}
              />
              <View style={{height: 5}} />
              <Text style={{fontWeight: '700'}}>@qasim_official</Text>
            </View>
            <View style={styles.viewStyle}>
              <TouchableOpacity
                style={styles.flexStyle}
                onPress={() =>
                  this.props.navigation.navigate('FollowingFollowerScreen')
                }>
                <Text style={{fontWeight: '700', color: BLACK_COLOR}}>130</Text>
                <Text style={{fontSize: SMALL, color: TEXT_NOTE_COLOR}}>
                  Following
                </Text>
              </TouchableOpacity>
              <View style={styles.lineStyle} />
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('FollowingFollowerScreen')
                }
                style={styles.flexStyle}>
                <Text style={{fontWeight: '700', color: BLACK_COLOR}}>8</Text>
                <Text style={{fontSize: SMALL, color: TEXT_NOTE_COLOR}}>
                  Followers
                </Text>
              </TouchableOpacity>
              <View style={styles.lineStyle} />
              <TouchableOpacity style={styles.flexStyle}>
                <Text style={{fontWeight: '700', color: BLACK_COLOR}}>2</Text>
                <Text style={{fontSize: SMALL, color: TEXT_NOTE_COLOR}}>
                  Likes
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.viewStyle, {width: '55%'}]}>
              <View style={[styles.flexStyle, {flex: 4}]}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('TiktokEditProfileScreen')
                  }
                  style={styles.editProfileButtonStyle}>
                  <Text style={{fontWeight: '500'}}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('SaveVideoSoundScreen')
                  }
                  style={[styles.editProfileButtonStyle, {width: '90%'}]}>
                  <Image
                    source={require('../../../Icons/savedIcon.png')}
                    style={{height: 20, width: 16}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{height: 20}} />
          </View>

          <View style={styles.borderStyle} />
          <View style={styles.tabsViewStyle}>
            <View style={{flex: 1}}>
              <View style={styles.flexStyle}>
                <TouchableOpacity onPress={() => this.showProfileVideos()}>
                  <Image
                    source={
                      this.state.profileVideos
                        ? require('../../../Icons/verticalListIcon.png')
                        : require('../../../Icons/listVerticalIconGray.png')
                    }
                    style={{height: 26, width: 18}}
                  />
                </TouchableOpacity>
              </View>
              {this.state.profileVideos ? (
                <View style={styles.iconsUnderLineStyle} />
              ) : (
                <View
                  style={[
                    styles.iconsUnderLineStyle,
                    {backgroundColor: WHITE_COLOR},
                  ]}
                />
              )}
            </View>
            <View style={{flex: 1}}>
              <View style={styles.flexStyle}>
                <TouchableOpacity onPress={() => this.showLikedVideos()}>
                  <Image
                    resizeMode={'stretch'}
                    source={
                      this.state.likedVideos
                        ? require('../../../Icons/heartEyeIcon.png')
                        : require('../../../Icons/heartEyeIconGray.png')
                    }
                    style={{height: 22, width: 25}}
                  />
                </TouchableOpacity>
              </View>
              {this.state.likedVideos ? (
                <View style={styles.iconsUnderLineStyle} />
              ) : (
                <View
                  style={[
                    styles.iconsUnderLineStyle,
                    {backgroundColor: WHITE_COLOR},
                  ]}
                />
              )}
            </View>
            <View style={{flex: 1}}>
              <View style={styles.flexStyle}>
                <TouchableOpacity onPress={() => this.showPrivateVideos()}>
                  <Image
                    source={
                      this.state.privateVideos
                        ? require('../../../Icons/blackLockIcon.png')
                        : require('../../../Icons/greyLockIcon.png')
                    }
                    style={{height: 20, width: 18}}
                  />
                </TouchableOpacity>
              </View>
              {this.state.privateVideos ? (
                <View style={styles.iconsUnderLineStyle} />
              ) : (
                <View
                  style={[
                    styles.iconsUnderLineStyle,
                    {backgroundColor: WHITE_COLOR},
                  ]}
                />
              )}
            </View>
          </View>
          <View style={styles.borderStyle} />

          {/* profileVideos */}
          {this.state.profileVideos ? (
            <View style={{height: 200, flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <VideoComponent
                  showDraftVideo
                  onPress={() => this.props.navigation.navigate('VideoScreen')}
                />
              </View>
              <View style={{flex: 1}}>
                <VideoComponent
                  onPress={() => this.props.navigation.navigate('VideoScreen')}
                />
              </View>
              <View style={{flex: 1}}>
                <VideoComponent
                  onPress={() => this.props.navigation.navigate('VideoScreen')}
                />
              </View>
            </View>
          ) : (
            false
          )}

          {/* likedVideos */}
          {this.state.likedVideos ? (
            <View style={{height: 200, flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <VideoComponent
                  onPress={() => this.props.navigation.navigate('VideoScreen')}
                />
              </View>
              <View style={{flex: 1}}>
                <VideoComponent
                  onPress={() => this.props.navigation.navigate('VideoScreen')}
                />
              </View>
              <View style={{flex: 1}}>
                <VideoComponent
                  onPress={() => this.props.navigation.navigate('VideoScreen')}
                />
              </View>
            </View>
          ) : (
            false
          )}

          {/* privateVideos */}
          {this.state.privateVideos ? (
            <View style={styles.privateTextViewStyle}>
              <Text style={{fontWeight: '700', fontSize: 14}}>
                Your Private Videos
              </Text>
              <View style={{height: 7}} />
              <Text
                style={{
                  fontSize: SMALL,
                  color: TEXT_NOTE_COLOR,
                  textAlign: 'center',
                }}>
                To make your videos visible only to yourself, set
              </Text>
              <View style={{height: 5}} />
              <Text style={{fontSize: SMALL, color: TEXT_NOTE_COLOR}}>
                it to "Private" in the video privacy settings.
              </Text>
            </View>
          ) : (
            false
          )}
        </ScrollView>
      </View>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  dateViewStyle: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  msgViewStyle: {
    height: 40,
    backgroundColor: WHITE_COLOR,
    borderRadius: 5,
    borderColor: '#F7F7F7',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 18,
  },
  bottomMainViewStyle: {
    height: 60,
    elevation: 5,
    flexDirection: 'row',
  },
  lineStyle: {
    width: 1,
    height: 17,
    backgroundColor: '#F0F0F0',
    alignSelf: 'center',
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    width: '65%',
    alignSelf: 'center',
  },
  editProfileButtonStyle: {
    height: '65%',
    width: '90%',
    borderColor: '#F6F6F6',
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabsViewStyle: {
    height: 45,
    flexDirection: 'row',
  },
  borderStyle: {height: 1, backgroundColor: '#F8F8F8'},
  iconsUnderLineStyle: {
    height: 2,
    width: 40,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  privateTextViewStyle: {
    height: 170,
    width: '75%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
