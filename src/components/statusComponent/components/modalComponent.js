import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  Text,
} from 'react-native';
import Story from './Story';
import {VIEW_BG_COLOR, WHITE_COLOR} from '../../../themes/colors';
import FileMenuComponent from '../../../components/whatsappComponents/fileMenuComponent';

const ModalComponent = ({navigation}) => {
  const [msgText, setMsgText] = useState('');
  const [isFocus, setFocus] = useState(false);
  const [popupVisible, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popupVisible);
  };

  return (
    <React.Fragment>
      <View
        style={{
          height: 110,
          width: '98%',
          alignSelf: 'center',
          flexDirection: 'row',
          backgroundColor: 'transparent',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          bottom: 40,
        }}>
        <View style={{flex: 7, backgroundColor: 'transparent'}}>
          <View style={styles.viewStyle}>
            <View style={styles.viewStyle1}>
              <View
                style={{
                  height: '90%',
                  width: '95%',
                  borderRadius: 4,
                  backgroundColor: '#F7F7F7',
                  alignSelf: 'center',
                  marginTop: 5,
                  marginRight: 2,
                  flexDirection: 'row',
                  borderColor: VIEW_BG_COLOR,
                  borderLeftWidth: 3,
                }}>
                <View
                  style={{
                    flex: 4,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      color: VIEW_BG_COLOR,
                      fontSize: 14,
                      fontWeight: '700',
                      paddingLeft: 10,
                    }}>
                    Qasim . Status
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      paddingLeft: 10,
                      color: '#7E7E7E',
                    }}>
                    #Caption
                  </Text>
                </View>

                <View style={styles.flexStyle}>
                  <Image
                    source={require('../../../Images/personImage.jpg')}
                    style={{height: 40, width: 40, borderRadius: 5}}
                  />
                </View>
              </View>
            </View>
            <View style={styles.viewStyle2}>
              <View style={styles.flexStyle}>
                <TouchableOpacity>
                  <Image
                    resizeMode="stretch"
                    source={require('../../../Icons/faceIcon.png')}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flex: 6}}>
                <TextInput
                  placeholder={'Type message'}
                  autoFocus={true}
                  onChangeText={text => {
                    if (text === '') {
                      setMsgText(text);
                      setFocus(false);
                    } else if (text != '') {
                      setMsgText(text);
                      setFocus(true);
                    }
                  }}
                />
              </View>
              <View style={styles.flexStyle}>
                <TouchableOpacity onPress={togglePopup}>
                  <Image
                    resizeMode="stretch"
                    source={require('../../../Icons/selectFileIcon.png')}
                    style={{height: 25, width: 20}}
                  />
                </TouchableOpacity>
              </View>
              {isFocus ? (
                false
              ) : (
                <View style={styles.flexStyle}>
                  <TouchableOpacity
                  // onPress={() => navigation.navigate('ChatCameraScreen')}
                  >
                    <Image
                      resizeMode="stretch"
                      source={require('../../../Icons/selectImageIcon.png')}
                      style={{height: 20, width: 20}}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginRight: 5,
          }}>
          <TouchableOpacity style={styles.microphoneButtonStyle}>
            {isFocus ? (
              <Image
                resizeMode="stretch"
                source={require('../../../Icons/shareIcon.png')}
                style={{height: 15, width: 15, marginRight: 1}}
              />
            ) : (
              <Image
                resizeMode="stretch"
                source={require('../../../Icons/microphoneIcon.png')}
                style={{height: 17, width: 10}}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {popupVisible ? (
        <View style={{height: 300, justifyContent: 'center'}}>
          <FileMenuComponent
            topLeftRadius={1}
            topRightRadius={1}
            width="90%"
            height={260}
          />
        </View>
      ) : (
        false
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 110,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  microphoneButtonStyle: {
    height: 45,
    width: 45,
    backgroundColor: VIEW_BG_COLOR,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewStyle1: {
    flex: 1.3,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 1,
  },
  viewStyle2: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    elevation: 1,
  },
  flexStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default ModalComponent;
