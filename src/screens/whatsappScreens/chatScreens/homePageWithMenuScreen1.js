import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {LARGE} from '../../../themes/fonts';
import HomePageChatComponent from '../../../components/whatsappComponents/homePageChatComponent';
import MenuPopupComponent from '../../../components/whatsappComponents/menuPopupComponent';
import {STATUS_BAR_COLOR} from '../../../themes/colors';
class HomePageWithMenuFirstScreen extends Component {
  state = {popupVisible: false};
  togglePopup() {
    this.setState({popupVisible: !this.state.popupVisible});
  }
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <View style={styles.headerMainViewStyle}>
          <View style={styles.headerFlexStyle}>
            <TouchableOpacity>
              <Image
                source={require('../../../Icons/searchIcon.png')}
                style={{height: 20, width: 20, marginLeft: 20}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={[styles.headerFlexStyle, {flex: 2, alignItems: 'center'}]}>
            <Text style={{fontSize: LARGE}}>Chats</Text>
          </View>

          <View style={[styles.headerFlexStyle, {alignItems: 'flex-end'}]}>
            <TouchableOpacity onPress={() => this.togglePopup()}>
              <Image
                source={require('../../../Icons/menuIcon.png')}
                style={{height: 17, width: 4, marginRight: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>

        {this.state.popupVisible ? <MenuPopupComponent /> : false}

        <ScrollView style={{flexGrow: 1}}>
          <HomePageChatComponent
            showOnlineStatus
            chatMuted
            timeOfMsgReceived={'11:30 AM'}
            numberofMsgs={'333'}
          />
          <HomePageChatComponent />
          <HomePageChatComponent />
          <HomePageChatComponent
            showOnlineStatus
            chatMuted
            timeOfMsgReceived={'11:59 AM'}
            numberofMsgs={'10'}
          />
          <HomePageChatComponent
            showOnlineStatus
            chatMuted
            timeOfMsgReceived={'9:36 AM'}
            numberofMsgs={'1000'}
          />
        </ScrollView>
      </View>
    );
  }
}

export default HomePageWithMenuFirstScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
  },
  headerMainViewStyle: {
    height: 60,
    flexDirection: 'row',
  },
  headerFlexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
