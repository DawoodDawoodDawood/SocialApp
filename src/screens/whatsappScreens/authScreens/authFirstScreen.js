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
} from '../../../themes/colors';
import {MEDIUM, LARGE} from '../../../themes/fonts';
import CountryPicker, {
  getAllCountries,
} from 'react-native-country-picker-modal';

const NORTH_AMERICA = ['NG', 'GH', 'SL', 'GM', 'LR'];
class AuthFirstScreen extends Component {
  constructor(props) {
    super(props);
    let userLocaleCountryCode = null;
    const userCountryData = getAllCountries()
      .filter(country => NORTH_AMERICA.includes(country.cca2))
      .filter(country => country.cca2 === userLocaleCountryCode)
      .pop();
    let callingCode = null;
    let cca2 = userLocaleCountryCode;
    if (!cca2 || !userCountryData) {
      cca2 = 'NG';
      callingCode = '234';
    } else {
      callingCode = userCountryData.callingCode;
    }
    this.state = {
      cca2,
      callingCode,
      code: '',
    };
  }
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
              Enter your phone number
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
            We will send an SMS message to verify your phone number
          </Text>
        </View>

        {/* country picker */}
        <View style={{height: 20}} />
        <View style={styles.phoneMainViewStyle}>
          <View style={styles.countryPickerViewStyle}>
            <CountryPicker
              hideAlphabetFilter={true}
              countryList={NORTH_AMERICA}
              onChange={value => {
                this.setState({
                  cca2: value.cca2,
                  callingCode: value.callingCode,
                });
              }}
              cca2={this.state.cca2}
              translation="eng"
            />
          </View>
          <View style={{width: 5}} />
          <View style={styles.phoneNumberOuterViewStyle}>
            <View style={{marginLeft: 65}} />
            <Text style={{fontSize: 14}}>+</Text>
            <Text style={{fontSize: 14}}>{this.state.callingCode}</Text>
            <TextInput
              fontsize={14}
              maxLength={10}
              keyboardType={'numeric'}
              placeholder={'phone number'}
              style={styles.textInputStyle}
            />
          </View>
        </View>

        <View style={{height: 20}} />
        <View style={styles.buttonViewStyle}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{color: WHITE_COLOR}}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default AuthFirstScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  flexStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  phoneMainViewStyle: {
    flexDirection: 'row',
    width: '90%',
    height: '6%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  countryPickerViewStyle: {
    flexDirection: 'row',
    height: 45,
    width: '18%',
    backgroundColor: '#F6F6F6',
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flex: 1,
  },
  phoneNumberOuterViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: '72%',
    backgroundColor: '#F6F6F6',
    elevation: 1,
    borderRadius: 10,
    flex: 4,
  },
  textInputStyle: {
    width: '100%',
    height: '100%',
    marginLeft: 10,
    fontFamily: 'mont',
  },
  textStyle: {
    height: 60,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    height: 46,
    width: 82,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: VIEW_BG_COLOR,
    borderRadius: 3,
    elevation: 2,
  },
  buttonViewStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: 80,
  },
});
