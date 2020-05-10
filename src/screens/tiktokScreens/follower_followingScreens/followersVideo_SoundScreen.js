import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, StatusBar} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import MessagesHeaderComponent from '../../../components/tiktokComponents/messagesHeaderComponnet';
import {SMALL, MEDIUM} from '../../../themes/fonts';

import {
  STATUS_BAR_COLOR,
  BLACK_COLOR,
  WHITE_COLOR,
} from '../../../themes/colors';
import FollowerVideoScreenComponent from '../../../components/tiktokComponents/followerVideoScreenComponent';
import FollowerSoundScreenComponent from '../../../components/tiktokComponents/followerSoundScreenComponent';

const Videos = () => <FollowerVideoScreenComponent />;
const Sounds = () => <FollowerSoundScreenComponent />;

const initialLayout = {width: Dimensions.get('window').width};
export default function FollowerVideo_SoundScreen({navigation}) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Videos'},
    {key: 'second', title: 'Sounds'},
  ]);

  const renderScene = SceneMap({
    first: Videos,
    second: Sounds,
  });

  return (
    <View style={styles.wrapperStyle}>
      <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="light-content" />
      <MessagesHeaderComponent
        showBackIcon
        headerTitle={'Favourities'}
        hideRightButtons
        onPressBack={() => navigation.goBack()}
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
