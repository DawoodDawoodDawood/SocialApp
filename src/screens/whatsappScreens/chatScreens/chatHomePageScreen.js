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
  Animated,
} from 'react-native';

import {
  TEXT_BLUE_COLOR,
  BLACK_COLOR,
  WHITE_COLOR,
  TEXT_NOTE_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import {EXTRA_LARGE, SMALL, MEDIUM} from '../../../themes/fonts';
import HomePageChatComponent from '../../../components/whatsappComponents/homePageChatComponent';
import Icons from 'react-native-vector-icons/FontAwesome';
import {SwipeListView} from 'react-native-swipe-list-view';
import ChatMoreOptionsModal from '../../../components/whatsappComponents/chatMoreOptionModal';
import HomePageBroadcastComponent from '../../../components/whatsappComponents/homePageBroadcastComponent';
import {fromLeft} from 'react-navigation-transitions';
import CustomSearchBar from '../../../components/whatsappComponents/customSearchBar';
class ChatHomePageScreen extends Component {
  state = {
    listViewData: [
      {id: 1, type: 'INDIVISUAL'},
      {id: 2, type: 'GROUP'},
      {id: 3, type: 'BROADCAST'},
      {id: 1, type: 'INDIVISUAL'},
      {id: 2, type: 'GROUP'},
      {id: 3, type: 'BROADCAST'},
      {id: 1, type: 'INDIVISUAL'},
      {id: 2, type: 'GROUP'},
      {id: 3, type: 'BROADCAST'},
      {id: 1, type: 'INDIVISUAL'},
      {id: 2, type: 'GROUP'},
      {id: 3, type: 'BROADCAST'},
      {id: 1, type: 'INDIVISUAL'},
      {id: 2, type: 'GROUP'},
      {id: 3, type: 'BROADCAST'},
    ],
    search: '',
    modalVisible: false,
    scrollY: new Animated.Value(0),
  };

  updateSearch = (search) => {
    this.setState({search});
  };
  toggleModal = () => {
    this.setState({modalVisible: !this.state.modalVisible});
  };

  render() {
    const HEADER_MAX_HEIGHT = 20;
    const startHeaderHeight = 0;
    const endHeaderHeight = -20;
    const differClampScrollY = Animated.diffClamp(
      this.state.scrollY,
      0,
      HEADER_MAX_HEIGHT,
    );
    const headerHeight = differClampScrollY.interpolate({
      inputRange: [0, 20],
      outputRange: [startHeaderHeight, endHeaderHeight],
      extrapolate: 'clamp',
    });

    const searchBarOpacity = headerHeight.interpolate({
      inputRange: [endHeaderHeight, startHeaderHeight],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    const searchBarOpacity1 = headerHeight.interpolate({
      inputRange: [endHeaderHeight, startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return (
      <View
        style={[
          styles.wrapperStyle,
          {
            backgroundColor: this.state.modalVisible ? '#E7EAED' : 'white',
          },
        ]}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />

        <Animated.View
          style={[
            styles.headerMainViewStyle,
            {
              height: 20,
              justifyContent: 'center',
              flexDirection: 'row',

              transform: [
                {
                  translateY: headerHeight,
                },
              ],
            },
          ]}>
          <View style={styles.headerFlexStyle}>
            <TouchableOpacity>
              <Text style={{color: TEXT_BLUE_COLOR, paddingLeft: 20}}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.headerFlexStyle, {alignItems: 'flex-end'}]}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('NewMessagesScreen')
              }>
              <Image
                source={require('../../../Icons/editIcon.png')}
                style={{height: 20, width: 22, marginRight: 20}}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            styles.headerMainViewStyle,
            {
              top: 20,
              height: 30,
              transform: [
                {
                  translateY: headerHeight,
                },
              ],
            },
          ]}>
          <View style={{flex: 1}}>
            <Text style={styles.pageTitleStyle}>Chats</Text>
          </View>

          <Animated.View
            style={{
              opacity: searchBarOpacity,
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingRight: 20,
            }}>
            <Image
              resizeMode={'stretch'}
              style={{width: 20, height: 20}}
              source={require('../../../Icons/searchIcon.png')}
            />
          </Animated.View>
        </Animated.View>
        <View style={{height: 10}} />
        <Animated.View
          style={[
            styles.headerMainViewStyle,
            {
              top: 50,
              height: 55,
              opacity: searchBarOpacity1,
              transform: [
                {
                  translateY: headerHeight,
                },
              ],
            },
          ]}>
          <CustomSearchBar />
        </Animated.View>
        <Animated.View
          style={[
            styles.headerMainViewStyle,
            {
              top: 95,
              height: 30,
              opacity: searchBarOpacity1,
              flexDirection: 'row',
              transform: [
                {
                  translateY: headerHeight,
                },
              ],
            },
          ]}>
          <View style={[styles.flexStyle, {paddingLeft: 30}]}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('NewBroadcastScreen')
              }>
              <Text style={{color: TEXT_BLUE_COLOR}}>Broadcast</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.headerFlexStyle,
              {alignItems: 'flex-end', paddingRight: 30},
            ]}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('NewGroupFirstScreen')
              }>
              <Text style={{color: TEXT_BLUE_COLOR}}>New Group</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* <View style={{height: 110}} /> */}

        <SwipeListView
          bounces={true}
          scrollEventThrottle={16}
          style={{marginTop: 30}}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: this.state.scrollY}}},
          ])}
          data={this.state.listViewData}
          renderItem={(data, rowMap) => (
            <View style={styles.rowFront}>
              {data.item.type === 'INDIVISUAL' ? (
                <HomePageChatComponent
                  nameText={'Muhammad Salman'}
                  msgText={'How are you??'}
                  chatMuted
                  timeOfMsgReceived={'11:30 AM'}
                  numberofMsgs={'333'}
                  onPressMsgBar={() =>
                    this.props.navigation.navigate('ChatHomePageWithMenuScreen')
                  }
                  bgColor={this.state.modalVisible ? '#E7EAED' : 'white'}
                />
              ) : (
                false
              )}
              {data.item.type === 'GROUP' ? (
                <HomePageChatComponent
                  nameText={'Bitcoin Technologies'}
                  msgText={"Ata: Hello I'm here!!"}
                  onPressMsgBar={() =>
                    this.props.navigation.navigate('GroupChatScreen')
                  }
                  bgColor={this.state.modalVisible ? '#E7EAED' : 'white'}
                />
              ) : (
                false
              )}
              {data.item.type === 'BROADCAST' ? (
                <HomePageBroadcastComponent
                  onPressMsgBar={() =>
                    // this.props.navigation.navigate('BroadCastChatScreen')
                    this.props.navigation.navigate('BroadCastChatScreen')
                  }
                  bgColor={this.state.modalVisible ? '#E7EAED' : 'white'}
                />
              ) : (
                false
              )}
            </View>
          )}
          renderHiddenItem={(data, rowMap) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <View style={{flex: 1.75}} />
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                }}>
                <TouchableOpacity
                  style={styles.moreStyle}
                  onPress={() => this.toggleModal()}>
                  <Image
                    source={require('../../../Icons/moreIcon.png')}
                    style={{height: 30, width: 30}}
                  />
                  <Text style={{color: WHITE_COLOR}}>More</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.moreStyle, {backgroundColor: '#626EA9'}]}>
                  <Image
                    source={require('../../../Icons/archiveChatWhiteIcon.png')}
                    style={{height: 23, width: 20}}
                  />
                  <View style={{height: 5}} />
                  <Text style={{color: WHITE_COLOR}}>Archive</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          rightOpenValue={-150}></SwipeListView>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => this.toggleModal()}>
          <ChatMoreOptionsModal toggleModal={this.toggleModal} />
        </Modal>
      </View>
    );
  }
}

export default ChatHomePageScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
  },
  headerMainViewStyle: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 999,
  },
  headerFlexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pageTitleViewStyle: {
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'absolute',
    top: 40,
    right: 0,
    left: 0,
    zIndex: 9999,
  },
  pageTitleStyle: {
    color: BLACK_COLOR,
    paddingLeft: 20,
    fontSize: EXTRA_LARGE,
    fontWeight: 'bold',
  },

  viewStyle: {
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'absolute',
    top: 130,
    right: 0,
    left: 0,
    zIndex: 9999999,
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
