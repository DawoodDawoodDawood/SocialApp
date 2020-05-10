import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {WHITE_COLOR, BLACK_COLOR} from '../../themes/colors';
import {LARGE, MEDIUM} from '../../themes/fonts';
class EditProfileHeaderComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.headerMainViewStyle}>
          <View
            style={[styles.flexStyle, {alignItems: 'flex-start', flex: 1.1}]}>
            {this.props.showBackIcon ? (
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../../Icons/arrowBackBlackIcon.png')}
                  style={{height: 15, width: 10, marginLeft: 18}}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Text style={{color: '#6D6D6D', paddingLeft: 15}}>Cancel</Text>
              </TouchableOpacity>
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
          <View style={[styles.flexStyle, {alignItems: 'flex-end', flex: 1.1}]}>
            {this.props.hideSaveButton ? (
              <View style={{flex: 1}} />
            ) : (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('TiktokEditProfileScreen')
                }>
                <Text
                  style={{
                    color: '#DE2323',
                    fontWeight: 'bold',
                    paddingRight: 15,
                  }}>
                  Save
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default EditProfileHeaderComponent;

const styles = StyleSheet.create({
  headerMainViewStyle: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#FCFCFC',
  },

  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
