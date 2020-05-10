import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {BLACK_COLOR} from '../../themes/colors';
import {MEDIUM} from '../../themes/fonts';
import CustomSearchBar from '../whatsappComponents/customSearchBar';
class SoundHeaderComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.headerMainViewStyle}>
          <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
            <TouchableOpacity onPress={this.props.onPressCross}>
              <Image
                source={require('../../Icons/crossBlackIcon.png')}
                style={{height: 15, width: 15, marginLeft: 20}}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.flexStyle, {flex: 3}]}>
            <Text
              style={{
                color: BLACK_COLOR,
                fontWeight: 'bold',
                fontSize: MEDIUM,
              }}>
              Sounds
            </Text>
          </View>
          <View style={{flex: 1}} />
        </View>
        <CustomSearchBar />
        <View style={{height: 20}} />
      </React.Fragment>
    );
  }
}

export default SoundHeaderComponent;

const styles = StyleSheet.create({
  headerMainViewStyle: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#FCFCFC',
  },

  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
