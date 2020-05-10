import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {WHITE_COLOR, BLACK_COLOR} from '../../themes/colors';
import {LARGE, MEDIUM} from '../../themes/fonts';
class SearchScreensHeaderComponent extends Component {
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
              false
            )}
          </View>
          <View style={[styles.flexStyle, {flex: 4.5}]}>
            {this.props.showHeaderTitle ? (
              <TouchableOpacity onPress={this.props.onPress}>
                <Image
                  source={require('../../Icons/allActivityIcon.png')}
                  style={{height: 24, width: 105, marginRight: 20}}
                />
              </TouchableOpacity>
            ) : (
              false
            )}
          </View>
          <View style={[styles.flexStyle, {alignItems: 'flex-end', flex: 1.1}]}>
            <React.Fragment>
              {this.props.showSendIcon ? (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('MessageFirstScreen')
                  }>
                  <Image
                    source={require('../../Icons/sendBlackIcon.png')}
                    style={{height: 21, width: 25, marginRight: 20}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity>
                  <Image
                    source={require('../../Icons/shareBlackIcon.png')}
                    style={{height: 20, width: 25, marginRight: 20}}
                  />
                </TouchableOpacity>
              )}
            </React.Fragment>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default SearchScreensHeaderComponent;

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
