import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {WHITE_COLOR, VIEW_BG_COLOR, BLACK_COLOR} from '../../themes/colors';
import {SMALL} from '../../themes/fonts';

class FooterComponent extends Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          backgroundColor: this.props.footerBgColor
            ? this.props.footerBgColor
            : WHITE_COLOR,
          flexDirection: 'row',
          height: 70,
          alignSelf: 'center',
          elevation: 10,
        }}>
        <TouchableOpacity
          onPress={() => this.props.onStatusPress(true)}
          style={{
            flex: 1,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="stretch"
            source={
              this.props.status
                ? require('../../Icons/colorStatusIcon.png')
                : require('../../Icons/fadeStatusIcon.png')
            }
            style={{
              width: 40,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
          />
          <View style={{height: 5}} />
          {this.props.status ? (
            <Text
              style={{
                color: VIEW_BG_COLOR,
                fontSize: 11,
                fontWeight: '700',
              }}>
              STATUS
            </Text>
          ) : (
            <Text style={{color: BLACK_COLOR, fontSize: 11, fontWeight: '700'}}>
              STATUS
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.onCallPress(true)}
          style={{
            flex: 1,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="stretch"
            source={
              this.props.call
                ? require('../../Icons/colorCallsIcon.png')
                : require('../../Icons/fadeCallIcon.png')
            }
            style={{
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
          />
          <View style={{height: 5}} />
          {this.props.call ? (
            <Text
              style={{
                color: VIEW_BG_COLOR,
                fontSize: 11,
                fontWeight: '700',
              }}>
              CALLS
            </Text>
          ) : (
            <Text style={{color: BLACK_COLOR, fontSize: 11, fontWeight: '700'}}>
              CALLS
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.onLivePress(true)}
          style={{
            flex: 1,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="stretch"
            source={
              this.props.live
                ? require('../../Icons/colorLiveIcon.png')
                : require('../../Icons/fadeLiveIcon.png')
            }
            style={{
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
          />
          <View style={{height: 5}} />
          {this.props.live ? (
            <Text
              style={{
                color: VIEW_BG_COLOR,
                fontSize: 11,
                fontWeight: '700',
              }}>
              LIVE
            </Text>
          ) : (
            <Text style={{color: BLACK_COLOR, fontSize: 11, fontWeight: '700'}}>
              LIVE
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.onChatPress(true)}
          style={{
            flex: 1,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="stretch"
            source={
              this.props.chat
                ? require('../../Icons/colorChatIcon.png')
                : require('../../Icons/fadeChatIcon.png')
            }
            style={{
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
          />
          <View style={{height: 5}} />
          {this.props.chat ? (
            <Text
              style={{
                color: VIEW_BG_COLOR,
                fontSize: 11,
                fontWeight: '700',
              }}>
              CHAT
            </Text>
          ) : (
            <Text style={{color: BLACK_COLOR, fontSize: 11, fontWeight: '700'}}>
              CHAT
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.onSettingsPress(true)}
          style={{
            flex: 1,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="stretch"
            source={
              this.props.settings
                ? require('../../Icons/colorSettingsIcon.png')
                : require('../../Icons/fadeSettingsIcon.png')
            }
            style={{
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
          />
          <View style={{height: 5}} />
          {this.props.settings ? (
            <Text
              style={{
                color: VIEW_BG_COLOR,
                fontSize: 11,
                fontWeight: '700',
              }}>
              SETTINGS
            </Text>
          ) : (
            <Text style={{color: BLACK_COLOR, fontSize: 11, fontWeight: '700'}}>
              SETTINGS
            </Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

export default FooterComponent;
