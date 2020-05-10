import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {WHITE_COLOR, TEXT_NOTE_COLOR, VIEW_BG_COLOR} from '../../themes/colors';
import {EXTRA_LARGE, MEDIUM, SMALL, EXTRA_SMALL} from '../../themes/fonts';
class HomePageBroadcastComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <TouchableOpacity
          style={[styles.mainViewStyle, {backgroundColor: this.props.bgColor}]}
          onPress={this.props.onPressMsgBar}>
          <View style={[styles.flexStyle, {alignItems: 'center'}]}>
            <View
              style={{
                height: 55,
                width: 55,
                borderRadius: 100,
                backgroundColor: '#B1D1CE',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../Icons/technology.png')}
                style={{height: 20, width: 22}}
              />
            </View>
          </View>
          <View style={{width: 5}} />
          <View style={{flex: 4}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View
                style={[
                  styles.flexStyle,
                  {
                    flex: 4,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                  },
                ]}>
                <Text style={styles.nameTextStyle}>
                  {this.props.nameText
                    ? this.props.nameText
                    : 'Qasim, Abbas, Faheem...'}
                </Text>
              </View>

              <View
                style={[
                  styles.flexStyle,
                  {
                    justifyContent: 'flex-end',
                    flex: 1.5,
                    alignItems: 'flex-start',
                  },
                ]}>
                <Text style={styles.msgTimeTextStyle}>
                  {this.props.timeOfMsgReceived
                    ? this.props.timeOfMsgReceived
                    : '4/21/2020'}
                </Text>
              </View>
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
              <Text style={{color: TEXT_NOTE_COLOR}}>
                {this.props.msgText
                  ? this.props.msgText
                  : 'You created a broadcast with 6 contacts'}
              </Text>
            </View>
            <View style={styles.underLineStyle} />
          </View>
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}

export default HomePageBroadcastComponent;

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 80,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  onlineStatusStyle: {
    height: 15,
    width: 15,
    borderRadius: 20,
    backgroundColor: '#00B5AA',
    marginTop: -20,
    marginLeft: 43,
    borderColor: WHITE_COLOR,
    borderWidth: 2,
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {height: 55, width: 55, borderRadius: 50},
  nameTextStyle: {
    fontSize: MEDIUM,
    fontWeight: '300',
    paddingLeft: 5,
  },
  underLineStyle: {height: 1, backgroundColor: '#EAEAEA'},
  msgTimeTextStyle: {
    fontSize: SMALL,
    paddingLeft: 5,
    color: TEXT_NOTE_COLOR,
  },
  msgNumberViewStyle: {
    height: 20,
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
