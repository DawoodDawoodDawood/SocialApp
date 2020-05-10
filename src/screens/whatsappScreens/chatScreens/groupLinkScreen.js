import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {
  LIGHT_GREY_COLOR,
  TEXT_NOTE_COLOR,
  WHITE_COLOR,
  TEXT_BLUE_COLOR,
} from '../../../themes/colors';
import GroupFilesComponent from '../../../components/whatsappComponents/groupFilesComponent';
import ClickableComponent from '../../../components/whatsappComponents/clickableComponent';
import {MEDIUM} from '../../../themes/fonts';
class GroupLinkScreen extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <ScrollView>
          <View style={styles.textViewBGColor}>
            <Text style={styles.textStyle}>Yesterday</Text>
          </View>
          <GroupFilesComponent
            imageSource={require('../../../Icons/S.png')}
            height={15}
            width={10}
            lowerText={'www.website.com'}
            subTextColor={TEXT_BLUE_COLOR}
          />
          <View style={styles.textViewBGColor}>
            <Text style={styles.textStyle}>Last Week</Text>
          </View>
          <GroupFilesComponent
            imageSource={require('../../../Icons/S.png')}
            height={15}
            width={10}
            lowerText={'www.website.com'}
            subTextColor={TEXT_BLUE_COLOR}
          />
          <GroupFilesComponent
            imageSource={require('../../../Icons/S.png')}
            height={15}
            width={10}
            lowerText={'www.website.com'}
            subTextColor={TEXT_BLUE_COLOR}
          />
          <GroupFilesComponent
            imageSource={require('../../../Icons/S.png')}
            height={15}
            width={10}
            lowerText={'www.website.com'}
            subTextColor={TEXT_BLUE_COLOR}
          />
          <GroupFilesComponent
            imageSource={require('../../../Icons/S.png')}
            height={15}
            width={10}
            lowerText={'www.website.com'}
            subTextColor={TEXT_BLUE_COLOR}
          />

          <View style={styles.textViewBGColor}>
            <Text style={styles.textStyle}>December</Text>
          </View>
          <GroupFilesComponent
            imageSource={require('../../../Icons/S.png')}
            height={15}
            width={10}
            lowerText={'www.website.com'}
            subTextColor={TEXT_BLUE_COLOR}
          />
          <GroupFilesComponent
            imageSource={require('../../../Icons/S.png')}
            height={15}
            width={10}
            lowerText={'www.website.com'}
            subTextColor={TEXT_BLUE_COLOR}
          />
          <GroupFilesComponent
            imageSource={require('../../../Icons/S.png')}
            height={15}
            width={10}
            lowerText={'www.website.com'}
            subTextColor={TEXT_BLUE_COLOR}
          />
          <GroupFilesComponent
            imageSource={require('../../../Icons/S.png')}
            height={15}
            width={10}
            lowerText={'www.website.com'}
            subTextColor={TEXT_BLUE_COLOR}
          />
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

export default GroupLinkScreen;

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
