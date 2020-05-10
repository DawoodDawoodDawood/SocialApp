import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {WHITE_COLOR} from '../../themes/colors';
import {EXTRA_SMALL, MEDIUM} from '../../themes/fonts';
import ClickableComponent from './clickableComponent';

class GroupProfileHeaderComponent extends Component {
  state = {isOn: false, popupVisible: false};
  toggleSwitch() {
    this.setState({isOn: !this.state.isOn});
  }
  togglePopup() {
    this.setState({popupVisible: !this.state.popupVisible});
  }
  render() {
    return (
      <View style={styles.mainViewStyle}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={this.props.onPressBackArrow}
            style={styles.flexStyle}>
            <Image
              resizeMode="stretch"
              source={require('../../Icons/backIcon.png')}
              style={{
                height: this.props.backArrowHeight
                  ? this.props.backArrowHeight
                  : 15,
                width: this.props.backArrowWidth
                  ? this.props.backArrowWidth
                  : 11,
              }}
            />
          </TouchableOpacity>
          <View style={{flex: 7, flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Image
                source={require('../../Images/personImage.jpg')}
                style={{height: 45, width: 45, borderRadius: 100}}
              />
            </View>
            <View style={{flex: 4, justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold'}}>Group 1</Text>

              <Text style={{fontSize: EXTRA_SMALL}}>3 Members</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.togglePopup()}
            style={styles.flexStyle}>
            <Image
              resizeMode="stretch"
              source={require('../../Icons/menuIcon-o.png')}
              style={{height: 20, width: 6}}
            />
          </TouchableOpacity>
        </View>

        {this.state.popupVisible ? (
          <View style={styles.popupMainViewStyle}>
            <View style={{flex: 1.2, backgroundColor: 'transparent'}} />
            <View style={styles.popupInnerViewStyle}>
              <ClickableComponent
                text={'Search Members'}
                image={require('../../Icons/searchIcon.png')}
                iconHeight={18}
                iconWidth={18}
                flex={2.5}
              />
              <ClickableComponent
                text={'Leave Group'}
                image={require('../../Icons/exitIcon.png')}
                iconHeight={19}
                iconWidth={22}
                flex={2.5}
              />
              <ClickableComponent
                text={'Pin to Home'}
                image={require('../../Icons/homeIcon.png')}
                iconHeight={22}
                iconWidth={22}
                flex={2.5}
              />
            </View>
          </View>
        ) : (
          false
        )}

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View
            style={[
              styles.flexStyle,
              {alignItems: 'flex-start', marginLeft: 20},
            ]}>
            <Text style={{fontSize: MEDIUM, fontWeight: 'bold'}}>
              Mute Notifications
            </Text>
          </View>
          <View
            style={[
              styles.flexStyle,
              {alignItems: 'flex-end', marginRight: 20},
            ]}>
            <ToggleSwitch
              isOn={this.state.isOn}
              onColor="lightgreen"
              offColor="gray"
              labelStyle={{color: 'red', fontWeight: '700'}}
              size="small"
              onToggle={() => this.toggleSwitch()}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default GroupProfileHeaderComponent;

const styles = StyleSheet.create({
  mainViewStyle: {
    height: 100,
    backgroundColor: WHITE_COLOR,
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupMainViewStyle: {
    marginTop: 5,
    height: 120,
    flexDirection: 'row',
    width: '85%',
    alignSelf: 'center',
    position: 'absolute',
    marginRight: 20,
  },
  popupInnerViewStyle: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: WHITE_COLOR,
    elevation: 1,
  },
  bottomMainViewStyle: {
    height: 50,
    backgroundColor: 'white',
    elevation: 5,
    flexDirection: 'row',
  },
});
