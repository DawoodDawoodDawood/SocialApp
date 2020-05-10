import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  WHITE_COLOR,
  TEXT_NOTE_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import MessagesHeaderComponent from '../../../components/tiktokComponents/messagesHeaderComponnet';
class MsgSecondScreen extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <MessagesHeaderComponent
          onPressBack={() => this.props.navigation.goBack()}
          showBackIcon
          headerTitle={'Muhammad Qasim'}
          showMoreIcon
          onPressMoreIcon={() =>
            this.props.navigation.navigate('MessageDetailScreen')
          }
        />
        <View style={styles.dateViewStyle}>
          <Text style={{color: TEXT_NOTE_COLOR}}>01-06</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          <View style={{height: 80, flexDirection: 'row'}}>
            <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
              <Image
                source={require('../../../Images/person.png')}
                style={[styles.imageStyle, {marginLeft: 15}]}
              />
            </View>
            <View
              style={[styles.flexStyle, {flex: 3.4, alignItems: 'flex-start'}]}>
              <View style={styles.msgViewStyle}>
                <Text style={{padding: 10}}>
                  Hello I am Ata from Faisalabad
                </Text>
              </View>
            </View>
          </View>

          {/* Right Side */}

          <View style={{height: 80, flexDirection: 'row'}}>
            <View
              style={[styles.flexStyle, {flex: 3.4, alignItems: 'flex-end'}]}>
              <View
                style={[
                  styles.msgViewStyle,
                  {backgroundColor: '#F8F8F8', borderColor: '#F8F8F8'},
                ]}>
                <Text style={{padding: 10}}>Okay Fine</Text>
              </View>
            </View>
            <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
              <Image
                source={require('../../../Images/person.png')}
                style={styles.imageStyle}
              />
            </View>
          </View>
        </View>

        <View style={{height: 1, backgroundColor: '#FBFBFB'}} />
        <View style={styles.bottomMainViewStyle}>
          <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
            <Image
              resizeMode="stretch"
              source={require('../../../Icons/blackFaceIcon.png')}
              style={{height: 22, width: 22, marginLeft: 12}}
            />
          </View>

          <View style={{flex: 5, justifyContent: 'center', marginLeft: 5}}>
            <TextInput placeholder={'Send a message...'} />
          </View>

          <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
            <TouchableOpacity style={styles.sendButtonStyle}>
              <Image
                resizeMode="stretch"
                source={require('../../../Icons/shareIcon.png')}
                style={{height: 18, width: 18, marginRight: 2}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default MsgSecondScreen;

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
  sendButtonStyle: {
    height: 40,
    width: 40,
    backgroundColor: '#FC3C6A',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
});
