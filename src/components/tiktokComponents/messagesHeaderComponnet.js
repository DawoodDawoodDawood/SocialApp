import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {WHITE_COLOR, BLACK_COLOR} from '../../themes/colors';
import {LARGE, MEDIUM} from '../../themes/fonts';
class MessagesHeaderComponent extends Component {
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
            {this.props.hideRightButtons ? (
              <View style={{flex: 1}} />
            ) : (
              <React.Fragment>
                {this.props.showAddIcon ? (
                  <TouchableOpacity>
                    <Image
                      source={require('../../Icons/addIcon.png')}
                      style={{height: 15, width: 15, marginRight: 20}}
                    />
                  </TouchableOpacity>
                ) : this.props.hideMoreIcon ? (
                  false
                ) : (
                  <TouchableOpacity onPress={this.props.onPressMoreIcon}>
                    <Image
                      source={require('../../Icons/moreBlackIcon.png')}
                      style={{height: 17, width: 4, marginRight: 20}}
                    />
                  </TouchableOpacity>
                )}
              </React.Fragment>
            )}
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default MessagesHeaderComponent;

const styles = StyleSheet.create({
  headerMainViewStyle: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: '#FCFCFC',
  },

  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
