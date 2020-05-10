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
  WHITE_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import {MEDIUM} from '../../../themes/fonts';
import ImagePicker from 'react-native-image-crop-picker';
import HeaderComponent from '../../../components/whatsappComponents/headerComponent';
import NewChatComponent from '../../../components/whatsappComponents/newChatComponent';
class NewBroadcastSecondScreen extends Component {
  state = {
    image: null,
    showChat1: true,
    showChat2: true,
    showChat3: true,
    showChat4: true,
    showChat5: true,
  };
  disableChat1() {
    this.setState({
      showChat1: false,
    });
  }
  disableChat2() {
    this.setState({
      showChat2: false,
    });
  }
  disableChat3() {
    this.setState({
      showChat3: false,
    });
  }
  disableChat4() {
    this.setState({
      showChat4: false,
    });
  }
  disableChat5() {
    this.setState({
      showChat5: false,
    });
  }
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
          title={'New Broadcasts'}
          showNextButton
          navigation={this.props.navigation}
          onPressNext={() =>
            this.props.navigation.navigate('WhatsappFooterScreen')
          }
        />
        <View style={{height: 5}} />
        <View style={styles.viewStyle}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <ImageBackground
              source={
                this.state.image
                  ? this.state.image
                  : require('../../../Images/personImage.jpg')
              }
              style={styles.BG_ImageStyles}>
              {this.state.image === null ? (
                <TouchableOpacity onPress={() => this.SelectImage()}>
                  <Image
                    source={require('../../../Icons/cameraIcon.png')}
                    style={{height: 25, width: 30}}
                  />
                </TouchableOpacity>
              ) : (
                false
              )}
            </ImageBackground>
          </View>
          <View style={styles.textFieldLineStyle}>
            <View
              style={[styles.flexStyle, {flex: 7, alignItems: 'flex-start'}]}>
              <TextInput
                placeholder={'Enter Broadcast Name'}
                style={styles.textInputStyle}
              />
            </View>
            <View style={styles.flexStyle}>
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
          <Text style={styles.allContactsTextStyle}>All Members</Text>
        </View>

        <ScrollView style={{flexGrow: 1}}>
          {this.state.showChat1 ? (
            <NewChatComponent
              showOnline
              showCrossIcon
              upperText={'Muhammad Ali'}
              hideOnlineStatus
              onPressCross={() => this.disableChat1()}
            />
          ) : (
            false
          )}
          {this.state.showChat2 ? (
            <NewChatComponent
              showCrossIcon
              upperText={'Muhammad Hamza'}
              hideOnlineStatus
              onPressCross={() => this.disableChat2()}
            />
          ) : (
            false
          )}
          {this.state.showChat3 ? (
            <NewChatComponent
              showOnline
              showCrossIcon
              upperText={'Muhammad Sohaib'}
              hideOnlineStatus
              onPressCross={() => this.disableChat3()}
            />
          ) : (
            false
          )}
          {this.state.showChat4 ? (
            <NewChatComponent
              showCrossIcon
              upperText={'Muhammad Qasim'}
              hideOnlineStatus
              onPressCross={() => this.disableChat4()}
            />
          ) : (
            false
          )}
          {this.state.showChat5 ? (
            <NewChatComponent
              showOnline
              showCrossIcon
              upperText={'Muhammad Ali'}
              hideOnlineStatus
              onPressCross={() => this.disableChat5()}
            />
          ) : (
            false
          )}
        </ScrollView>
      </View>
    );
  }
}

export default NewBroadcastSecondScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  viewStyle: {
    height: 100,
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
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
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
    alignItems: 'flex-end',
  },
  lineStyle: {
    height: 1.3,
    backgroundColor: 'black',
    width: '100%',
    marginBottom: '45.5%',
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
