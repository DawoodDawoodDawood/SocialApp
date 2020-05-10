import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
class MediaImagesComponent extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={this.props.image1}
            style={{height: '100%', width: '90%'}}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={this.props.image2}
            style={{height: '100%', width: '90%'}}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={this.props.image3}
            style={{height: '100%', width: '90%'}}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={this.props.image4}
            style={{height: '100%', width: '90%'}}
          />
        </View>
      </View>
    );
  }
}

export default MediaImagesComponent;

const styles = StyleSheet.create({
  wrapperStyle: {
    height: 70,
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
});
