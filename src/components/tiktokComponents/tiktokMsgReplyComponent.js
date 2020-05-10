import React, {Component} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  Text,
} from 'react-native';
import {VIEW_BG_COLOR, WHITE_COLOR} from '../../themes/colors';

class MsgReplyComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.viewStyle2}>
          <View style={{flex: 8, paddingLeft: 15}}>
            <TextInput
              placeholder={'Reply to qasim'}
              autoFocus={true}
              onChangeText={text => {
                if (text === '') {
                  this.setState({msgText: text, isFocus: false});
                } else if (text != '') {
                  this.setState({msgText: text, isFocus: true});
                }
              }}
            />
          </View>
          <View style={styles.flexStyle}>
            <TouchableOpacity>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', paddingBottom: 6}}>
                @
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.flexStyle}>
            <TouchableOpacity>
              <Image
                resizeMode="stretch"
                source={require('../../Icons/faceIcon.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.flexStyle}>
            <TouchableOpacity>
              <Image
                resizeMode="stretch"
                source={require('../../Icons/selectFileIcon.png')}
                style={{height: 25, width: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default MsgReplyComponent;

const styles = StyleSheet.create({
  viewStyle2: {
    height: 50,
    backgroundColor: WHITE_COLOR,
    flexDirection: 'row',
    elevation: 1,
  },
  flexStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
