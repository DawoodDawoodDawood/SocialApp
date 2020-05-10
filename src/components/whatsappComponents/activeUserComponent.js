import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {WHITE_COLOR} from '../../themes/colors';
import {SMALL} from '../../themes/fonts';
class ActiveUserComponent extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <View style={styles.onlineStatusStyle} />
        <Image
          source={require('../../Images/personImage.jpg')}
          style={{
            height: 60,
            width: 60,
            borderRadius: 100,
            borderColor: '#6ECAF8',
            borderWidth: 4,
          }}
        />
        <Text style={{fontSize: SMALL}}>User Name</Text>
      </View>
    );
  }
}

export default ActiveUserComponent;

const styles = StyleSheet.create({
  wrapperStyle: {
    height: 100,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  onlineStatusStyle: {
    height: 12,
    width: 12,
    borderRadius: 20,
    backgroundColor: '#50DAFE',
    marginBottom: -6,
    marginRight: -30,
    zIndex: 999,
    borderColor: WHITE_COLOR,
    borderWidth: 2,
  },
});
