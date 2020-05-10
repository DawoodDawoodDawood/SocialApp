import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  TEXT_NOTE_COLOR,
  LIGHT_GREY_BG_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import {MEDIUM} from '../../../themes/fonts';
import HeaderComponent from '../../../components/whatsappComponents/headerComponent';
import ImagePicker from 'react-native-image-crop-picker';
class EditProfileScreen extends Component {
  state = {image: null};
  SelectImage = () => {
    this.setState({showImage: false});
    ImagePicker.openPicker({
      width: 200,
      height: 100,
    }).then(image => {
      console.log(image);
      let imgSource = {
        uri: image.path,
        type: image.mime,
        name: image.path.replace(/^.*[\\\/]/, ''),
      };
      this.setState({image: imgSource, showImage: true});
    });
  };
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <HeaderComponent
          title={'Edit Profile'}
          showNextButton
          navigation={this.props.navigation}
          onPressNext={() => this.props.navigation.goBack()}
        />
        <View style={{height: 15, backgroundColor: LIGHT_GREY_BG_COLOR}} />
        <View style={styles.viewStyle}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <ImageBackground
              source={
                this.state.image
                  ? this.state.image
                  : require('../../../Images/personImage.jpg')
              }
              style={styles.BG_ImageStyles}>
              <TouchableOpacity onPress={() => this.SelectImage()}>
                <Image
                  source={require('../../../Icons/cameraIcon.png')}
                  style={{height: 25, width: 30}}
                />
              </TouchableOpacity>
            </ImageBackground>
          </View>

          <View style={styles.textFieldLineStyle}>
            <View style={[styles.flexStyle, {flex: 7}]}>
              <TextInput
                placeholder={'Edit Name'}
                style={styles.textInputStyle}
              />
            </View>
            <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
              <TouchableOpacity>
                <Image
                  source={require('../../../Icons/faceIcon.png')}
                  style={{height: 22, width: 22}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.allContactsViewStyle}>
          <Text style={styles.allContactsTextStyle}>Status</Text>
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddBioScreen')}
          style={{
            height: 40,
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <View style={styles.flexStyle}>
            <Text>At Work</Text>
          </View>
          <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
            <TouchableOpacity>
              <Image
                source={require('../../../Icons/arrowRightIconGrey.png')}
                style={{height: 12, width: 8}}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <View style={{flex: 1, backgroundColor: LIGHT_GREY_BG_COLOR}} />
      </View>
    );
  }
}

export default EditProfileScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewStyle: {
    height: 80,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  textInputStyle: {
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderBottomColor: 'white',
    borderWidth: 1,
  },
  BG_ImageStyles: {
    height: 70,
    width: 70,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  allContactsViewStyle: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F6F6F6',
  },
  allContactsTextStyle: {
    color: TEXT_NOTE_COLOR,
    paddingLeft: 18,
    fontSize: MEDIUM,
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  lineStyle: {
    height: 1.3,
    backgroundColor: 'black',
    width: '100%',
    marginBottom: '27%',
  },
  textFieldLineStyle: {
    height: 50,
    width: '70%',
    alignSelf: 'center',
    flexDirection: 'row',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderWidth: 1,
    marginBottom: 15,
  },
});
