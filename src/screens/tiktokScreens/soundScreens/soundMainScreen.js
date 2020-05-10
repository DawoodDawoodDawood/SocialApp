import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, StatusBar} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {SMALL, MEDIUM} from '../../../themes/fonts';
import {
  STATUS_BAR_COLOR,
  BLACK_COLOR,
  WHITE_COLOR,
} from '../../../themes/colors';
import SoundDiscoverComponent from '../../../components/tiktokComponents/soundDiscoverComponent';
import SoundHeaderComponent from '../../../components/tiktokComponents/soundHeaderComponent';
import SoundFavoriteComponent from '../../../components/tiktokComponents/soundFavoriteComponent';

const Discover = () => <SoundDiscoverComponent />;
const Favourities = () => <SoundFavoriteComponent />;

const initialLayout = {width: Dimensions.get('window').width};
export default function SoundMainScreen({navigation}) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Discover'},
    {key: 'second', title: 'Favourities'},
  ]);

  const renderScene = SceneMap({
    first: Discover,
    second: Favourities,
  });

  return (
    <View style={styles.wrapperStyle}>
      <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
      <SoundHeaderComponent onPressCross={() => navigation.goBack()} />

      <TabView
        renderTabBar={props => (
          <TabBar
            onPressMenuIcon={() => this.props.navigation.navigate('')}
            labelStyle={{fontSize: MEDIUM, fontWeight: '700'}}
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
