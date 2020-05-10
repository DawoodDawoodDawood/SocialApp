import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Platform,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {LARGE, SMALL, MEDIUM} from '../../../themes/fonts';
import {
  TEXT_BLUE_COLOR,
  WHITE_COLOR,
  TEXT_NOTE_COLOR,
  LIGHT_GREY_BG_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import LiveStreamingComponent from '../../../components/whatsappComponents/liveStreamingComponent';
import CustomSearchBar from '../../../components/whatsappComponents/customSearchBar';

class LiveStreamingScreen extends Component {
  state = {searchBar: false};

  toggleSearchBar() {
    this.setState({searchBar: !this.state.searchBar});
  }

  // state = {
  //   inbox: [
  //     {id: 1},
  //     {id: 2},
  //     {id: 2},
  //     {id: 1},
  //     {id: 2},
  //     {id: 2},
  //     {id: 1},
  //     {id: 2},
  //     {id: 2},
  //     {id: 1},
  //     {id: 2},
  //     {id: 2},
  //     {id: 1},
  //     {id: 2},
  //     {id: 2},
  //   ],
  // };
  render() {
    const HEIGHT = this.state.searchBar ? 240 : 190;
    const scrollY = new Animated.Value(0);
    const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEIGHT);
    const headerY = Animated.interpolate(diffClampScrollY, {
      inputRange: [0, HEIGHT],
      outputRange: [0, -HEIGHT],
    });
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <View
          style={{
            height: HEIGHT,
          }}>
          <View style={styles.headerMainViewStyle}>
            <View style={styles.headerFlexStyle} />
            <View style={[styles.headerFlexStyle, {flex: 2}]}>
              <Text style={{fontSize: LARGE, fontWeight: 'bold'}}>
                Live Streaming
              </Text>
            </View>

            <View style={[styles.headerFlexStyle, {alignItems: 'flex-end'}]}>
              <TouchableOpacity onPress={() => this.toggleSearchBar()}>
                <Image
                  source={require('../../../Icons/searchIcon.png')}
                  style={{height: 20, width: 20, marginRight: 20}}
                />
              </TouchableOpacity>
            </View>
          </View>

          {this.state.searchBar ? <CustomSearchBar /> : false}

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CameraScreen')}
            style={{height: 90, flexDirection: 'row'}}>
            <View style={styles.headerFlexStyle}>
              <Image
                source={require('../../../Icons/liveStreamingIcon.png')}
                style={{height: 40, width: 40, borderRadius: 5}}
              />
            </View>
            <View
              style={[
                styles.headerFlexStyle,
                {flex: 2, alignItems: 'flex-start'},
              ]}>
              <Text style={{fontSize: LARGE, fontWeight: 'bold'}}>Go Live</Text>

              <Text style={{fontSize: SMALL, color: TEXT_NOTE_COLOR}}>
                Tap to go live with your contacts
              </Text>
            </View>
            <View style={[styles.headerFlexStyle, {alignItems: 'flex-end'}]}>
              <Image
                source={require('../../../Icons/arrowForwardIcon.png')}
                style={{height: 12, width: 7, marginRight: 20}}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              height: 40,
              justifyContent: 'center',
              alignItems: 'flex-start',
              backgroundColor: LIGHT_GREY_BG_COLOR,
            }}>
            <Text style={{marginLeft: 20, color: TEXT_NOTE_COLOR}}>
              People who live
            </Text>
          </View>
        </View>

        <ScrollView>
          <View style={{height: 20}} />

          <View style={{flexDirection: 'row', height: 200}}>
            <View style={styles.headerFlexStyle}>
              <LiveStreamingComponent />
            </View>
            <View style={styles.headerFlexStyle}>
              <LiveStreamingComponent
                onPress={() =>
                  this.props.navigation.navigate('LiveVideoScreen')
                }
              />
            </View>
          </View>
          <View style={{height: 10}} />
          <View style={{flexDirection: 'row', height: 200}}>
            <View style={styles.headerFlexStyle}>
              <LiveStreamingComponent
                onPress={() =>
                  this.props.navigation.navigate('LiveVideoScreen')
                }
              />
            </View>
            <View style={styles.headerFlexStyle}>
              <LiveStreamingComponent
                onPress={() =>
                  this.props.navigation.navigate('LiveVideoScreen')
                }
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', height: 200}}>
            <View style={styles.headerFlexStyle}>
              <LiveStreamingComponent
                onPress={() =>
                  this.props.navigation.navigate('LiveVideoScreen')
                }
              />
            </View>
            <View style={styles.headerFlexStyle}>
              <LiveStreamingComponent
                onPress={() =>
                  this.props.navigation.navigate('LiveVideoScreen')
                }
              />
            </View>
          </View>
        </ScrollView>
        {/* <FlatList
            showsVerticalScrollIndicator={false}
            style={{width: '90%', alignSelf: 'center'}}
            data={this.state.inbox}
            renderItem={({item}) => (
              <View>
                <LiveStreamingComponent />
              </View>
            )}
            numColumns={2}
            keyExtractor={item => item.id}
          /> */}
      </View>
    );
  }
}

export default LiveStreamingScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  headerMainViewStyle: {
    height: 60,
    flexDirection: 'row',
  },
  headerFlexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
