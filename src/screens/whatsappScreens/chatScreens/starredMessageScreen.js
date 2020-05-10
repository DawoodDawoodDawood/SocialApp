import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {SMALL, EXTRA_SMALL} from '../../../themes/fonts';
import HeaderComponent from '../../../components/whatsappComponents/headerComponent';
import {TEXT_NOTE_COLOR, STATUS_BAR_COLOR} from '../../../themes/colors';
class StarredMsgScreen extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <HeaderComponent title={'Starred Messages'} />

        <View style={{height: 5}} />
        <View style={styles.mainViewStyle}>
          <View style={styles.flexStyle}>
            <Image
              source={require('../../../Images/personImage.jpg')}
              style={styles.imageStyle}
            />
          </View>
          <View style={[styles.flexStyle, {flex: 2.8}]}>
            <Text style={{fontSize: SMALL}}>You > Zohaib Aslam</Text>
          </View>
          <View style={{flex: 2, flexDirection: 'row'}}>
            <View style={[styles.flexStyle, {flex: 5, alignItems: 'flex-end'}]}>
              <Text style={{fontSize: SMALL}}>Yesterday</Text>
            </View>
            <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
              <TouchableOpacity>
                <Image
                  source={require('../../../Icons/arrowRightIcon.png')}
                  style={{height: 10, width: 7}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.bgImageStyle}>
          <ImageBackground
            resizeMode={'stretch'}
            source={require('../../../Images/chatRightBG.png')}
            style={{minHeight: 50, flexDirection: 'row'}}>
            <View style={[styles.flexStyle, {flex: 3}]}>
              <Text style={{color: 'black', paddingLeft: 10}}>
                Hello Ata G.
              </Text>
            </View>
            <View style={{flex: 1.5, flexDirection: 'row'}}>
              <View
                style={[
                  styles.flexStyle,
                  {flex: 2, justifyContent: 'flex-end'},
                ]}>
                <Text style={styles.timingTextStyle}>10:34 am</Text>
              </View>

              <View style={[styles.flexStyle, {justifyContent: 'flex-end'}]}>
                <Image
                  source={require('../../../Icons/seenIcon.png')}
                  style={{height: 10, width: 15, marginBottom: 7}}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

export default StarredMsgScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
  },
  mainViewStyle: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  imageStyle: {height: 45, width: 45, borderRadius: 50},
  bgImageStyle: {
    height: 50,
    width: '60%',
    alignSelf: 'center',
  },
  timingTextStyle: {
    color: TEXT_NOTE_COLOR,
    fontSize: EXTRA_SMALL,
    paddingBottom: 5,
  },
});
