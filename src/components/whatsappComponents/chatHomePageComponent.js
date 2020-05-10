import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Modal,
} from 'react-native';
import {
  TEXT_BLUE_COLOR,
  BLACK_COLOR,
  WHITE_COLOR,
  TEXT_NOTE_COLOR,
  STATUS_BAR_COLOR,
} from '../../themes/colors';
import {EXTRA_LARGE, SMALL, MEDIUM} from '../../themes/fonts';
// import {SearchBar} from 'react-native-elements';
import HomePageChatComponent from '../../components/whatsappComponents/homePageChatComponent';
import {SwipeListView} from 'react-native-swipe-list-view';
import ChatMoreOptionsModal from '../../components/whatsappComponents/chatMoreOptionModal';
class ChatHomePageComponent extends Component {
  state = {
    listViewData: [
      {id: 1, type: true},
      {id: 2, type: false},
      {id: 3, type: false},
      {id: 4, type: true},
      {id: 5, type: true},
      {id: 6, type: true},
      {id: 7, type: false},
      {id: 8, type: true},
      {id: 9, type: false},
    ],

    modalVisible: false,
  };

  toggleModal = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  };
  render() {
    return (
      <React.Fragment>
        {this.props.data.type ? (
          <HomePageChatComponent
            nameText={'Salman'}
            msgText={'How are you??'}
            showOnlineStatus
            chatMuted
            timeOfMsgReceived={'11:30 AM'}
            numberofMsgs={'333'}
            onPressMsgBar={() =>
              this.props.navigation.navigate('ChatHomePageWithMenuScreen')
            }
            bgColor={this.state.modalVisible ? '#E7EAED' : 'white'}
          />
        ) : (
          <HomePageChatComponent
            nameText={'Bitcoin Technologies'}
            msgText={"Ata: Hello I'm here!!"}
            onPressMsgBar={() =>
              this.props.navigation.navigate('GroupChatScreen')
            }
            bgColor={this.state.modalVisible ? '#E7EAED' : 'white'}
          />
        )}
      </React.Fragment>
    );
  }
}

export default ChatHomePageComponent;

const styles = StyleSheet.create({
  viewStyle: {
    height: 40,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rowFront: {width: '100%', backgroundColor: WHITE_COLOR},
  rowBack: {height: 70, width: '20%', backgroundColor: 'green'},
  moreStyle: {
    backgroundColor: '#E0D1D8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
