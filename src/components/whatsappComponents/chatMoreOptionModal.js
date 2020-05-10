import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {WHITE_COLOR, BLACK_COLOR} from '../../themes/colors';
import {MEDIUM} from '../../themes/fonts';
class ChatMoreOptionsModal extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <View style={{flex: 1.3}} />
        <View style={{flex: 1, width: '95%', alignSelf: 'center'}}>
          <View
            style={{
              flex: 6,
              backgroundColor: WHITE_COLOR,
              borderRadius: 10,
            }}>
            <TouchableOpacity style={styles.flexStyle}>
              <Text style={styles.texStyle}>Mute</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexStyle}>
              <Text style={styles.texStyle}>Contact Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexStyle}>
              <Text style={styles.texStyle}>Export Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexStyle}>
              <Text style={styles.texStyle}>Clear Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexStyle}>
              <Text style={[styles.texStyle, {color: 'red'}]}>Delete Chat</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 10, backgroundColor: 'transparent'}} />
          <TouchableOpacity
            onPress={this.props.toggleModal}
            style={{
              flex: 1,
              backgroundColor: WHITE_COLOR,
              borderRadius: 10,
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.texStyle}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 30}} />
      </View>
    );
  }
}

export default ChatMoreOptionsModal;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texStyle: {fontSize: MEDIUM, fontWeight: '800', color: BLACK_COLOR},
});
