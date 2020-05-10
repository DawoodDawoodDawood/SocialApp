import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {WHITE_COLOR, TEXT_NOTE_COLOR} from '../../themes/colors';
import {SMALL} from '../../themes/fonts';
class FollowerSingleComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.mainViewStyle}>
          <View style={styles.flexStyle}>
            <Image
              source={require('../../Images/person.png')}
              style={styles.imageStyle}
            />
          </View>
          <View style={{flex: 3}}>
            <View
              style={[
                styles.flexStyle,
                {
                  alignItems: 'flex-start',
                  justifyContent: 'flex-end',
                },
              ]}>
              <Text style={styles.nameTextStyle}>
                {this.props.upperText ? this.props.upperText : 'Muhammad Qasim'}
              </Text>
            </View>

            <View style={{height: 2}} />
            <View
              style={[
                styles.flexStyle,
                {
                  paddingLeft: 5,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                },
              ]}>
              <Text style={{color: TEXT_NOTE_COLOR, fontSize: SMALL}}>
                {this.props.lowerText ? this.props.lowerText : 'Qasim Official'}
              </Text>
            </View>
          </View>
          {this.props.forFollowers ? (
            <View style={{flex: 2, flexDirection: 'row'}}>
              <View
                style={[styles.flexStyle, {flex: 4, alignItems: 'flex-end'}]}>
                {this.props.friend ? (
                  <TouchableOpacity style={styles.buttonStyle1}>
                    <Text
                      style={{padding: 10, fontSize: SMALL, fontWeight: '600'}}>
                      Friends
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.buttonStyle2}>
                    <Text style={styles.followButtonTextStyle}>Follow</Text>
                  </TouchableOpacity>
                )}
              </View>

              <View
                style={[styles.flexStyle, {flex: 1.5, alignItems: 'flex-end'}]}>
                <TouchableOpacity>
                  <Image
                    source={require('../../Icons/greyMoreIcon.png')}
                    style={{height: 16, width: 4, marginRight: 5}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View
              style={[styles.flexStyle, {flex: 1.5, alignItems: 'flex-end'}]}>
              <TouchableOpacity style={styles.buttonStyle1}>
                <Text style={{fontSize: SMALL, fontWeight: '600'}}>
                  Following
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </React.Fragment>
    );
  }
}

export default FollowerSingleComponent;

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 80,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: WHITE_COLOR,
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  imageStyle: {height: 50, width: 50, borderRadius: 50},
  nameTextStyle: {
    fontSize: 13,
    fontWeight: '600',
    paddingLeft: 5,
  },
  buttonStyle1: {
    height: 30,
    width: 80,
    borderRadius: 2,
    borderColor: '#E6E6E6',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle2: {
    height: 30,
    width: 80,
    borderRadius: 2,
    backgroundColor: '#FC3C6A',
    borderColor: '#FC3C6A',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  followButtonTextStyle: {
    padding: 10,
    fontSize: SMALL,
    fontWeight: '700',
    color: WHITE_COLOR,
  },
});
