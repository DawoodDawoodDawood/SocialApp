import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {TEXT_NOTE_COLOR} from '../../themes/colors';
import {MEDIUM} from '../../themes/fonts';
class CustomSearchBar extends Component {
  state = {searchText: '', clearText: false};
  onClearText() {
    this.setState({searchText: '', clearText: false});
  }
  render() {
    return (
      <View style={[styles.viewStyle, {height: 43, width: '90%'}]}>
        <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
          <TouchableOpacity>
            <Image
              source={require('../../Icons/search.png')}
              style={{height: 18, width: 18, marginLeft: 15}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.textFieldLineStyle}>
          <View style={[styles.flexStyle, {flex: 5}]}>
            <TextInput
              placeholder={'Search'}
              placeholderTextColor={'#A4A4A4'}
              value={this.state.searchText}
              style={styles.textInputStyle}
              onChangeText={text => {
                if (text === '') {
                  this.setState({searchText: text, clearText: false});
                } else if (text != '') {
                  this.setState({searchText: text, clearText: true});
                }
              }}
            />
          </View>
          <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
            {this.state.clearText ? (
              <TouchableOpacity onPress={() => this.onClearText()}>
                <Image
                  source={require('../../Icons/error.png')}
                  style={{height: 20, width: 20, marginRight: 15}}
                />
              </TouchableOpacity>
            ) : (
              false
            )}
          </View>
        </View>
      </View>
    );
  }
}

export default CustomSearchBar;

const styles = StyleSheet.create({
  viewStyle: {
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
  },
  textInputStyle: {
    height: 43,
    width: '100%',
    color: '#A4A4A4',
  },
  BG_ImageStyles: {
    height: 70,
    width: 70,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  allContactsViewStyle: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F6F6F6',
  },
  allContactsTextStyle: {
    color: TEXT_NOTE_COLOR,
    paddingLeft: 18,
    fontSize: MEDIUM,
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  lineStyle: {
    height: 1.3,
    backgroundColor: 'black',
    width: '100%',
    marginBottom: '27%',
  },
  textFieldLineStyle: {
    height: 50,
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
});
