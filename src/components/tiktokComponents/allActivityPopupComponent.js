import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {WHITE_COLOR} from '../../themes/colors';
import ClickableComponent2 from './clickableComponent2';
class AllActivityPopupComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.mainViewStyle1}>
          <View style={styles.popupViewStyle}>
            <ClickableComponent2
              imageSource={require('../../Icons/allActivityBlackIcon.png')}
              iconHeight={19}
              iconWidth={20}
              text={'All Activity'}
              showTick
            />
            <ClickableComponent2
              imageSource={require('../../Icons/heartFilledGreyIcon.png')}
              iconHeight={18}
              iconWidth={20}
              text={'Likes'}
            />
            <ClickableComponent2
              imageSource={require('../../Icons/cmntGreyIcon.png')}
              iconHeight={17}
              iconWidth={20}
              text={'Comments'}
            />
            <ClickableComponent2
              imageSource={require('../../Icons/personGreyIcon.png')}
              iconHeight={20}
              iconWidth={20}
              text={'Followers'}
            />
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default AllActivityPopupComponent;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  mainViewStyle1: {
    marginTop: 60,
    height: 160,
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
  },
  popupViewStyle: {
    flex: 1,
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
