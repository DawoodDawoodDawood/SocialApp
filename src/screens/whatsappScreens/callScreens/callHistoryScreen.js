import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Animated,
} from 'react-native';
import {
  TEXT_BLUE_COLOR,
  BLACK_COLOR,
  WHITE_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import {EXTRA_LARGE, MEDIUM} from '../../../themes/fonts';
import CallComponent from '../../../components/whatsappComponents/callComponent';
import CustomSearchBar from '../../../components/whatsappComponents/customSearchBar';
class CallHistoryScreen extends Component {
  state = {scrollY: new Animated.Value(0)};
  render() {
    const HEADER_MAX_HEIGHT = 20;
    const startHeaderHeight = 0;
    const endHeaderHeight = -20;
    const differClampScrollY = Animated.diffClamp(
      this.state.scrollY,
      0,
      HEADER_MAX_HEIGHT,
    );
    const headerHeight = differClampScrollY.interpolate({
      inputRange: [0, 20],
      outputRange: [startHeaderHeight, endHeaderHeight],
      extrapolate: 'clamp',
    });

    const searchBarOpacity1 = headerHeight.interpolate({
      inputRange: [endHeaderHeight, startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />

        <Animated.View
          style={[
            styles.headerMainViewStyle,
            {
              top: 20,

              flexDirection: 'row',
              transform: [
                {
                  translateY: headerHeight,
                },
              ],
            },
          ]}>
          <View style={{flex: 1}}>
            <Text style={styles.pageTitleStyle}>Chats</Text>
          </View>

          <Animated.View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingRight: 20,
            }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('CreateCallScreen')
              }>
              <Image
                source={require('../../../Icons/addForCallicon.png')}
                style={{height: 20, width: 20, marginRight: 20}}
              />
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>

        <Animated.View
          style={[
            styles.headerMainViewStyle,
            {
              top: 45,

              opacity: searchBarOpacity1,
              transform: [
                {
                  translateY: headerHeight,
                },
              ],
              backgroundColor: 'transparent',
            },
          ]}>
          <CustomSearchBar />
        </Animated.View>

        {/* <Animated.View
          style={[
            styles.headerMainViewStyle,
            {
              top: 0,
              height: 30,
            },
          ]}>
          <View style={{flex: 1}}>
            <Text style={styles.pageTitleStyle}>Calls</Text>
          </View>

          <Animated.View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingRight: 20,
            }}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('CreateCallScreen')
              }>
              <Image
                source={require('../../../Icons/addForCallicon.png')}
                style={{height: 20, width: 20, marginRight: 20}}
              />
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
        <View style={{height: 10}} />
        <Animated.View
          style={[
            styles.headerMainViewStyle,
            {
              top: 30,
              height: 55,
              opacity: searchBarOpacity1,
              transform: [
                {
                  translateY: headerHeight,
                },
              ],
            },
          ]}>
          <CustomSearchBar />
        </Animated.View> */}

        <Animated.ScrollView
          bounces={true}
          scrollEventThrottle={16}
          style={{marginTop: 50}}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: this.state.scrollY}}},
          ])}>
          <View style={{height: 30}}></View>
          <CallComponent outgoing navigation={this.props.navigation} />
          <CallComponent navigation={this.props.navigation} />
          <CallComponent navigation={this.props.navigation} />
          <CallComponent outgoing navigation={this.props.navigation} />
          <CallComponent navigation={this.props.navigation} />
          <CallComponent outgoing navigation={this.props.navigation} />
          <CallComponent navigation={this.props.navigation} />
          <CallComponent navigation={this.props.navigation} />
          <CallComponent outgoing navigation={this.props.navigation} />
          <CallComponent navigation={this.props.navigation} />
          <CallComponent outgoing navigation={this.props.navigation} />
          <CallComponent navigation={this.props.navigation} />
          <CallComponent navigation={this.props.navigation} />
          <CallComponent outgoing navigation={this.props.navigation} />
          <CallComponent navigation={this.props.navigation} />
          <CallComponent outgoing navigation={this.props.navigation} />
          <CallComponent navigation={this.props.navigation} />
          <CallComponent navigation={this.props.navigation} />
          <CallComponent outgoing navigation={this.props.navigation} />
          <CallComponent navigation={this.props.navigation} />
          <CallComponent outgoing navigation={this.props.navigation} />
          <CallComponent navigation={this.props.navigation} />
          <CallComponent navigation={this.props.navigation} />
          <CallComponent outgoing navigation={this.props.navigation} />
          <CallComponent navigation={this.props.navigation} />
        </Animated.ScrollView>
      </View>
    );
  }
}

export default CallHistoryScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  headerMainViewStyle: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 999,
  },
  headerFlexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pageTitleViewStyle: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pageTitleStyle: {
    color: BLACK_COLOR,
    paddingLeft: 20,
    fontSize: EXTRA_LARGE,
    fontWeight: 'bold',
  },
  viewStyle: {
    height: 40,
    flexDirection: 'row',
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
