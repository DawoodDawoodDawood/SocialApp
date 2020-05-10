import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, StatusBar} from 'react-native';
import {
  TEXT_NOTE_COLOR,
  WHITE_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import {MEDIUM} from '../../../themes/fonts';
import HeaderComponent from '../../../components/whatsappComponents/headerComponent';
import CallComponent from '../../../components/whatsappComponents/callComponent';
import CustomSearchBar from '../../../components/whatsappComponents/customSearchBar';
class CreateCallScreen extends Component {
  state = {searchBar: false};

  toggleSearchBar() {
    this.setState({searchBar: !this.state.searchBar});
  }
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <HeaderComponent
          title={'Select Contacts'}
          showTitleDescription
          TitleDescriptionText={'213 contacts'}
          navigation={this.props.navigation}
          onPressSearch={() => this.toggleSearchBar()}
        />
        <View style={{height: 5}} />
        {this.state.searchBar ? <CustomSearchBar /> : false}
        <View style={{height: 5}} />
        <ScrollView style={{flexGrow: 1}}>
          <CallComponent
            secondView
            showVideoIcon
            audioPhone
            justify={'center'}
            padding={14}
            navigation={this.props.navigation}
          />
          <CallComponent
            secondView
            audioPhone
            showVideoIcon
            justify={'center'}
            padding={14}
            navigation={this.props.navigation}
          />
          <CallComponent
            secondView
            audioPhone
            showVideoIcon
            justify={'center'}
            padding={14}
            navigation={this.props.navigation}
          />
          <CallComponent
            secondView
            audioPhone
            showVideoIcon
            justify={'center'}
            padding={14}
            navigation={this.props.navigation}
          />
          <CallComponent
            secondView
            audioPhone
            showVideoIcon
            justify={'center'}
            padding={14}
            navigation={this.props.navigation}
          />
        </ScrollView>
      </View>
    );
  }
}

export default CreateCallScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  clickableViewStyle: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  flexStyle: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  allContactsViewStyle: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F6F6F6',
  },
  allContactsTextStyle: {
    color: TEXT_NOTE_COLOR,
    paddingLeft: 18,
    fontSize: MEDIUM,
  },
});
