import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ClickableComponent from './clickableComponent';
import {WHITE_COLOR} from '../../themes/colors';
class MenuPopupComponent extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.showSecondPopup ? (
          <View style={styles.mainViewStyle2}>
            <View style={{flex: 1.2, backgroundColor: 'transparent'}} />
            <View style={styles.popupViewStyle}>
              <ClickableComponent
                text={'New Groups'}
                image={require('../../Icons/groupBlackIcon.png')}
                iconHeight={18}
                iconWidth={25}
                flex={2.5}
              />

              <ClickableComponent
                text={'New Broadcast'}
                image={require('../../Icons/broadcastBlackIcon.png')}
                iconHeight={16}
                iconWidth={20}
                flex={2.5}
              />
              <ClickableComponent
                text={'Starred Message'}
                image={require('../../Icons/starredMsgIcon.png')}
                iconHeight={20}
                iconWidth={20}
                flex={2.5}
              />
              <ClickableComponent
                text={'Archive Chat'}
                image={require('../../Icons/archiveChatIcon.png')}
                iconHeight={22}
                iconWidth={20}
                flex={2.5}
              />
              <ClickableComponent
                text={'Call History'}
                image={require('../../Icons/callHistoryIcon.png')}
                iconHeight={20}
                iconWidth={20}
                flex={2.5}
              />
              <ClickableComponent
                text={'Settings'}
                image={require('../../Icons/settingsIcon.png')}
                iconHeight={20}
                iconWidth={20}
                flex={2.5}
              />
            </View>
          </View>
        ) : (
          <View style={styles.mainViewStyle1}>
            <View style={{flex: 1.2}} />
            <View style={styles.popupViewStyle}>
              <ClickableComponent
                text={'New Groups'}
                image={require('../../Icons/groupBlackIcon.png')}
                iconHeight={18}
                iconWidth={25}
                flex={2.5}
              />

              <ClickableComponent
                text={'New Broadcast'}
                image={require('../../Icons/broadcastBlackIcon.png')}
                iconHeight={16}
                iconWidth={20}
                flex={2.5}
              />
              <ClickableComponent
                text={'Archive Chat'}
                image={require('../../Icons/archiveChatIcon.png')}
                iconHeight={22}
                iconWidth={20}
                flex={2.5}
              />
            </View>
          </View>
        )}
      </React.Fragment>
    );
  }
}

export default MenuPopupComponent;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  mainViewStyle1: {
    marginTop: 40,
    height: 120,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
  },
  popupViewStyle: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: WHITE_COLOR,
    elevation: 1,
  },
  mainViewStyle2: {
    height: 240,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 50,
  },
});
