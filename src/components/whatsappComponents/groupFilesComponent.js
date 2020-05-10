import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {WHITE_COLOR, TEXT_NOTE_COLOR, VIEW_BG_COLOR} from '../../themes/colors';
import {EXTRA_LARGE, MEDIUM, SMALL, EXTRA_SMALL} from '../../themes/fonts';
import {Icon} from 'react-native-vector-icons/FontAwesome';
class GroupFilesComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View
          style={[
            styles.mainViewStyle,
            {width: this.props.barWidth ? this.props.barWidth : '95%'},
          ]}>
          <View style={styles.flexStyle}>
            <ImageBackground
              source={
                this.props.imageSource
                  ? this.props.imageSource
                  : require('../../Icons/filesIcon.png')
              }
              style={[
                styles.imageStyle,
                {
                  height: this.props.height ? this.props.height : 28,
                  width: this.props.width ? this.props.width : 22,
                },
              ]}>
              <Text
                style={{
                  color: WHITE_COLOR,
                  fontSize: 9,
                  paddingTop: 6,
                  fontWeight: 'bold',
                }}>
                {this.props.documentText}
              </Text>
            </ImageBackground>
          </View>

          <View style={{width: 5}} />
          <View style={{flex: 6}}>
            <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
              <Text style={styles.nameTextStyle}>
                Security Requirement System.docx
              </Text>
              <View style={{height: 5}} />
              <Text
                style={{
                  fontSize: SMALL,
                  paddingLeft: 5,
                  color: this.props.subTextColor,
                }}>
                {this.props.lowerText ? this.props.lowerText : '14 kb.DOCX'}
              </Text>
            </View>
            <View style={styles.underLineStyle} />
          </View>
          <View style={{flex: 1.5}}>
            <View style={styles.flexStyle}>
              <Text style={{color: TEXT_NOTE_COLOR, fontSize: SMALL}}>
                3/12/2020
              </Text>
            </View>
            <View style={styles.underLineStyle} />
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default GroupFilesComponent;

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 60,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: WHITE_COLOR,
  },
  onlineStatusStyle: {
    height: 12,
    width: 12,
    borderRadius: 20,
    backgroundColor: '#50DAFE',
    marginBottom: -10,
    marginRight: -35,
    zIndex: 999,
    borderColor: WHITE_COLOR,
    borderWidth: 2,
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameTextStyle: {
    fontSize: 14,
    paddingLeft: 5,
  },
  underLineStyle: {height: 1, backgroundColor: '#E6E6E6'},
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
});
