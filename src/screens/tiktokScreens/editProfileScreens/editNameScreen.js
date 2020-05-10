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
} from '../../../themes/colors';
import EditProfileHeaderComponent from '../../../components/tiktokComponents/editProfileHeaderComponent';
import {SMALL} from '../../../themes/fonts';
class EditNameScreen extends Component {
  state = {name: '', nameTextLength: '0'};
  clearText() {
    this.setState({name: ''});
  }
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <EditProfileHeaderComponent
          headerTitle={'Name'}
          navigation={this.props.navigation}
        />

        <View style={styles.nameTextViewStyle}>
          <Text style={{color: 'grey', fontSize: SMALL, fontWeight: '600'}}>
            Name
          </Text>
        </View>
        <View style={{height: 10}} />

        <View style={styles.textInputViewStyle}>
          <View style={[styles.flexStyle, {flex: 7, alignItems: 'flex-start'}]}>
            <TextInput
              placeholder={'Enter Name'}
              style={styles.textInputStyle}
              value={this.state.name}
              onChangeText={text => {
                this.setState({
                  name: text,
                  nameTextLength: text.length,
                });
              }}
            />
          </View>
          <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
            <TouchableOpacity onPress={() => this.clearText()}>
              <Image
                source={require('../../../Icons/cancelTextIcon.png')}
                style={{height: 15, width: 15}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.textCounterViewStyle}>
          <Text style={{fontSize: SMALL, color: 'grey'}}>
            {this.state.nameTextLength}/20
          </Text>
        </View>
      </View>
    );
  }
}

export default EditNameScreen;

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
