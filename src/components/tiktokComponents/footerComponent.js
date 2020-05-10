import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {WHITE_COLOR, BLACK_COLOR} from '../../themes/colors';
import {SMALL, EXTRA_SMALL} from '../../themes/fonts';
import message from '../titokVedioViewComponent/assets/windowscomments-grey.png';
import userProfile from '../titokVedioViewComponent/assets/userProfile.png';
import search from '../titokVedioViewComponent/assets/search-grey.png';
import plusTikTokWhite from '../titokVedioViewComponent/assets/plusTikTok-white.png';
import plusTikTok from '../titokVedioViewComponent/assets/plusTikTok.png';
import home from '../titokVedioViewComponent/assets/home.png';

class FooterComponent extends Component {
  render() {
    return (
      <View
        style={{
          height: 70,
          width: '100%',
          bottom: 0,
          position: 'absolute',
          backgroundColor: this.props.footerBgColor
            ? this.props.footerBgColor
            : 'yellow',
        }}>
        <View
          style={{
            height: 70,
            backgroundColor: this.props.home ? 'black' : 'white',
            flexDirection: 'row',
            width: '100%',
            alignSelf: 'center',
            elevation: 10,
          }}>
          <TouchableOpacity
            onPress={() => this.props.onHomePress(true)}
            style={{
              flex: 1,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {this.props.home ? (
              <Image
                resizeMode="stretch"
                source={home}
                style={{
                  width: 23,
                  height: 23,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
              />
            ) : (
              <Image
                resizeMode="stretch"
                source={require('../../Icons/home2.png')}
                style={{
                  width: 23,
                  height: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
              />
            )}
            <View style={{height: 5}} />
            {this.props.home ? (
              <Text style={{color: WHITE_COLOR, fontSize: 10}}>Home</Text>
            ) : (
              <Text style={{color: '#B3B3B3', fontSize: 10, fontWeight: '700'}}>
                Home
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.onSearchPress(true)}
            style={{
              flex: 1,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="stretch"
              source={
                this.props.search
                  ? require('../../Icons/search1.png')
                  : this.props.home
                  ? require('../../Icons/search2.png')
                  : require('../../Icons/search2.png')
              }
              style={{
                width: 20,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}
            />
            <View style={{height: 5}} />
            {this.props.search ? (
              <Text
                style={{color: BLACK_COLOR, fontSize: 10, fontWeight: '700'}}>
                Discover
              </Text>
            ) : (
              <React.Fragment>
                {this.props.home ? (
                  <Text style={{color: '#B3B3B3', fontSize: 10}}>Discover</Text>
                ) : (
                  <Text style={{color: '#B3B3B3', fontSize: 10}}>Discover</Text>
                )}
              </React.Fragment>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('RecordingScreen')}
            style={{
              flex: 1,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="stretch"
              source={this.props.home ? plusTikTokWhite : plusTikTok}
              style={{
                width: 45,
                height: 28,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.onInboxPress(true)}
            style={{
              flex: 1,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="stretch"
              source={
                this.props.inbox
                  ? require('../../Icons/messageBlackIcon.png')
                  : this.props.home
                  ? require('../../Icons/messageIcon.png')
                  : require('../../Icons/messageIcon.png')
              }
              style={{
                width: 20,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}
            />
            <View style={{height: 5}} />
            {this.props.inbox ? (
              <Text
                style={{color: BLACK_COLOR, fontSize: 10, fontWeight: '700'}}>
                Inbox
              </Text>
            ) : (
              <React.Fragment>
                {this.props.home ? (
                  <Text
                    style={{
                      color: WHITE_COLOR,
                      fontSize: 10,
                      fontWeight: '700',
                    }}>
                    Inbox
                  </Text>
                ) : (
                  <Text
                    style={{color: '#B3B3B3', fontSize: 10, fontWeight: '700'}}>
                    Inbox
                  </Text>
                )}
              </React.Fragment>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.onProfilePress(true)}
            style={{
              flex: 1,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="stretch"
              source={
                this.props.profile
                  ? require('../../Icons/person1.png')
                  : this.props.home
                  ? require('../../Icons/person2.png')
                  : require('../../Icons/person2.png')
              }
              style={{
                width: 23,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}
            />
            <View style={{height: 5}} />
            {this.props.profile ? (
              <Text
                style={{color: BLACK_COLOR, fontSize: 10, fontWeight: '700'}}>
                Me
              </Text>
            ) : (
              <React.Fragment>
                {this.props.home ? (
                  <Text
                    style={{
                      color: WHITE_COLOR,
                      fontSize: 10,
                      fontWeight: '700',
                    }}>
                    Me
                  </Text>
                ) : (
                  <Text
                    style={{color: '#B3B3B3', fontSize: 10, fontWeight: '700'}}>
                    Me
                  </Text>
                )}
              </React.Fragment>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default FooterComponent;
