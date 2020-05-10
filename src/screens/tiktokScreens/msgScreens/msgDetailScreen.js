import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {WHITE_COLOR, STATUS_BAR_COLOR} from '../../../themes/colors';
import MessagesHeaderComponent from '../../../components/tiktokComponents/messagesHeaderComponnet';
import MsgProfileDetailComponent from '../../../components/tiktokComponents/msgProfileDetailComponent';
import ToggleBarComponent from '../../../components/tiktokComponents/toggleBarComponent';
import ClickableComponent from '../../../components/tiktokComponents/clickableComponent';
class MsgDetailScreen extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <MessagesHeaderComponent
          onPressBack={() => this.props.navigation.goBack()}
          showBackIcon
          headerTitle={'Details'}
          hideRightButtons
        />

        <MsgProfileDetailComponent
          onPress={() => this.props.navigation.navigate('ProfileScreen')}
          stausImage={require('../../../Images/person.png')}
          nameText={'Muhammad Qasim'}
          lowerText={'Here will show your status'}
          showArrowRight
        />

        <ToggleBarComponent toggleText={'Mute Notifications'} />
        <ToggleBarComponent toggleText={'Pin to top'} />

        <ClickableComponent text={'Report'} />
        <ClickableComponent text={'Block'} />
      </View>
    );
  }
}

export default MsgDetailScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  dateViewStyle: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  msgViewStyle: {
    height: 40,
    backgroundColor: WHITE_COLOR,
    borderRadius: 5,
    borderColor: '#F7F7F7',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 18,
  },
  bottomMainViewStyle: {
    height: 60,
    elevation: 5,
    flexDirection: 'row',
  },
});
