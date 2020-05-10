import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {
  WHITE_COLOR,
  TEXT_NOTE_COLOR,
  VIEW_BG_COLOR,
  PaARROT_GREEN_COLOR,
} from '../../themes/colors';
import {EXTRA_LARGE, MEDIUM, EXTRA_SMALL, SMALL} from '../../themes/fonts';
class GroupAudioComponent extends Component {
  state = {stopDownload: false};
  toggleDownload_Stop() {
    this.setState({stopDownload: !this.state.stopDownload});
  }
  render() {
    return (
      <React.Fragment>
        <View style={styles.mainViewStyle}>
          <View style={styles.flexStyle}>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
                backgroundColor: '#71B5E9',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Image
                  source={require('../../Icons/playFullicon.png')}
                  style={{height: 18, width: 15, marginLeft: 5}}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => this.toggleDownload_Stop()}
              style={styles.broadcastViewStyle}>
              {this.state.stopDownload ? (
                <Image
                  source={require('../../Icons/cancel.png')}
                  style={{height: 8, width: 8}}
                />
              ) : (
                <Image
                  source={require('../../Icons/down-arrow.png')}
                  style={{height: 12, width: 12}}
                />
              )}
            </TouchableOpacity>
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
                {this.props.upperText
                  ? this.props.upperText
                  : 'LIKE I WANT YOU'}
              </Text>
            </View>

            <View style={{height: 1}} />
            <View
              style={[
                styles.flexStyle,
                {
                  paddingLeft: 5,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                },
              ]}>
              <Text style={{color: TEXT_NOTE_COLOR}}>
                {this.props.lowerText ? this.props.lowerText : 'Giveon'}
              </Text>
            </View>
            <View style={styles.underLineStyle} />
          </View>
          <View style={{flex: 1.5}}>
            <View style={[styles.flexStyle, {justifyContent: 'flex-end'}]}>
              <Text style={styles.msgTimeTextStyle}>
                {this.props.timeOfMsgReceived
                  ? this.props.timeOfMsgReceived
                  : '4/21/2020'}
              </Text>
            </View>
            <View style={{height: 5}} />
            <View style={[styles.flexStyle, {justifyContent: 'flex-start'}]}>
              <Text style={styles.msgTimeTextStyle}>
                {this.props.sizeOfAudio ? this.props.sizeOfAudio : '221 KB'}
              </Text>
            </View>
            <View style={styles.underLineStyle} />
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default GroupAudioComponent;

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
    height: 22,
    width: 22,
    borderRadius: 20,
    backgroundColor: '#71B5E9',
    marginTop: -22,
    marginLeft: 35,
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  imageStyle: {height: 50, width: 50, borderRadius: 50},
  nameTextStyle: {
    fontSize: MEDIUM,
    fontWeight: '700',
    paddingLeft: 5,
  },
  underLineStyle: {height: 1, backgroundColor: '#EAEAEA'},
  msgTimeTextStyle: {
    fontSize: SMALL,
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
