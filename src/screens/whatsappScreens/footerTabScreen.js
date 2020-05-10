import React, {Component} from 'react';
import FooterComponent from '../../components/whatsappComponents/footerComponent';

import StatusHomeScreen from '../whatsappScreens/statusScreens/statusMainScreen';
import CallHistoryScreen from '../whatsappScreens/callScreens/callHistoryScreen';
import LiveStreamingScreen from '../whatsappScreens/videoScreens/liveStreamingScreen';
import ChatHomeScreen from '../whatsappScreens/chatScreens/chatHomePageScreen';
import StatusSettingScreen from '../whatsappScreens/statusScreens/statusSettingScreen';

class WhatsappFooterScreen extends Component {
  state = {
    status: false,
    call: false,
    live: false,
    chat: true,
    settings: false,
  };
  onStatusPress = () => {
    this.setState({
      status: true,
      call: false,
      live: false,
      chat: false,
      settings: false,
    });
  };
  onCallPress = () => {
    this.setState({
      status: false,
      call: true,
      live: false,
      chat: false,
      settings: false,
    });
  };
  onLivePress = () => {
    this.setState({
      status: false,
      call: false,
      live: true,
      chat: false,
      settings: false,
    });
  };
  onChatPress = () => {
    this.setState({
      status: false,
      call: false,
      live: false,
      chat: true,
      settings: false,
    });
  };
  onSettingsPress = () => {
    this.setState({
      status: false,
      call: false,
      live: false,
      chat: false,
      settings: true,
    });
  };
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        {this.state.status ? (
          <StatusHomeScreen navigation={this.props.navigation} />
        ) : (
          false
        )}

        {this.state.call ? (
          <CallHistoryScreen navigation={this.props.navigation} />
        ) : (
          false
        )}

        {this.state.live ? (
          <LiveStreamingScreen navigation={this.props.navigation} />
        ) : (
          false
        )}

        {this.state.chat ? (
          <ChatHomeScreen navigation={this.props.navigation} />
        ) : (
          true
        )}

        {this.state.settings ? (
          <StatusSettingScreen navigation={this.props.navigation} />
        ) : (
          false
        )}

        <FooterComponent
          status={this.state.status}
          call={this.state.call}
          live={this.state.live}
          chat={this.state.chat}
          settings={this.state.settings}
          onStatusPress={this.onStatusPress}
          onCallPress={this.onCallPress}
          onLivePress={this.onLivePress}
          onChatPress={this.onChatPress}
          onSettingsPress={this.onSettingsPress}
        />
      </React.Fragment>
    );
  }
}
export default WhatsappFooterScreen;
