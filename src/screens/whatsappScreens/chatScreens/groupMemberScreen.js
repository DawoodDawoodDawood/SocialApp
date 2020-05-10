import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  TEXT_NOTE_COLOR,
  WHITE_COLOR,
  TEXT_BLUE_COLOR,
  VIEW_BG_COLOR,
} from '../../../themes/colors';
import {MEDIUM} from '../../../themes/fonts';
import ClickableComponent from '../../../components/whatsappComponents/clickableComponent';
import NewChatComponent from '../../../components/whatsappComponents/newChatComponent';
class GroupMemberScreen extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <ScrollView style={{flexGrow: 1}}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('ChatHomePageWithMenuScreen')
            }>
            <NewChatComponent showOnline barWidth={'95%'} hideOnlineStatus />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('ChatHomePageWithMenuScreen')
            }>
            <NewChatComponent barWidth={'95%'} hideOnlineStatus />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('ChatHomePageWithMenuScreen')
            }>
            <NewChatComponent showOnline barWidth={'95%'} hideOnlineStatus />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('ChatHomePageWithMenuScreen')
            }>
            <NewChatComponent showOnline barWidth={'95%'} hideOnlineStatus />
          </TouchableOpacity>
          <TouchableOpacity>
            <NewChatComponent barWidth={'95%'} hideOnlineStatus />
          </TouchableOpacity>

          <View style={{height: 30, backgroundColor: '#EBEBEB'}} />
          <View style={styles.textViewStyle}>
            <Text style={styles.textStyle}>Groups in Common</Text>
          </View>
          <View
            style={{
              height: 3,
              backgroundColor: VIEW_BG_COLOR,
              width: 163,
              alignItems: 'flex-start',
              marginLeft: 20,
            }}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('GroupChatScreen')}>
            <NewChatComponent
              hideOnlineStatus
              barWidth={'95%'}
              upperText={'Bitcoin Technologies'}
              lowerText={'500 Members'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('GroupChatScreen')}>
            <NewChatComponent
              hideOnlineStatus
              barWidth={'95%'}
              upperText={'Bitcoin Technologies'}
              lowerText={'3 Members'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('GroupChatScreen')}>
            <NewChatComponent
              hideOnlineStatus
              barWidth={'95%'}
              upperText={'Bitcoin Technologies'}
              lowerText={'777 Members'}
            />
          </TouchableOpacity>

          <View style={{height: 13, backgroundColor: '#EBEBEB'}} />
          <ClickableComponent
            text={'Block Group'}
            textColor={'red'}
            image={require('../../../Icons/blockIcon.png')}
            iconHeight={20}
            iconWidth={20}
          />
          <View style={{height: 13, backgroundColor: '#EBEBEB'}} />
          <ClickableComponent
            text={'Report Contact'}
            textColor={'red'}
            image={require('../../../Icons/dislikeIcon.png')}
            iconHeight={20}
            iconWidth={20}
          />
          <View style={{height: 35, backgroundColor: '#EBEBEB'}} />
        </ScrollView>
      </View>
    );
  }
}

export default GroupMemberScreen;

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
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F6F6F6',
  },
  allContactsTextStyle: {
    color: TEXT_NOTE_COLOR,
    paddingLeft: 18,
    fontSize: MEDIUM,
  },
  textViewStyle: {
    height: 40,
    backgroundColor: WHITE_COLOR,
    justifyContent: 'center',
  },
  textStyle: {
    color: VIEW_BG_COLOR,
    fontWeight: 'bold',
    paddingLeft: 32,
  },
});
