import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  WHITE_COLOR,
  VIEW_BG_COLOR,
  STATUS_BAR_COLOR,
  TEXT_NOTE_COLOR,
} from '../../../themes/colors';
import {SMALL} from '../../../themes/fonts';
class AuthSecondScreen extends Component {
  state = {
    inputBoxOne: '',
    inputBoxTwo: '',
    inputBoxThree: '',
    inputBoxFour: '',
    inputBoxFive: '',
    inputBoxSix: '',
  };

  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <View style={{height: 60, flexDirection: 'row'}}>
          <View style={{flex: 1}} />
          <View style={[styles.flexStyle, {flex: 5}]}>
            <Text
              style={{
                fontSize: 17,
                color: VIEW_BG_COLOR,
                fontWeight: 'bold',
              }}>
              Verify +92 3064128120
            </Text>
          </View>
          <TouchableOpacity style={styles.flexStyle}>
            <Image
              source={require('../../../Icons/menuGreyIcon.png')}
              style={{height: 20, width: 5}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.textStyle}>
          <Text style={{fontWeight: '700', textAlign: 'center'}}>
            Waiting to automatically detect an SMS sent to +92 3064128120
          </Text>
        </View>

        <View style={styles.mainViewStyle}>
          <View style={styles.inputfieldsViewStyle}>
            <TextInput
              ref={input => {
                this.firstTextInput = input;
              }}
              onChangeText={text => {
                this.secondTextInput.focus();
                this.secondTextInput.setNativeProps({
                  style: [styles.textInputsStyle],
                });
                this.setState({inputBoxOne: text});
              }}
              onFocus={() => {
                this.firstTextInput.setNativeProps({
                  style: [styles.textInputsStyle],
                });
              }}
              fontSize={20}
              maxLength={1}
              keyboardType={'numeric'}
              style={styles.textInputsStyle}
            />
          </View>
          <View style={{width: 8}} />
          <View style={styles.inputfieldsViewStyle}>
            <TextInput
              ref={input => {
                this.secondTextInput = input;
              }}
              onChangeText={text => {
                this.thirdTextInput.focus();
                this.thirdTextInput.setNativeProps({
                  style: [styles.textInputsStyle],
                });
                this.setState({inputBoxTwo: text});
              }}
              fontSize={20}
              maxLength={1}
              keyboardType={'numeric'}
              style={styles.textInputsStyle}
            />
          </View>
          <View style={{width: 8}} />
          <View style={styles.inputfieldsViewStyle}>
            <TextInput
              ref={input => {
                this.thirdTextInput = input;
              }}
              onChangeText={text => {
                this.fourthTextInput.focus();
                this.fourthTextInput.setNativeProps({
                  style: [styles.textInputsStyle],
                });
                this.setState({inputBoxThree: text});
              }}
              fontSize={20}
              maxLength={1}
              keyboardType={'numeric'}
              style={styles.textInputsStyle}
            />
          </View>
          <View style={{width: 10}} />
          <View style={styles.inputfieldsViewStyle}>
            <TextInput
              fontSize={20}
              ref={input => {
                this.fourthTextInput = input;
              }}
              onChangeText={text => {
                this.fifthTextInput.focus();
                this.fifthTextInput.setNativeProps({
                  style: [styles.textInputsStyle],
                });
                this.setState({inputBoxFour: text});
              }}
              maxLength={1}
              keyboardType={'numeric'}
              style={styles.textInputsStyle}
            />
          </View>
          <View style={{width: 8}} />
          <View style={styles.inputfieldsViewStyle}>
            <TextInput
              fontSize={20}
              ref={input => {
                this.fifthTextInput = input;
              }}
              onChangeText={text => {
                this.sixthTextInput.focus();
                this.sixthTextInput.setNativeProps({
                  style: [styles.textInputsStyle],
                });
                this.setState({inputBoxFive: text});
              }}
              maxLength={1}
              keyboardType={'numeric'}
              style={styles.textInputsStyle}
            />
          </View>

          <View style={{width: 8}} />
          <View style={styles.inputfieldsViewStyle}>
            <TextInput
              fontSize={20}
              ref={input => {
                this.sixthTextInput = input;
              }}
              onChangeText={text => this.setState({inputBoxSix: text})}
              maxLength={1}
              keyboardType={'numeric'}
              style={styles.textInputsStyle}
            />
          </View>
        </View>

        <View style={styles.lineStyle1} />
        <View style={styles.textViewStyle}>
          <Text style={{color: '#B4B4B4', fontWeight: '700'}}>
            Enter 6-digit code
          </Text>
        </View>
        <View style={{height: 10}} />
        <View style={styles.clickableViewStyle}>
          <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
            <View style={styles.iconBgViewColor}>
              <Image
                source={require('../../../Icons/resendIcon.png')}
                style={{height: 20, width: 20}}
              />
            </View>
          </View>
          <TouchableOpacity
            style={[styles.flexStyle, {flex: 5, alignItems: 'flex-start'}]}>
            <Text style={{color: '#9E9E9E', fontWeight: 'bold'}}>
              Resend SMS
            </Text>
          </TouchableOpacity>

          <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
            <Text style={{color: '#C1C5C8'}}>2:02</Text>
          </View>
        </View>

        <View style={styles.lineStyle2} />

        <View style={{height: 5}} />
        <View style={styles.clickableViewStyle}>
          <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
            <View style={styles.iconBgViewColor}>
              <Image
                source={require('../../../Icons/phoneGreyIcon.png')}
                style={{
                  height: 20,
                  width: 20,
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            style={[styles.flexStyle, {flex: 5, alignItems: 'flex-start'}]}>
            <Text
              style={{
                color: '#9E9E9E',
                fontWeight: 'bold',
              }}>
              Call me
            </Text>
          </TouchableOpacity>

          <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
            <Text style={{color: '#C1C5C8'}}>1:00</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default AuthSecondScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  flexStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  textStyle: {
    height: 60,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainViewStyle: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  inputfieldsViewStyle: {
    height: 50,
    width: 25,
    backgroundColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderBottomColor: '#C1C5C8',
    borderWidth: 2,
  },
  textInputsStyle: {
    width: '100%',
    height: '100%',
    color: 'black',
    textAlign: 'center',
  },
  clickableViewStyle: {
    height: 40,
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
  },

  iconBgViewColor: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 35,
  },
  lineStyle1: {
    height: 3,
    backgroundColor: VIEW_BG_COLOR,
    width: '55%',
    alignSelf: 'center',
    marginTop: 15,
  },
  textViewStyle: {
    height: 35,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  lineStyle2: {
    height: 1,
    backgroundColor: '#C1C5C8',
    width: '90%',
    alignSelf: 'center',
    marginTop: 5,
  },
});
