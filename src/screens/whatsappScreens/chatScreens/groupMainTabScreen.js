import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, StatusBar} from 'react-native';
import GroupProfileHeaderComponent from '../../../components/whatsappComponents/groupProfileHeaderComponent';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import GroupMemberScreen from './groupMemberScreen';
import GroupMediaScreen from './groupMediaScreen';
import GroupFileScreen from './groupFilesScreen';
import GroupLinkScreen from './groupLinkScreen';
import GroupAudioScreen from './groupAudioScreen';
import {STATUS_BAR_COLOR, VIEW_BG_COLOR} from '../../../themes/colors';

const Media = () => <GroupMediaScreen />;
const Files = () => <GroupFileScreen />;
const Links = () => <GroupLinkScreen />;
const Audio = () => <GroupAudioScreen />;

const initialLayout = {width: Dimensions.get('window').width};
export default function GroupMainTabScreen({navigation}) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Members'},
    {key: 'second', title: 'Media'},
    {key: 'third', title: 'Files'},
    {key: 'fourth', title: 'Links'},
    {key: 'fifth', title: 'Audio'},
  ]);

  return (
    <View style={styles.wrapperStyle}>
      <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="light-content" />
      <GroupProfileHeaderComponent
        onPressBackArrow={() => navigation.goBack()}
      />
      <View style={{height: 20}} />
      <TabView
        renderTabBar={props => (
          <TabBar
            scrollEnabled={true}
            onPressMenuIcon={() => this.props.navigation.navigate('')}
            labelStyle={{
              fontSize: 13,
              fontWeight: 'bold',
            }}
            ovescroll={true}
            indicatorStyle={{backgroundColor: '#12738C'}}
            inactiveColor={'#A4A4A4'}
            activeColor={VIEW_BG_COLOR}
            tabStyle={{backgroundColor: 'white', fontSize: 10, width: 100}}
            {...props}
          />
        )}
        navigationState={{index, routes}}
        renderScene={SceneMap({
          first: () => <GroupMemberScreen navigation={navigation} />,
          second: Media,
          third: Files,
          fourth: Links,
          fifth: Audio,
        })}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
  },
});
