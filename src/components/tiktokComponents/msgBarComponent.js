import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {WHITE_COLOR, TEXT_NOTE_COLOR} from '../../themes/colors';
import {SMALL} from '../../themes/fonts';
class MsgBarComponent extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('MessageSecondScreen')}
        style={{height: 80, flexDirection: 'row'}}>
        <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
          <Image
            source={require('../../Images/personImage.jpg')}
            style={{height: 60, width: 60, borderRadius: 100, marginLeft: 15}}
          />
        </View>
        <View
          style={[
            styles.flexStyle,
            {flex: 3, alignItems: 'flex-start', marginLeft: 25},
          ]}>
          <Text style={{fontWeight: '700'}}>{this.props.personName}</Text>
          <View style={{height: 5}} />
          <Text style={{color: TEXT_NOTE_COLOR, fontSize: SMALL}}>
            {this.props.msgText}
          </Text>
        </View>
        <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
          <Text
            style={{
              color: TEXT_NOTE_COLOR,
              fontSize: SMALL,
              paddingRight: 20,
            }}>
            {this.props.msgDate}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default MsgBarComponent;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  flexStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
