import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {WHITE_COLOR, STATUS_BAR_COLOR} from '../../../themes/colors';
import MessagesHeaderComponent from '../../../components/tiktokComponents/messagesHeaderComponnet';
import SoundScreenComponent from '../../../components/tiktokComponents/soundScreenComponent';
class SoundSecondScreen extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <MessagesHeaderComponent
          showBackIcon
          headerTitle={'For You'}
          hideRightButtons
        />
        <View style={{height: 10}} />
        <SoundScreenComponent />
        <SoundScreenComponent />
        <SoundScreenComponent />
        <SoundScreenComponent />
        <SoundScreenComponent />
        <SoundScreenComponent />
      </View>
    );
  }
}

export default SoundSecondScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
});
