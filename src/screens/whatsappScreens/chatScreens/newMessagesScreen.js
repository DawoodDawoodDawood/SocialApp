import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar} from 'react-native';
import {
  TEXT_NOTE_COLOR,
  WHITE_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import {MEDIUM} from '../../../themes/fonts';
import HeaderComponent from '../../../components/whatsappComponents/headerComponent';
import ClickableComponent from '../../../components/whatsappComponents/clickableComponent';
import NewChatComponent from '../../../components/whatsappComponents/newChatComponent';
import CustomSearchBar from '../../../components/whatsappComponents/customSearchBar';
class NewMessagesScreen extends Component {
  state = {searchBar: false};

  toggleSearchBar() {
    this.setState({searchBar: !this.state.searchBar});
  }
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <HeaderComponent
          title={'New Message'}
          navigation={this.props.navigation}
          onPressSearch={() => this.toggleSearchBar()}
        />
        <View style={{height: 5}} />
        {this.state.searchBar ? <CustomSearchBar /> : false}
        <View style={{height: 5}} />
        <View>
          <ClickableComponent
            text={'New Groups'}
            image={require('../../../Icons/groupIcon.png')}
            iconHeight={16}
            iconWidth={25}
            onPress={() =>
              this.props.navigation.navigate('NewGroupFirstScreen')
            }
          />
          <ClickableComponent
            text={'New Mesaage'}
            image={require('../../../Icons/messageIcon.png')}
            iconHeight={20}
            iconWidth={20}
            onPress={() => this.props.navigation.navigate('NewChatScreen')}
          />
          <ClickableComponent
            text={'New Broadcast'}
            image={require('../../../Icons/broadcastIcon.png')}
            iconHeight={16}
            iconWidth={20}
            onPress={() => this.props.navigation.navigate('NewBroadcastScreen')}
          />
          <ClickableComponent
            text={'New Contacts'}
            image={require('../../../Icons/contactIcon.png')}
            iconHeight={20}
            iconWidth={20}
            onPress={() => this.props.navigation.navigate('GoToContactScreen')}
          />
        </View>
        <View style={styles.allContactsViewStyle}>
          <Text style={styles.allContactsTextStyle}>All Contacts</Text>
        </View>

        <ScrollView style={{flexGrow: 1}}>
          <NewChatComponent upperText={'Farhan'} showOnline hideOnlineStatus />
          <NewChatComponent upperText={'Muhammad Salman'} hideOnlineStatus />
          <NewChatComponent
            upperText={'Muhammad Dawwod'}
            showOnline
            hideOnlineStatus
          />
          <NewChatComponent
            showOnline
            upperText={'Muhammad Usman'}
            hideOnlineStatus
          />
          <NewChatComponent upperText={'Muhammad Sohaib'} hideOnlineStatus />
        </ScrollView>
      </View>
    );
  }
}

export default NewMessagesScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  clickableViewStyle: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  flexStyle: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  allContactsViewStyle: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F6F6F6',
  },
  allContactsTextStyle: {
    color: TEXT_NOTE_COLOR,
    paddingLeft: 18,
    fontSize: MEDIUM,
  },
});
