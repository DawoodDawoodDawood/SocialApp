import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {WHITE_COLOR, TEXT_NOTE_COLOR, VIEW_BG_COLOR} from '../../themes/colors';
import {EXTRA_LARGE, MEDIUM, SMALL, EXTRA_SMALL} from '../../themes/fonts';
class CallComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.mainViewStyle}>
          {this.props.readyForBroadcast ? (
            <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
              <View style={styles.onlineStatusStyle} />
              <Image
                source={require('../../Images/personImage.jpg')}
                style={styles.imageStyle}
              />
              <View style={styles.tickViewStyle}>
                <Image
                  source={require('../../Icons/tickIcon.png')}
                  style={{height: 10, width: 15, marginRight: 3}}
                />
              </View>
            </View>
          ) : (
            <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
              {/* <View style={styles.onlineStatusStyle} /> */}
              <Image
                source={require('../../Images/personImage.jpg')}
                style={styles.imageStyle}
              />
            </View>
          )}
          <View style={{width: 10}} />
          <View style={{flex: 3}}>
            <View
              style={[
                styles.flexStyle,
                {
                  alignItems: 'flex-start',
                  justifyContent: this.props.justify
                    ? this.props.justify
                    : 'flex-end',
                  paddingTop: this.props.padding ? this.props.padding : 0,
                },
              ]}>
              <Text style={styles.nameTextStyle}>Muhammad Salman</Text>
            </View>
            <View style={{height: 10}} />

            {this.props.secondView ? (
              // <View style={{flex: 1, flexDirection: 'row'}}>
              //   <View style={[styles.flexStyle1, {flex: 0.5, marginLeft: 5}]}>
              //     {this.props.inComing ? (
              //       <Image
              //         source={require('../../Icons/receivedCallicon.png')}
              //         style={{height: 10, width: 10, marginLeft: 2}}
              //       />
              //     ) : (
              //       <Image
              //         source={require('../../Icons/missedCallicon.png')}
              //         style={{height: 10, width: 10, marginLeft: 2}}
              //       />
              //     )}
              //   </View>
              //   <View style={styles.flexStyle1}>
              //     <Text style={[styles.timeTextStyle, {paddingLeft: 0}]}>
              //       Yesterday
              //     </Text>
              //   </View>
              //   <View style={styles.flexStyle1}>
              //     <Text style={[styles.timeTextStyle, {paddingLeft: 0}]}>
              //       7:45 AM
              //     </Text>
              //   </View>
              //   <View style={{flex: 0.6}} />
              // </View>
              <View />
            ) : (
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={[styles.flexStyle1, {marginLeft: 3}]}>
                  <Text style={{fontSize: 13, color: TEXT_NOTE_COLOR}}>
                    Yesterday
                  </Text>
                </View>
                <View style={styles.flexStyle1}>
                  <Text style={styles.timeTextStyle}>7:10 AM</Text>
                </View>
                <View style={styles.flexStyle1}>
                  {this.props.outgoing ? (
                    <Text style={{fontSize: 13, color: '#8FE78F'}}>
                      outgoing
                    </Text>
                  ) : (
                    <Text style={{fontSize: 13, color: 'red'}}>Incoming</Text>
                  )}
                </View>
                <View style={{flex: 0.6}} />
              </View>
            )}
            <View style={styles.underLineStyle} />
          </View>
          <View style={{flex: 1.5, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              {this.props.audioPhone ? (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('AudioCallScreen')
                  }
                  style={styles.flexStyle}>
                  <Image
                    source={require('../../Icons/audioCallicon.png')}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
              ) : (
                <View style={{flex: 1}} />
              )}
              <View style={styles.underLineStyle} />
            </View>
            <View style={{flex: 1}}>
              <View style={styles.flexStyle}>
                {this.props.showVideoIcon ? (
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('VideoCallScreen')
                    }>
                    <Image
                      source={require('../../Icons/videoCallicon.png')}
                      style={{height: 14, width: 20}}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('AudioCallScreen')
                    }>
                    <Image
                      source={require('../../Icons/audioCallicon.png')}
                      style={{height: 20, width: 20}}
                    />
                  </TouchableOpacity>
                )}
              </View>
              <View style={styles.underLineStyle} />
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default CallComponent;

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
    backgroundColor: '#50DAFE',
    marginBottom: -10,
    marginLeft: 35,
    zIndex: 999,
    borderColor: WHITE_COLOR,
    borderWidth: 2,
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {height: 50, width: 50, borderRadius: 50},
  nameTextStyle: {
    fontSize: MEDIUM,
    paddingLeft: 5,
  },
  underLineStyle: {height: 1, backgroundColor: '#EAEAEA'},
  msgTimeTextStyle: {
    fontSize: MEDIUM,
    fontWeight: 'bold',
    paddingLeft: 5,
    color: TEXT_NOTE_COLOR,
  },
  msgNumberViewStyle: {
    height: 25,
    borderRadius: 20,
    backgroundColor: VIEW_BG_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickViewStyle: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: '#43E243',
    marginTop: -20,
    marginRight: -50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexStyle1: {
    flex: 25,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  timeTextStyle: {
    paddingLeft: 4,
    fontSize: 13,
    color: TEXT_NOTE_COLOR,
  },
});
