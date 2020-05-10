import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar} from 'react-native';
import {
  TEXT_NOTE_COLOR,
  WHITE_COLOR,
  LIGHT_GREY_BG_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import {MEDIUM, LARGE} from '../../../themes/fonts';
import HeaderComponent from '../../../components/whatsappComponents/headerComponent';
import ClickableComponent from '../../../components/whatsappComponents/clickableComponent';
import SocialFun from '../../../components/whatsappComponents/statusComponent';
import StatusComponent from '../../../components/statusComponent/screens/Stories';
class StatusMainScreen extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <View style={styles.headerViewStyle}>
          <Text style={{fontSize: LARGE, fontWeight: 'bold'}}>Status</Text>
        </View>
        <View style={{height: 20, backgroundColor: LIGHT_GREY_BG_COLOR}} />
        <View
          style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
          <ClickableComponent
            onPress={() => this.props.navigation.navigate('AddStatusScreen')}
            text={'My Status'}
            subText
            subTxt={'Add to my Status'}
            image={require('../../../Icons/addStatusIcon.png')}
            iconViewBgColor={LIGHT_GREY_BG_COLOR}
            bgHeight={40}
            bgWidth={40}
            borderRadius={50}
            iconHeight={30}
            iconWidth={30}
          />
        </View>
        <View style={{height: 5}} />
        <View style={styles.allContactsViewStyle}>
          <Text style={styles.allContactsTextStyle}>Recent Updates</Text>
        </View>

        <ScrollView style={{flexGrow: 1}}>
          <SocialFun
            onPressPersonDetail={() =>
              this.props.navigation.navigate('TiktokFooterTabScreen', {
                transition: 'collapseTransition',
              })
            }
            showOnline
            stausImage={require('../../../Images/statusImage1.png')}
            nameText={'Social Fun'}
            lowerText={'Tap to make your own'}
          />
          <StatusComponent nameText={'Qasim'} lowerText={'21 min ago'} />
        </ScrollView>
      </View>
    );
  }
}

export default StatusMainScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  headerViewStyle: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
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
    backgroundColor: LIGHT_GREY_BG_COLOR,
  },
  allContactsTextStyle: {
    color: TEXT_NOTE_COLOR,
    paddingLeft: 18,
    fontSize: MEDIUM,
  },
});
