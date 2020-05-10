import React, {Component} from 'react';
import {View} from 'react-native';
import FooterComponent from '../../components/tiktokComponents/footerComponent';
import SearchMainScreen from './searchScreens/searchMainScreen';
import SearchSecondScreen from './searchScreens/searchSecondScreen';
import ProfileScreen from './profileScreens/profileScreen';
import HomeScreen from '../../components/titokVedioViewComponent/src/screens/Feed/index';
class TiktokFooterScreen extends Component {
  state = {
    home: true,
    search: false,
    addVideo: false,
    inbox: false,
    profile: false,
  };
  onHomePress = () => {
    this.setState({
      home: true,
      search: false,
      addVideo: false,
      inbox: false,
      profile: false,
    });
  };
  onSearchPress = () => {
    this.setState({
      home: false,
      search: true,
      addVideo: false,
      inbox: false,
      profile: false,
    });
  };
  onAddVideoPress = () => {
    this.setState({
      home: false,
      search: false,
      addVideo: true,
      inbox: false,
      profile: false,
    });
  };
  onInboxPress = () => {
    this.setState({
      home: false,
      search: false,
      addVideo: false,
      inbox: true,
      profile: false,
    });
  };
  onProfilePress = () => {
    this.setState({
      home: false,
      search: false,
      addVideo: false,
      inbox: false,
      profile: true,
    });
  };
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        {this.state.home ? (
          <HomeScreen navigation={this.props.navigation} />
        ) : (
          true
        )}

        {this.state.search ? (
          <SearchMainScreen navigation={this.props.navigation} />
        ) : (
          false
        )}

        {/* {this.state.addVideo ? (
          <View style={{flex: 1}} navigation={this.props.navigation} />
        ) : (
          false
        )} */}

        {this.state.inbox ? (
          <SearchSecondScreen navigation={this.props.navigation} />
        ) : (
          false
        )}

        {this.state.profile ? (
          <ProfileScreen navigation={this.props.navigation} />
        ) : (
          false
        )}

        <FooterComponent
          home={this.state.home}
          search={this.state.search}
          addVideo={this.state.addVideo}
          inbox={this.state.inbox}
          navigation={this.props.navigation}
          profile={this.state.profile}
          onHomePress={this.onHomePress}
          onSearchPress={this.onSearchPress}
          onAddVideoPress={this.onAddVideoPress}
          onInboxPress={this.onInboxPress}
          onProfilePress={this.onProfilePress}
        />
      </React.Fragment>
    );
  }
}
export default TiktokFooterScreen;
