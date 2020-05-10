import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {
  LIGHT_GREY_COLOR,
  TEXT_NOTE_COLOR,
  WHITE_COLOR,
} from '../../../themes/colors';
import ClickableComponent from '../../../components/whatsappComponents/clickableComponent';
import MediaImagesComponent from '../../../components/whatsappComponents/mediaImagesComponent';
class GroupMediaScreen extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <ScrollView>
          <View
            style={{
              height: 40,
              justifyContent: 'center',
            }}>
            <Text style={{paddingLeft: 20, color: TEXT_NOTE_COLOR}}>
              Recent
            </Text>
          </View>
          <MediaImagesComponent
            image1={require('../../../Images/videoImage1.png')}
            image2={require('../../../Images/videoImage2.png')}
          />
          <View
            style={{
              height: 40,
              justifyContent: 'center',
            }}>
            <Text style={{paddingLeft: 20, color: TEXT_NOTE_COLOR}}>
              Last Week
            </Text>
          </View>
          <MediaImagesComponent
            image1={require('../../../Images/emptyImage.png')}
            image2={require('../../../Images/emptyImage.png')}
            image3={require('../../../Images/emptyImage.png')}
            image4={require('../../../Images/emptyImage.png')}
          />
          <MediaImagesComponent
            image1={require('../../../Images/emptyImage.png')}
            image2={require('../../../Images/emptyImage.png')}
            image3={require('../../../Images/emptyImage.png')}
            image4={require('../../../Images/emptyImage.png')}
          />
          <MediaImagesComponent
            image1={require('../../../Images/emptyImage.png')}
            image2={require('../../../Images/emptyImage.png')}
            image3={require('../../../Images/emptyImage.png')}
            image4={require('../../../Images/emptyImage.png')}
          />
          <MediaImagesComponent
            image1={require('../../../Images/emptyImage.png')}
            image2={require('../../../Images/emptyImage.png')}
            image3={require('../../../Images/emptyImage.png')}
            image4={require('../../../Images/emptyImage.png')}
          />
          <View
            style={{
              height: 40,
              justifyContent: 'center',
            }}>
            <Text style={{paddingLeft: 20, color: TEXT_NOTE_COLOR}}>
              Last Month
            </Text>
          </View>

          <MediaImagesComponent
            image1={require('../../../Images/emptyImage.png')}
            image2={require('../../../Images/emptyImage.png')}
            image3={require('../../../Images/emptyImage.png')}
            image4={require('../../../Images/emptyImage.png')}
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

export default GroupMediaScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
});
