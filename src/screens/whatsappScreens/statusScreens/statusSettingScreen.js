import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar} from 'react-native';
import {
  TEXT_NOTE_COLOR,
  WHITE_COLOR,
  LIGHT_GREY_BG_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import Share from 'react-native-share';
import {MEDIUM, LARGE} from '../../../themes/fonts';
import ClickableComponent from '../../../components/whatsappComponents/clickableComponent';
import StatusComponent from '../../../components/whatsappComponents/statusComponent';

const url = 'https://awesome.contents.com/';
const title = 'Awesome Contents';
const message = 'Please check this out.';
const icon = 'data:<data_type>/<file_extension>;base64,<base64_data>';
const options = Platform.select({
  ios: {
    activityItemSources: [
      {
        // For sharing url with custom title.
        placeholderItem: {type: 'url', content: url},
        item: {
          default: {type: 'url', content: url},
        },
        subject: {
          default: title,
        },
        linkMetadata: {originalUrl: url, url, title},
      },
      {
        // For sharing text.
        placeholderItem: {type: 'text', content: message},
        item: {
          default: {type: 'text', content: message},
          message: null, // Specify no text to share via Messages app.
        },
        linkMetadata: {
          // For showing app icon on share preview.
          title: message,
        },
      },
      {
        // For using custom icon instead of default text icon at share preview when sharing with message.
        placeholderItem: {
          type: 'url',
          content: icon,
        },
        item: {
          default: {
            type: 'text',
            content: `${message} ${url}`,
          },
        },
        linkMetadata: {
          title: message,
          icon: icon,
        },
      },
    ],
  },
  default: {
    title,
    subject: title,
    message: `${message} ${url}`,
  },
});

class StatusSettingScreen extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <View style={styles.headerViewStyle}>
          <Text style={{fontSize: LARGE, fontWeight: 'bold'}}>Settings</Text>
        </View>
        <View style={{height: 10, backgroundColor: '#f5f5f5'}} />
        <View>
          <StatusComponent
            stausImage={require('../../../Images/personImage.jpg')}
            nameText={'Qasim'}
            lowerText={'At Work'}
            showArrowRight
            onPressPersonDetail={() =>
              this.props.navigation.navigate('EditProfileScreen')
            }
          />
        </View>
        <View style={{height: 30, backgroundColor: '#f5f5f5'}} />
        <View>
          <ClickableComponent
            text={'Archive Chat'}
            image={require('../../../Icons/archiveChatWhiteIcon.png')}
            iconHeight={17}
            iconWidth={15}
            showArrowRight
            iconViewBgColor={'#FFC527'}
            onPress={() => this.props.navigation.navigate('ArchiveChatScreen')}
          />
          <View style={{height: 5}} />
          <ClickableComponent
            onPress={() => Share.open(options)}
            text={'Tell a Friend'}
            image={require('../../../Icons/heartIcon.png')}
            iconHeight={15}
            iconWidth={17}
            showArrowRight
            iconViewBgColor={'#FF2C55'}
          />

          <View style={{height: 30, backgroundColor: '#f5f5f5'}} />
          <ClickableComponent
            text={'Help'}
            image={require('../../../Icons/infoIcon.png')}
            iconHeight={15}
            iconWidth={3}
            showArrowRight
            iconViewBgColor={'#4BA0FF'}
          />
        </View>
        <View style={{flex: 1, backgroundColor: LIGHT_GREY_BG_COLOR}} />
      </View>
    );
  }
}

export default StatusSettingScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  headerViewStyle: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
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
});
