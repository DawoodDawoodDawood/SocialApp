import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {LARGE, SMALL} from '../../themes/fonts';
import {TEXT_BLUE_COLOR} from '../../themes/colors';
class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.headerMainViewStyle}>
        <View style={styles.headerFlexStyle}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              source={require('../../Icons/backIcon.png')}
              style={{height: 15, width: 11, marginLeft: 20}}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.headerFlexStyle, {flex: 2}]}>
          <Text style={{fontSize: LARGE, fontWeight: 'bold'}}>
            {this.props.title}
          </Text>
          {this.props.showTitleDescription ? (
            <Text style={{fontSize: SMALL}}>
              {this.props.TitleDescriptionText
                ? this.props.TitleDescriptionText
                : '1 upto 2000 Members'}
            </Text>
          ) : (
            false
          )}
        </View>

        <View style={[styles.headerFlexStyle, {alignItems: 'flex-end'}]}>
          {this.props.showNextButton ? (
            <TouchableOpacity onPress={this.props.onPressNext}>
              <Text style={{color: TEXT_BLUE_COLOR, marginRight: 20}}>
                Next
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={this.props.onPressSearch}>
              <Image
                source={require('../../Icons/searchIcon.png')}
                style={{height: 20, width: 20, marginRight: 20}}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

export default HeaderComponent;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  headerMainViewStyle: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#FCFCFC',
  },
  headerFlexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
