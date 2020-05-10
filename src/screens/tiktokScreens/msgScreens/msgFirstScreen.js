import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {WHITE_COLOR, STATUS_BAR_COLOR} from '../../../themes/colors';
import MessagesHeaderComponent from '../../../components/tiktokComponents/messagesHeaderComponnet';
import MsgBarComponent from '../../../components/tiktokComponents/msgBarComponent';
class MsgFirstScreen extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <MessagesHeaderComponent headerTitle={'Inbox'} hideMoreIcon />

        <View style={{height: 10}} />
        <MsgBarComponent
          navigation={this.props.navigation}
          personName={'Muhammad Qasim'}
          msgText={'Last message will show here'}
          msgDate={' 01-06'}
        />
      </View>
    );
  }
}

export default MsgFirstScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
});
