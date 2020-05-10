import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {SMALL} from '../../themes/fonts';
import {TEXT_NOTE_COLOR} from '../../themes/colors';
class EditBarComponent extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPressEditBar}
        style={styles.wrapperStyle}>
        <View style={[styles.flexStyle, {flex: 3, alignItems: 'flex-start'}]}>
          <Text style={{marginLeft: 20, fontSize: SMALL}}>
            {this.props.nameText}
          </Text>
        </View>
        <View style={[styles.flexStyle, {flex: 7, alignItems: 'flex-end'}]}>
          <Text style={{color: TEXT_NOTE_COLOR, fontSize: SMALL}}>
            {this.props.name}
          </Text>
        </View>
        <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
          {this.props.showCopyIcon ? (
            <Image
              source={require('../../Icons/copyIcon.png')}
              style={{height: 15.5, width: 15, marginRight: 15}}
            />
          ) : (
            <Image
              source={require('../../Icons/arrowRightIconGrey.png')}
              style={{height: 12, width: 7, marginRight: 20}}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

export default EditBarComponent;

const styles = StyleSheet.create({
  wrapperStyle: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
  },
  flexStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
