import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  TEXT_NOTE_COLOR,
  WHITE_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import HeaderComponent from '../../../components/whatsappComponents/headerComponent';
import NewChatComponent from '../../../components/whatsappComponents/newChatComponent';
class NewGroupCallScreen extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <HeaderComponent
          title={'Select Contacts'}
          showTitleDescription
          TitleDescriptionText={'1 of 3 Selected'}
          showNextButton
          navigation={this.props.navigation}
          onPressNext={() =>
            this.props.navigation.navigate('WhatsappFooterScreen')
          }
        />
        <View style={{height: 5}} />
        <View style={styles.viewStyle}>
          <View style={styles.flexStyle}>
            <Image
              source={require('../../../Images/personImage.jpg')}
              style={{height: 35, width: 35, borderRadius: 100}}
            />
          </View>
          <View style={[styles.flexStyle, {flex: 4, alignItems: 'flex-start'}]}>
            <View style={styles.nameTextViewStyle}>
              <Text style={{}}>Selected Person Name</Text>
            </View>
          </View>
          <View style={styles.flexStyle}>
            <TouchableOpacity>
              <Image
                source={require('../../../Icons/audioCallicon.png')}
                style={{height: 20, width: 20}}
              />
            </TouchableOpacity>
          </View>
          {/* <View style={styles.flexStyle}>
            <TouchableOpacity>
              <Image
                source={require('../../../Icons/videoCallicon.png')}
                style={{height: 14, width: 20}}
              />
            </TouchableOpacity>
          </View> */}
        </View>
        <View style={{height: 5}} />
        <View
          style={{height: 1, backgroundColor: TEXT_NOTE_COLOR, width: '100%'}}
        />
        <ScrollView style={{flexGrow: 1}}>
          <NewChatComponent showOnline upperText={'Muhammad Farhan'} />
          <NewChatComponent upperText={'Muhammad Ali'} />
          <NewChatComponent showOnline upperText={'Muhammad Hassan'} />
          <NewChatComponent showOnline upperText={'Muhammad Farhan'} />
          <NewChatComponent upperText={'Muhammad Ali'} />
          <NewChatComponent showOnline upperText={'Muhammad Hassan'} />
        </ScrollView>
      </View>
    );
  }
}

export default NewGroupCallScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },

  viewStyle: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  nameTextViewStyle: {
    height: 30,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
