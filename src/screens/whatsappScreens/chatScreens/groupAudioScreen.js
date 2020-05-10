import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {
  LIGHT_GREY_COLOR,
  TEXT_NOTE_COLOR,
  WHITE_COLOR,
} from '../../../themes/colors';
import GroupFilesComponent from '../../../components/whatsappComponents/groupFilesComponent';
import ClickableComponent from '../../../components/whatsappComponents/clickableComponent';
import {MEDIUM} from '../../../themes/fonts';
import GroupAudioComponent from '../../../components/whatsappComponents/groupAudioComponent';
class GroupAudioScreen extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <ScrollView>
          <View style={styles.textViewBGColor}>
            <Text style={styles.textStyle}>Yesterday</Text>
          </View>
          <GroupAudioComponent />
          <View style={styles.textViewBGColor}>
            <Text style={styles.textStyle}>Last Week</Text>
          </View>
          <GroupAudioComponent
            upperText={'Turn Up'}
            lowerText={'Gents and Jawns'}
            timeOfMsgReceived={'21/12/2019'}
            sizeOfAudio={'313 KB'}
          />
          <GroupAudioComponent
            upperText={'Us vs The World'}
            lowerText={'Giveon'}
            timeOfMsgReceived={'21/12/2019'}
            sizeOfAudio={'313 KB'}
          />

          <View style={styles.textViewBGColor}>
            <Text style={styles.textStyle}>December</Text>
          </View>
          <GroupAudioComponent
            upperText={'Alone'}
            lowerText={'Marshmellow'}
            timeOfMsgReceived={'2/12/2015'}
            sizeOfAudio={'101 KB'}
          />
          <GroupAudioComponent />

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

export default GroupAudioScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  textViewBGColor: {
    height: 30,
    justifyContent: 'center',
    backgroundColor: LIGHT_GREY_COLOR,
  },
  textStyle: {paddingLeft: 20, color: TEXT_NOTE_COLOR, fontSize: MEDIUM},
});
