import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, StatusBar} from 'react-native';
import {
  BLACK_COLOR,
  WHITE_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import {EXTRA_LARGE, MEDIUM} from '../../../themes/fonts';
import HomePageChatComponent from '../../../components/whatsappComponents/homePageChatComponent';
import HeaderComponent from '../../../components/whatsappComponents/headerComponent';
import CustomSearchBar from '../../../components/whatsappComponents/customSearchBar';
class ArchiveChatScreen extends Component {
  state = {searchBar: false};

  toggleSearchBar() {
    this.setState({searchBar: !this.state.searchBar});
  }
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <HeaderComponent
          title={'Archive Chat'}
          navigation={this.props.navigation}
          onPressSearch={() => this.toggleSearchBar()}
        />

        <View style={{height: 5}} />
        {this.state.searchBar ? <CustomSearchBar /> : false}
        <View style={{height: 5}} />
        <ScrollView style={{flexGrow: 1}}>
          <HomePageChatComponent
            nameText={'Muhammad Farhan'}
            msgText={'Hello I am there!!'}
            chatMuted
            timeOfMsgReceived={'11:30 AM'}
            numberofMsgs={'333'}
            showArchiveButton
          />
          <HomePageChatComponent
            showArchiveButton
            nameText={'Bitcoin Technologies'}
            msgText={'Ata: Hello I am there!!'}
          />
          <HomePageChatComponent
            showArchiveButton
            nameText={'Bitcoin Technologies'}
            msgText={'Shoaib: Hello I am there!!'}
          />
          <HomePageChatComponent
            nameText={'Muhammad Farhan'}
            msgText={'Hello I am there!!'}
            chatMuted
            timeOfMsgReceived={'11:59 AM'}
            numberofMsgs={'10'}
            showArchiveButton
          />
          <HomePageChatComponent
            nameText={'Muhammad Farhan'}
            msgText={'Hello I am there!!'}
            chatMuted
            timeOfMsgReceived={'9:36 AM'}
            numberofMsgs={'1000'}
            showArchiveButton
          />
        </ScrollView>
      </View>
    );
  }
}

export default ArchiveChatScreen;

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
  searchBarViewStyle: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarStyle: {
    width: '90%',
    height: 40,
    elevation: 0,
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
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
