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
import {LARGE, SMALL, MEDIUM} from '../../../themes/fonts';
import HomePageChatComponent from '../../../components/whatsappComponents/homePageChatComponent';
import MenuPopupComponent from '../../../components/whatsappComponents/menuPopupComponent';
import {
  BLACK_COLOR,
  WHITE_COLOR,
  PaARROT_GREEN_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import ActiveUserComponent from '../../../components/whatsappComponents/activeUserComponent';
class HomePageWithMenuSecondScreen extends Component {
  state = {popupVisible: false};
  togglePopup() {
    this.setState({popupVisible: !this.state.popupVisible});
  }
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <View style={styles.headerMainViewStyle}>
          <View style={[styles.headerFlexStyle, {flex: 7}]}>
            <Text style={styles.headerTitleTextViewStyle}>Social App</Text>
          </View>

          <View style={[styles.headerFlexStyle, {alignItems: 'center'}]}>
            <TouchableOpacity>
              <Image
                source={require('../../../Icons/searchWhiteIcon.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.headerFlexStyle, {alignItems: 'flex-end'}]}>
            <TouchableOpacity onPress={() => this.togglePopup()}>
              <Image
                source={require('../../../Icons/menuWhiteIcon.png')}
                style={{height: 17, width: 4, marginRight: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headingViewStyle}>
          <Text style={styles.headingTextStyle}>Active</Text>
        </View>
        <ScrollView horizontal={true}>
          <View
            style={{
              height: 140,
              width: '100%',
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <View style={{flex: 1}}>
              <ActiveUserComponent />
            </View>
            <View style={{flex: 1}}>
              <ActiveUserComponent />
            </View>
            <View style={{flex: 1}}>
              <ActiveUserComponent />
            </View>
            <View style={{flex: 1}}>
              <ActiveUserComponent />
            </View>
            <View style={{flex: 1}}>
              <ActiveUserComponent />
            </View>
            <View style={{flex: 1}}>
              <ActiveUserComponent />
            </View>
            <View style={{flex: 1}}>
              <ActiveUserComponent />
            </View>
          </View>
        </ScrollView>
        {this.state.popupVisible ? (
          <MenuPopupComponent showSecondPopup />
        ) : (
          false
        )}
        <View style={styles.headingViewStyle}>
          <Text style={styles.headingTextStyle}>My Chats</Text>
        </View>
        <ScrollView style={{flexGrow: 1}}>
          <HomePageChatComponent
            numViewColor={PaARROT_GREEN_COLOR}
            showOnlineStatus
            chatMuted
            timeOfMsgReceived={'11:30 AM'}
            numberofMsgs={'333'}
          />
          <HomePageChatComponent numViewColor={PaARROT_GREEN_COLOR} />
          <HomePageChatComponent numViewColor={PaARROT_GREEN_COLOR} />
          <HomePageChatComponent
            numViewColor={PaARROT_GREEN_COLOR}
            showOnlineStatus
            chatMuted
            timeOfMsgReceived={'11:59 AM'}
            numberofMsgs={'10'}
          />
          <HomePageChatComponent
            numViewColor={PaARROT_GREEN_COLOR}
            showOnlineStatus
            chatMuted
            timeOfMsgReceived={'9:36 AM'}
            numberofMsgs={'1000'}
          />
          <HomePageChatComponent numViewColor={PaARROT_GREEN_COLOR} />
          <HomePageChatComponent numViewColor={PaARROT_GREEN_COLOR} />
          <HomePageChatComponent
            numViewColor={PaARROT_GREEN_COLOR}
            showOnlineStatus
            chatMuted
            timeOfMsgReceived={'11:59 AM'}
            numberofMsgs={'10'}
          />
        </ScrollView>
        <TouchableOpacity style={styles.buttonStyle}>
          <View style={styles.viewStyle}>
            <Image
              style={{width: 60, height: 60}}
              source={require('../../../Icons/faceIcon.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomePageWithMenuSecondScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
  },
  headerMainViewStyle: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: BLACK_COLOR,
  },
  headerTitleTextViewStyle: {
    fontSize: LARGE,
    fontWeight: 'bold',
    paddingLeft: 20,
    color: WHITE_COLOR,
  },
  headerFlexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  buttonStyle: {
    width: 60,
    height: 60,
    position: 'absolute',
    zIndex: 999,
    backgroundColor: 'transparent',
    borderRadius: 100,
    bottom: 20,
    right: 30,
  },
  viewStyle: {flex: 1, justifyContent: 'center', paddingLeft: 5},
  headingViewStyle: {
    height: 30,
    justifyContent: 'center',
  },
  headingTextStyle: {fontSize: MEDIUM, paddingLeft: 20},
});
