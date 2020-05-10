import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {WHITE_COLOR, TEXT_NOTE_COLOR} from '../../themes/colors';
import {SMALL} from '../../themes/fonts';
class AllActivityComponent extends Component {
  state = {button: false};
  toggleButton() {
    this.setState({button: !this.state.button});
  }
  render() {
    return (
      <React.Fragment>
        <View
          style={[
            styles.mainViewStyle,
            {
              backgroundColor: this.props.backgroundColor
                ? this.props.backgroundColor
                : WHITE_COLOR,
            },
          ]}>
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
                {this.props.lowerText
                  ? this.props.lowerText
                  : 'started following you 21w'}
              </Text>
            </View>
          </View>

          <View style={[styles.flexStyle, {flex: 1.5, alignItems: 'flex-end'}]}>
            {this.props.showImage ? (
              <Image
                source={require('../../Images/image.jpg')}
                style={{height: 60, width: 40, borderRadius: 5}}
              />
            ) : (
              <TouchableOpacity onPress={() => this.toggleButton()}>
                {this.state.button ? (
                  <View style={styles.buttonStyle1}>
                    <Text style={{fontSize: SMALL, fontWeight: '600'}}>
                      Friends
                    </Text>
                  </View>
                ) : (
                  <View style={styles.buttonStyle2}>
                    <Text style={styles.followButtonTextStyle}>Follow</Text>
                  </View>
                )}
              </TouchableOpacity>
            )}
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default AllActivityComponent;

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 80,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
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
    fontSize: SMALL,
    fontWeight: '700',
    color: WHITE_COLOR,
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
});
