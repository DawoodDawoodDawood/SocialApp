import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, StatusBar} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ProfileHeaderComponent from '../../../components/tiktokComponents/profileHeaderComponent';
import {SMALL, MEDIUM} from '../../../themes/fonts';
import FollowerScreenComponent from '../../../components/tiktokComponents/followerScreenComponent';
import FollowingScreenComponent from '../../../components/tiktokComponents/followingScreenComponent';

import {
  STATUS_BAR_COLOR,
  BLACK_COLOR,
  WHITE_COLOR,
} from '../../../themes/colors';

const Following = () => <FollowingScreenComponent />;
const Followers = () => <FollowerScreenComponent />;

const initialLayout = {width: Dimensions.get('window').width};
export default function Follower_FollowingScreen({navigation}) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Following 10'},
    {key: 'second', title: 'Followers 40'},
  ]);

  const renderScene = SceneMap({
    first: Following,
    second: Followers,
  });

  return (
    <View style={styles.wrapperStyle}>
      <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="light-content" />
      <ProfileHeaderComponent
        onPressBack={() => navigation.goBack()}
        onPressPersonIcon={() => navigation.navigate('FindFriendScreen')}
        showBackIcon
        headerTitle={'Qasim'}
        addFriendIcon
      />

      <TabView
        renderTabBar={props => (
          <TabBar
            onPressMenuIcon={() => this.props.navigation.navigate('')}
            labelStyle={{fontSize: MEDIUM, fontWeight: '600'}}
            ovescroll={true}
            indicatorStyle={{backgroundColor: '#12738C'}}
            inactiveColor={'#A4A4A4'}
            activeColor={BLACK_COLOR}
            tabStyle={{backgroundColor: 'white', fontSize: 6, elevation: 0}}
            {...props}
          />
        )}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
});
