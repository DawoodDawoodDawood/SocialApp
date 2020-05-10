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
import {
  TEXT_BLUE_COLOR,
  BLACK_COLOR,
  WHITE_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import {EXTRA_LARGE, MEDIUM} from '../../../themes/fonts';
import NewChatComponent from '../../../components/whatsappComponents/newChatComponent';
import CustomSearchBar from '../../../components/whatsappComponents/customSearchBar';
class NewChatScreen extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <View style={styles.headerMainViewStyle}>
          <View style={styles.headerFlexStyle}>
            <TouchableOpacity>
              <Text style={styles.pageTitleStyle}>Chats</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.headerFlexStyle, {alignItems: 'flex-end'}]}>
            {/* <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('WhatsappFooterScreen')
              }>
              <Text style={{color: TEXT_BLUE_COLOR, marginRight: 20}}>
                Next
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>

        <View style={{height: 3}} />
        <CustomSearchBar />

        <View style={{height: 5}} />
        <ScrollView style={{flexGrow: 1}}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('ChatHomePageWithMenuScreen')
            }>
            <NewChatComponent upperText={'Muhammad Afzaal'} hideOnlineStatus />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('ChatHomePageWithMenuScreen')
            }>
            <NewChatComponent upperText={'Muhammad Salman'} hideOnlineStatus />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('ChatHomePageWithMenuScreen')
            }>
            <NewChatComponent
              showOnline
              upperText={'Muhammad Afzaal'}
              hideOnlineStatus
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('ChatHomePageWithMenuScreen')
            }>
            <NewChatComponent
              showOnline
              upperText={'Muhammad Usman'}
              hideOnlineStatus
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('ChatHomePageWithMenuScreen')
            }>
            <NewChatComponent upperText={'Muhammad Afzaal'} hideOnlineStatus />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default NewChatScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  headerMainViewStyle: {
    height: 50,
    flexDirection: 'row',
  },
  headerFlexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pageTitleViewStyle: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pageTitleStyle: {
    color: BLACK_COLOR,
    paddingLeft: 20,
    fontSize: EXTRA_LARGE,
    fontWeight: 'bold',
  },

  viewStyle: {
    height: 40,
    flexDirection: 'row',
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
