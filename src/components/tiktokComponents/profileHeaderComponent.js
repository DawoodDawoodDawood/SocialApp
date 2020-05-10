import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {WHITE_COLOR, BLACK_COLOR} from '../../themes/colors';
import {LARGE, MEDIUM} from '../../themes/fonts';
class ProfileHeaderComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.headerMainViewStyle}>
          <View
            style={[styles.flexStyle, {alignItems: 'flex-start', flex: 1.1}]}>
            {this.props.showBackIcon ? (
              <TouchableOpacity onPress={this.props.onPressBack}>
                <Image
                  source={require('../../Icons/arrowBackBlackIcon.png')}
                  style={{height: 15, width: 10, marginLeft: 18}}
                />
              </TouchableOpacity>
            ) : (
              <React.Fragment>
                {this.props.showPersonIcon ? (
                  <TouchableOpacity>
                    <Image
                      source={require('../../Icons/profileIcon.png')}
                      style={{height: 20, width: 20, marginLeft: 18}}
                    />
                  </TouchableOpacity>
                ) : (
                  false
                )}
              </React.Fragment>
            )}
          </View>
          <View style={[styles.flexStyle, {flex: 4.5}]}>
            <Text
              style={{
                color: BLACK_COLOR,
                fontWeight: 'bold',
                fontSize: MEDIUM,
              }}>
              {this.props.headerTitle}
            </Text>
          </View>
          {this.props.addFriendIcon ? (
            <View
              style={[styles.flexStyle, {alignItems: 'flex-end', flex: 1.1}]}>
              <TouchableOpacity onPress={this.props.onPressPersonIcon}>
                <Image
                  source={require('../../Icons/profileIcon.png')}
                  style={{height: 20, width: 20, marginRight: 18}}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flex: 1}} />
          )}
        </View>
      </React.Fragment>
    );
  }
}

export default ProfileHeaderComponent;

const styles = StyleSheet.create({
  headerMainViewStyle: {
    height: 55,
    flexDirection: 'row',
    backgroundColor: '#FCFCFC',
  },

  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
