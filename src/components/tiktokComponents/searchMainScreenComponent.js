import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SMALL, EXTRA_LARGE} from '../../themes/fonts';
import VideoComponent from './videoComponent';

class SearchMainScreenComponent extends Component {
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <View style={styles.mainViewStyle}>
          <View style={styles.flexStyle}>
            <View style={styles.viewStyle}>
              <Text style={{fontSize: EXTRA_LARGE}}>#</Text>
            </View>
          </View>
          <View style={{flex: 4}}>
            <View
              style={[
                styles.flexStyle,
                {
                  alignItems: 'flex-start',
                  justifyContent: 'flex-end',
                },
              ]}>
              <Text style={styles.nameTextStyle}>
                {this.props.upperText
                  ? this.props.upperText
                  : 'smartercoollife'}
              </Text>
            </View>

            <View style={{height: 2}} />
            <View
              style={[
                styles.flexStyle,
                {
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                },
              ]}>
              <Text style={{fontSize: SMALL}}>
                {this.props.lowerText
                  ? this.props.lowerText
                  : 'Trending Hashtag'}
              </Text>
            </View>
          </View>

          <View style={[styles.flexStyle, {flex: 1.5, alignItems: 'flex-end'}]}>
            <TouchableOpacity style={styles.buttonStyle1}>
              <View style={[styles.flexStyle, {flex: 3, alignItems: 'center'}]}>
                <Text style={{fontSize: SMALL, fontWeight: '700'}}>29.7M</Text>
              </View>
              <View style={[styles.flexStyle, {alignItems: 'center'}]}>
                <Image
                  source={require('../../Icons/arrowRightBlackIcon.png')}
                  style={{height: 10, width: 7}}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.videosViewStyle}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <VideoComponent
              videoHeight={150}
              videoWidth={110}
              hideVideoLikes
              onPress={() => this.props.navigation.navigate('SearchScreen')}
            />
            <View style={{width: 1}} />
            <VideoComponent
              videoHeight={150}
              videoWidth={110}
              hideVideoLikes
              onPress={() => this.props.navigation.navigate('SearchScreen')}
            />
            <View style={{width: 1}} />
            <VideoComponent
              videoHeight={150}
              videoWidth={110}
              hideVideoLikes
              onPress={() => this.props.navigation.navigate('SearchScreen')}
            />
            <View style={{width: 1}} />
            <VideoComponent
              videoHeight={150}
              videoWidth={110}
              hideVideoLikes
              onPress={() => this.props.navigation.navigate('SearchScreen')}
            />
            <View style={{width: 1}} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default SearchMainScreenComponent;

const styles = StyleSheet.create({
  wrapperStyle: {
    height: 230,
    backgroundColor: '#F6F6F6',
  },
  mainViewStyle: {
    height: 80,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  viewStyle: {
    height: 40,
    width: 40,
    borderRadius: 100,
    borderColor: '#E9E9E9',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameTextStyle: {
    fontSize: SMALL,
    fontWeight: '700',
  },
  buttonStyle1: {
    height: 28,
    width: 60,
    borderRadius: 3,
    backgroundColor: '#D4D4D4',
    flexDirection: 'row',
  },
  videosViewStyle: {
    height: 150,
    width: '90%',
    alignSelf: 'center',
  },
});
