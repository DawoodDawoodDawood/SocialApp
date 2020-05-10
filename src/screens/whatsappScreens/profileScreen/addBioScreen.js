import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import {
  WHITE_COLOR,
  BLACK_COLOR,
  STATUS_BAR_COLOR,
  LIGHT_GREY_BG_COLOR,
} from '../../../themes/colors';
import HeaderComponent from '../../../components/whatsappComponents/headerComponent';
import {SMALL, MEDIUM} from '../../../themes/fonts';
class AddBioScreen extends Component {
  state = {bio: '', bioTextLength: '0'};
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <HeaderComponent
          title={'Status'}
          showNextButton
          navigation={this.props.navigation}
          onPressNext={() =>
            this.props.navigation.navigate('EditProfileScreen')
          }
        />

        <View style={{height: 15}} />

        <View style={styles.nameTextViewStyle}>
          <Text style={{color: 'grey', fontSize: MEDIUM, fontWeight: '600'}}>
            Status
          </Text>
        </View>
        <View style={{height: 10}} />

        <View style={styles.textInputViewStyle}>
          <View style={[styles.flexStyle, {flex: 7, alignItems: 'flex-start'}]}>
            <TextInput
              placeholder={'Add Status'}
              // placeholderTextColor={BLACK_COLOR}
              style={styles.textInputStyle}
              onChangeText={text => {
                this.setState({
                  bio: text,
                  bioTextLength: text.length,
                });
              }}
            />
          </View>
          <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
            <TouchableOpacity>
              <Image
                source={require('../../../Icons/cancelTextIcon.png')}
                style={{height: 15, width: 15}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.textCounterViewStyle}>
          <Text style={{fontSize: SMALL, color: 'grey'}}>
            {this.state.bioTextLength}/80
          </Text>
        </View>
      </View>
    );
  }
}

export default AddBioScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  flexStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  nameTextViewStyle: {
    height: 35,
    width: '92%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  textInputViewStyle: {
    height: 40,
    width: '92%',
    alignSelf: 'center',
    flexDirection: 'row',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderBottomColor: '#E9E9E9',
    borderWidth: 1,
  },
  textInputStyle: {
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderBottomColor: 'white',
    borderWidth: 1,
    fontSize: SMALL,
  },
  textCounterViewStyle: {
    height: 30,
    width: '92%',
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
