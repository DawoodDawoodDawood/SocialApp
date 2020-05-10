import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {WHITE_COLOR, TEXT_NOTE_COLOR, VIEW_BG_COLOR} from '../../themes/colors';
import {EXTRA_LARGE, MEDIUM} from '../../themes/fonts';
class MsgProfileDetailComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={styles.mainViewStyle}>
          <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
            <Image
              source={
                this.props.stausImage
                  ? this.props.stausImage
                  : require('../../Images/statusImage2.png')
              }
              style={styles.imageStyle}
            />
          </View>
          <View style={{flex: 2.5}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
              <Text style={styles.nameTextStyle}>{this.props.nameText}</Text>
              <View style={{height: 3}} />
              <Text style={{color: TEXT_NOTE_COLOR, paddingLeft: 5}}>
                {this.props.lowerText}
              </Text>
            </View>
          </View>
          {this.props.showArrowRight ? (
            <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
              <TouchableOpacity>
                <Image
                  source={require('../../Icons/arrowRightIconGrey.png')}
                  style={{height: 14, width: 8, marginRight: 2}}
                />
              </TouchableOpacity>
            </View>
          ) : (
            false
          )}
        </TouchableOpacity>
        <View style={{height: 7}} />
        <View style={styles.lineStyle} />
      </React.Fragment>
    );
  }
}

export default MsgProfileDetailComponent;

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 90,
    width: '93%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: WHITE_COLOR,
  },
  onlineStatusStyle: {
    height: 12,
    width: 12,
    borderRadius: 20,
    backgroundColor: '#50DAFE',
    marginBottom: -10,
    marginRight: -35,
    zIndex: 999,
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {height: 60, width: 60, borderRadius: 50},
  nameTextStyle: {
    fontSize: MEDIUM,
    fontWeight: '500',
    paddingLeft: 5,
  },
  lineStyle: {
    height: 1.5,
    backgroundColor: '#F9F9F9',
    width: '92%',
    alignSelf: 'center',
  },
});
