import React, {Component} from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import {MultiArcCircle} from './MultiCircles';
import {
  TEXT_NOTE_COLOR,
  WHITE_COLOR,
  VIEW_BG_COLOR,
} from '../../../themes/colors';
import {MEDIUM} from '../../../themes/fonts';
class FriendStatusList extends Component {
  state = {interval: []};
  componentDidMount() {
    var a = 360 / this.props.userData.stories.length;
    var array = [];
    if (this.props.userData.stories.length === 1) {
      array.push({start: 0, end: 360});
      this.setState({interval: array});
    } else if (this.props.userData.stories.length) {
      for (var i = 1; i <= this.props.userData.stories.length; i++) {
        if (i === 1) {
          array.push({
            start: 10,
            end: i * a,
          });
          this.setState({interval: array});
        } else {
          array.push({
            start: 10 + (i - 1) * a,
            end: i * a,
          });
          this.setState({interval: array});
        }
      }
    }
  }
  render() {
    console.log(this.props.userData.stories.length);
    console.log(this.state.interval);
    return (
      <TouchableOpacity
        style={styles.mainViewStyle}
        onPress={this.props.onStorySelect}>
        <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
          <MultiArcCircle
            radius={30}
            intervals={this.state.interval}
            color={VIEW_BG_COLOR}
            backgroundColor="transparent"
            width={2}
          />
          <Image
            style={styles.imageStyle}
            source={{uri: this.props.userData.profile}}
          />
        </View>
        <View style={{flex: 4}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Text style={styles.nameTextStyle}>
              {this.props.userData.username}
            </Text>
            <View style={{height: 3}} />
            <Text style={{color: TEXT_NOTE_COLOR, paddingLeft: 5}}>
              1 min ago
            </Text>
          </View>
          <View style={styles.underLineStyle} />
        </View>
      </TouchableOpacity>
    );
  }
}

export default FriendStatusList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    width: 66,
    margin: 4,
    height: 66,
    borderRadius: 33,
    borderWidth: 2,
    borderColor: '#ffd835',
  },
  modal: {
    flex: 1,
  },
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
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 5,
  },
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
