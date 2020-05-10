import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import {
  WHITE_COLOR,
  TEXT_NOTE_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import SearchScreensHeaderComponent from '../../../components/tiktokComponents/searchScreensHeaderComponent';
import {EXTRA_LARGE, SMALL, MEDIUM} from '../../../themes/fonts';
import VideoComponent from '../../../components/tiktokComponents/videoComponent';

class SearchFirstScreen extends Component {
  state = {
    array: [{id: 1}, {id: 2}, {id: 3}],
  };
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <SearchScreensHeaderComponent
          showBackIcon
          onPressBack={() => this.props.navigation.goBack()}
        />

        <View style={styles.viewStyle}>
          <View style={[styles.flexStyle, {flex: 1.2}]}>
            <Image
              source={require('../../../Images/image.jpg')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={{width: 20}} />
          <View style={{flex: 2}}>
            <View style={[styles.flexStyle, {justifyContent: 'flex-start'}]}>
              <Text style={styles.nameTextStyle}>#pkcricketfever</Text>
              <View style={{height: 3}} />
              <Text style={{color: TEXT_NOTE_COLOR, fontSize: SMALL}}>
                906.1M views
              </Text>
            </View>
            <View style={[styles.flexStyle, {justifyContent: 'flex-end'}]}>
              <TouchableOpacity style={styles.buttonViewStyle}>
                <View style={[styles.flexStyle, {alignItems: 'center'}]}>
                  <Image
                    source={require('../../../Icons/savedIcon.png')}
                    style={{height: 15, width: 12}}
                  />
                </View>
                <View
                  style={[styles.flexStyle, {flex: 4, alignItems: 'center'}]}>
                  <Text>Add to Favorite</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{height: 20}} />
        <View style={styles.textViewStyle}>
          <Text style={{color: TEXT_NOTE_COLOR}}>
            Wherever you go, no matter what the weather, always bring your own
            sunshine." "In every walk with nature one receives far more than he
            seeks." "Over every mountain there is a path, although it may not be
            seen from the valley." "Every flower is a soul blossoming in nature.
          </Text>
        </View>
        <View style={{height: 20}} />

        <View
          style={{
            height: 150,
            flexDirection: 'row',
          }}>
          <View style={[styles.flexStyle, {alignItems: 'center'}]}>
            <VideoComponent videoHeight={150} videoWidth={120} />
          </View>
          <View style={[styles.flexStyle, {alignItems: 'center'}]}>
            <VideoComponent videoHeight={150} videoWidth={120} />
          </View>
          <View style={[styles.flexStyle, {alignItems: 'center'}]}>
            <VideoComponent videoHeight={150} videoWidth={120} />
          </View>
        </View>
        <View style={{height: 3}} />
        <View
          style={{
            height: 160,
            flexDirection: 'row',
          }}>
          <View style={[styles.flexStyle, {alignItems: 'center'}]}>
            <VideoComponent videoHeight={160} videoWidth={120} />
          </View>
          <View style={[styles.flexStyle, {alignItems: 'center'}]}>
            <VideoComponent videoHeight={160} videoWidth={120} />
          </View>
          <View style={[styles.flexStyle, {alignItems: 'center'}]}>
            <VideoComponent videoHeight={160} videoWidth={120} />
          </View>
        </View>
        {/* <FlatList
          showsVerticalScrollIndicator={false}
          style={{
            width: '90%',
            alignSelf: 'center',
          }}
          data={this.state.array}
          renderItem={({item}) => (
            <View>
              <VideoComponent videoHeight={150} videoWidth={120} />
            </View>
          )}
          numColumns={3}
          keyExtractor={item => item.id}
        /> */}
      </View>
    );
  }
}

export default SearchFirstScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  nameTextStyle: {
    fontSize: MEDIUM,
    fontWeight: '700',
  },
  buttonViewStyle: {
    height: 30,
    width: 150,
    borderColor: '#A4A4A4',
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 3,
  },
  viewStyle: {
    height: 140,
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  textViewStyle: {
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
