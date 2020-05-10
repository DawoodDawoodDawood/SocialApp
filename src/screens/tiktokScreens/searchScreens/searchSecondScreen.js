import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {WHITE_COLOR, STATUS_BAR_COLOR} from '../../../themes/colors';
import SearchScreensHeaderComponent from '../../../components/tiktokComponents/searchScreensHeaderComponent';
import {MEDIUM} from '../../../themes/fonts';
import AllActivityComponent from '../../../components/tiktokComponents/allActivityComponent';
import AllActivityPopupComponent from '../../../components/tiktokComponents/allActivityPopupComponent';

class SearchSecondScreen extends Component {
  state = {popupVisible: false};
  togglePopup() {
    this.setState({popupVisible: !this.state.popupVisible});
  }
  render() {
    return (
      <View
        style={[
          styles.wrapperStyle,
          {backgroundColor: this.state.popupVisible ? '#EBEBEB' : 'white'},
        ]}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <SearchScreensHeaderComponent
          showHeaderTitle
          showSendIcon
          navigation={this.props.navigation}
          onPress={() => this.togglePopup()}
        />

        {this.state.popupVisible ? <AllActivityPopupComponent /> : false}

        <View style={{height: 10}} />
        <AllActivityComponent
          backgroundColor={this.state.popupVisible ? '#EBEBEB' : 'white'}
        />
        <AllActivityComponent
          backgroundColor={this.state.popupVisible ? '#EBEBEB' : 'white'}
        />
        <AllActivityComponent
          backgroundColor={this.state.popupVisible ? '#EBEBEB' : 'white'}
        />
        <AllActivityComponent
          showImage
          lowerText={'likes your video'}
          backgroundColor={this.state.popupVisible ? '#EBEBEB' : 'white'}
        />
        <AllActivityComponent
          backgroundColor={this.state.popupVisible ? '#EBEBEB' : 'white'}
        />
      </View>
    );
  }
}

export default SearchSecondScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  nameTextStyle: {
    fontSize: MEDIUM,
    fontWeight: '700',
  },
  buttonViewStyle: {
    height: 30,
    width: 150,
    borderColor: '#A4A4A4',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 3,
  },
  viewStyle: {
    height: 140,
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  textViewStyle: {
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
