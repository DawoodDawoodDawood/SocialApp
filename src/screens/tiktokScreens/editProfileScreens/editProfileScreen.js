import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Clipboard,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {
  WHITE_COLOR,
  LIGHT_GREY_BG_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import EditProfileHeaderComponent from '../../../components/tiktokComponents/editProfileHeaderComponent';
import {SMALL} from '../../../themes/fonts';
import EditBarComponent from '../../../components/tiktokComponents/editBarComponent';
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
        <EditProfileHeaderComponent
          navigation={this.props.navigation}
          showBackIcon
          headerTitle={'Edit Profile'}
          hideSaveButton
        />

        <View style={{height: 190, flexDirection: 'row'}}>
          <View style={styles.flexStyle}>
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
            <View style={{height: 13}} />
            <Text style={{fontSize: SMALL}}>Change photo</Text>
          </View>
          {/* <View style={styles.flexStyle}>
            <TouchableOpacity style={styles.videoViewStyle}>
              <Image
                source={require('../../../Icons/videoIcon-o.png')}
                style={{height: 18, width: 28}}
              />
            </TouchableOpacity>
            <View style={{height: 13}} />
            <Text style={{fontSize: SMALL}}>Change video</Text>
          </View> */}
        </View>

        <EditBarComponent
          nameText={'Name'}
          name={'qasim'}
          onPressEditBar={() =>
            this.props.navigation.navigate('EditNameScreen')
          }
        />
        <EditBarComponent
          nameText={'Username'}
          name={'qasim_official'}
          onPressEditBar={() =>
            this.props.navigation.navigate('EditUsernameScreen')
          }
        />
        <EditBarComponent
          nameText={'Profile Link'}
          name={'socialapp.com/@qasim_official'}
          showCopyIcon
          onPressEditBar={() =>
            Clipboard.setString('socialapp.com/@qasim_official')
          }
        />
        <EditBarComponent
          nameText={'Bio'}
          name={'Add to you profile'}
          onPressEditBar={() => this.props.navigation.navigate('EditBioScreen')}
        />
      </View>
    );
  }
}

export default EditProfileScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  flexStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  BG_ImageStyles: {
    height: 90,
    width: 90,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoViewStyle: {
    height: 90,
    width: 90,
    borderRadius: 100,
    backgroundColor: LIGHT_GREY_BG_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
