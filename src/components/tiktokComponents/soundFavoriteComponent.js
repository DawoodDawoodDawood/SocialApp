import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {WHITE_COLOR, TEXT_NOTE_COLOR} from '../../themes/colors';
import {LARGE, SMALL} from '../../themes/fonts';
class SoundFavoriteComponent extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <Image
          source={require('../../Icons/saveLargeIcon.png')}
          style={{height: 50, width: 40}}
        />
        <View style={{height: 15}} />
        <Text style={{fontSize: LARGE, fontWeight: 'bold'}}>
          Favorite Sounds
        </Text>

        <View style={{height: 10}} />
        <Text
          style={{
            fontSize: SMALL,
            color: TEXT_NOTE_COLOR,
            textAlign: 'center',
          }}>
          Add sounds to your favorites so you can easily use or find them later.
        </Text>
      </View>
    );
  }
}

export default SoundFavoriteComponent;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
});
