import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {WHITE_COLOR, TEXT_NOTE_COLOR, VIEW_BG_COLOR} from '../../themes/colors';
import {EXTRA_LARGE, MEDIUM} from '../../themes/fonts';
class StatusComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <TouchableOpacity
          style={styles.mainViewStyle}
          onPress={this.props.onPressPersonDetail}>
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
          <View style={{flex: 4}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
              <Text style={styles.nameTextStyle}>{this.props.nameText}</Text>
              <View style={{height: 3}} />
              <Text style={{color: TEXT_NOTE_COLOR, paddingLeft: 5}}>
                {this.props.lowerText ? this.props.lowerText : '1 min ago'}
              </Text>
            </View>
            <View style={styles.underLineStyle} />
          </View>
          {this.props.showArrowRight ? (
            <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
              <TouchableOpacity>
                <Image
                  source={require('../../Icons/arrowRightIconGrey.png')}
                  style={{height: 14, width: 8}}
                />
              </TouchableOpacity>
            </View>
          ) : (
            false
          )}
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}

export default StatusComponent;

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 70,
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
  imageStyle: {height: 50, width: 50, borderRadius: 50},
  nameTextStyle: {
    fontSize: MEDIUM,
    fontWeight: '300',
    paddingLeft: 5,
  },
  underLineStyle: {height: 1, backgroundColor: '#F5F5F5'},
  msgTimeTextStyle: {
    fontSize: MEDIUM,
    fontWeight: 'bold',
    paddingLeft: 5,
    color: TEXT_NOTE_COLOR,
  },
  msgNumberViewStyle: {
    height: 25,
    borderRadius: 20,
    backgroundColor: VIEW_BG_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickViewStyle: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: '#43E243',
    marginTop: -20,
    marginRight: -50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
