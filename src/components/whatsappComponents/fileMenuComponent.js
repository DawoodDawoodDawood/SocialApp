import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {EXTRA_LARGE, EXTRA_SMALL, SMALL} from '../../themes/fonts';
import {WHITE_COLOR, VIEW_BG_COLOR} from '../../themes/colors';
class FileMenuComponent extends Component {
  render() {
    return (
      <View
        style={[
          styles.wrapperStyle,
          {
            borderTopLeftRadius: this.props.topLeftRadius
              ? this.props.topLeftRadius
              : 30,
            borderTopRightRadius: this.props.topRightRadius
              ? this.props.topRightRadius
              : 30,
            width: this.props.width ? this.props.width : '100%',
            height: this.props.height ? this.props.height : 200,
          },
        ]}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 0.5}} />
          <TouchableOpacity style={styles.flexStyle}>
            <View style={styles.iconBgViewStyle}>
              <Image
                source={require('../../Icons/documentIcon.png')}
                style={{height: 25, width: 21}}
              />
            </View>
            <View style={{height: 5}} />
            <Text style={{fontSize: SMALL}}>Document</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexStyle}>
            <View style={styles.iconBgViewStyle}>
              <Image
                source={require('../../Icons/cameraIcon.png')}
                style={{height: 23, width: 30}}
              />
            </View>
            <View style={{height: 5}} />
            <Text style={{fontSize: SMALL}}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.flexStyle}>
            <View style={styles.iconBgViewStyle}>
              <Image
                source={require('../../Icons/galleryIcon.png')}
                style={{height: 25, width: 21}}
              />
            </View>
            <View style={{height: 5}} />
            <Text style={{fontSize: SMALL}}>Gallery</Text>
          </TouchableOpacity>
          <View style={{flex: 0.5}} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 0.5}} />
          <TouchableOpacity
            style={[styles.flexStyle, {justifyContent: 'flex-start'}]}>
            <View style={styles.iconBgViewStyle}>
              <Image
                source={require('../../Icons/mediaIcon.png')}
                style={{height: 30, width: 20}}
              />
            </View>
            <View style={{height: 5}} />
            <Text style={{fontSize: SMALL}}>Audio</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.flexStyle, {justifyContent: 'flex-start'}]}>
            <View style={styles.iconBgViewStyle}>
              <Image
                source={require('../../Icons/locationIcon.png')}
                style={{height: 25, width: 18}}
              />
            </View>
            <View style={{height: 5}} />
            <Text style={{fontSize: SMALL}}>Location</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.flexStyle, {justifyContent: 'flex-start'}]}>
            <View style={styles.iconBgViewStyle}>
              <Image
                source={require('../../Icons/contactsIcon.png')}
                style={{height: 30, width: 30}}
              />
            </View>
            <View style={{height: 5}} />
            <Text style={{fontSize: SMALL}}>Contacts</Text>
          </TouchableOpacity>
          <View style={{flex: 0.5}} />
        </View>
      </View>
    );
  }
}

export default FileMenuComponent;

const styles = StyleSheet.create({
  wrapperStyle: {
    backgroundColor: WHITE_COLOR,
    elevation: 1,
    position: 'absolute',
    alignSelf: 'center',
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBgViewStyle: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: VIEW_BG_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
