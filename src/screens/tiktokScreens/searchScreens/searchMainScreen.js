import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, StatusBar} from 'react-native';
import {WHITE_COLOR, STATUS_BAR_COLOR} from '../../../themes/colors';
import {MEDIUM} from '../../../themes/fonts';
import SearchMainScreenComponent from '../../../components/tiktokComponents/searchMainScreenComponent';
import CustomSearchBar from '../../../components/whatsappComponents/customSearchBar';
class SearchMainScreen extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <View style={{height: 20}} />

        <CustomSearchBar />

        <View style={{height: 20}} />

        <ScrollView>
          <SearchMainScreenComponent navigation={this.props.navigation} />
          {/* <SearchMainScreenComponent navigation={this.props.navigation} />
          <SearchMainScreenComponent navigation={this.props.navigation} />
          <SearchMainScreenComponent navigation={this.props.navigation} /> */}
        </ScrollView>
      </View>
    );
  }
}

export default SearchMainScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  searchBarViewStyle: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarStyle: {
    width: '90%',
    height: 40,
    elevation: 0,
    backgroundColor: '#EEEEEE',
  },
});
