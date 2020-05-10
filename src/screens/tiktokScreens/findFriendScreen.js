import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {WHITE_COLOR, STATUS_BAR_COLOR} from '../../themes/colors';
import MessagesHeaderComponent from '../../components/tiktokComponents/messagesHeaderComponnet';
import {MEDIUM} from '../../themes/fonts';
import FindFriendComponent from '../../components/tiktokComponents/findFriendComponent';
import CustomSearchBar from '../../components/whatsappComponents/customSearchBar';
class FindFriendScreen extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <MessagesHeaderComponent
          onPressBack={() => this.props.navigation.goBack()}
          showBackIcon
          headerTitle={'Find Friends'}
          hideMoreIcon
        />

        <View style={{height: 10}} />

        <CustomSearchBar />
        <View style={{height: 20}} />

        <FindFriendComponent
          text={'Invite friends'}
          image={require('../../Icons/userWhiteIcon.png')}
          iconHeight={20}
          iconWidth={20}
          showArrowRight
          iconViewBgColor={'#FB6A5C'}
        />
        <FindFriendComponent
          text={'Find contacts'}
          image={require('../../Icons/callWhiteIcon.png')}
          iconHeight={18}
          iconWidth={18}
          showArrowRight
          iconViewBgColor={'#0BE199'}
        />
        <FindFriendComponent
          text={'Find facebook friends'}
          image={require('../../Icons/facebookWhiteIcon.png')}
          iconHeight={23}
          iconWidth={20}
          showArrowRight
          iconViewBgColor={'#0176F6'}
        />
      </View>
    );
  }
}

export default FindFriendScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
});
