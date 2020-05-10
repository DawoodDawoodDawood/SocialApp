import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {
  WHITE_COLOR,
  TEXT_NOTE_COLOR,
  VIEW_BG_COLOR,
  PaARROT_GREEN_COLOR,
} from '../../themes/colors';
import {EXTRA_LARGE, MEDIUM} from '../../themes/fonts';
class NewChatComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.mainViewStyle}>
          <View style={styles.flexStyle}>
            {this.props.hideOnlineStatus ? (
              false
            ) : (
              <View style={styles.onlineStatusStyle} />
            )}
            <Image
              source={require('../../Images/personImage.jpg')}
              style={styles.imageStyle}
            />
            {this.props.readyForBroadcast ? (
              <View style={styles.broadcastViewStyle}>
                <Image
                  source={require('../../Icons/tickIcon.png')}
                  style={{height: 7, width: 12, marginRight: 2}}
                />
              </View>
            ) : (
              false
            )}
          </View>
          <View style={{width: 5}} />
          <View style={{flex: 4}}>
            <View
              style={[
                styles.flexStyle,
                {
                  flex: 1,
                  alignItems: 'flex-start',
                  justifyContent: 'flex-end',
                },
              ]}>
              <Text style={styles.nameTextStyle}>
                {this.props.upperText ? this.props.upperText : 'Person Name'}
              </Text>
            </View>

            <View style={{height: 5}} />
            <View
              style={[
                styles.flexStyle,
                {
                  paddingLeft: 5,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                },
              ]}>
              {this.props.showOnline ? (
                <Text style={{color: '#35C4BB'}}>Online</Text>
              ) : (
                <Text style={{color: TEXT_NOTE_COLOR}}>
                  {this.props.lowerText
                    ? this.props.lowerText
                    : ' Last seen Feb 11 at 11:20 PM'}
                </Text>
              )}
            </View>
            <View style={styles.underLineStyle} />
          </View>
          <View style={{flex: 1}}>
            {this.props.showCrossIcon ? (
              <View style={[styles.flexStyle, {alignItems: 'center'}]}>
                <TouchableOpacity onPress={this.props.onPressCross}>
                  <Image
                    source={require('../../Icons/crossCircleIcon.png')}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{flex: 1}} />
            )}
            <View style={styles.underLineStyle} />
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default NewChatComponent;

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 80,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  onlineStatusStyle: {
    height: 12,
    width: 12,
    borderRadius: 20,
    backgroundColor: '#00B5AA',
    marginBottom: -10,
    marginLeft: 32,
    borderColor: WHITE_COLOR,
    borderWidth: 2,
    zIndex: 999,
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  broadcastViewStyle: {
    height: 15,
    width: 15,
    borderRadius: 20,
    backgroundColor: PaARROT_GREEN_COLOR,
    marginTop: -17,
    marginLeft: 37,
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {height: 50, width: 50, borderRadius: 50},
  nameTextStyle: {
    fontSize: MEDIUM,
    fontWeight: '300',
    paddingLeft: 5,
  },
  underLineStyle: {height: 1, backgroundColor: '#EAEAEA'},
  msgTimeTextStyle: {
    fontSize: MEDIUM,
    fontWeight: '200',
    paddingLeft: 5,
    color: TEXT_NOTE_COLOR,
  },
  msgNumberViewStyle: {
    height: 25,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  archiveViewStyle: {
    height: 18,
    borderColor: TEXT_NOTE_COLOR,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  archiveTextStyle: {fontSize: 10, color: TEXT_NOTE_COLOR, padding: 10},
});
