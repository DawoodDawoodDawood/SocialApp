import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import HeaderComponent from '../../../components/whatsappComponents/headerComponent';
import NewChatComponent from '../../../components/whatsappComponents/newChatComponent';
import {
  TEXT_NOTE_COLOR,
  WHITE_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
class NewBroadcastScreen extends Component {
  state = {select: false};
  toggle() {
    this.setState({select: !this.state.select});
  }
  render() {
    return (
      <View style={styles.wrapperStyle}>
        <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
        <HeaderComponent
          title={'New Broadcasts'}
          showTitleDescription
          showNextButton
          navigation={this.props.navigation}
          onPressNext={() =>
            this.props.navigation.navigate('NewBroadcastSecondScreen')
          }
        />

        {this.state.select ? (
          <React.Fragment>
            <View style={styles.viewStyle}>
              <View style={styles.flexStyle}>
                <View
                  style={{
                    height: 30,
                    backgroundColor: '#F6F6F6',
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 35,
                  }}>
                  <Image
                    source={require('../../../Images/personImage.jpg')}
                    style={{
                      height: 35,
                      width: 35,
                      borderRadius: 100,
                    }}
                  />
                </View>
              </View>
              <View
                style={[styles.flexStyle, {flex: 7, alignItems: 'flex-start'}]}>
                <View style={styles.nameTextViewStyle}>
                  <Text style={{}}>Selected Person Name</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: TEXT_NOTE_COLOR,
                width: '100%',
              }}
            />
          </React.Fragment>
        ) : (
          false
        )}

        <ScrollView style={{flexGrow: 1}}>
          <TouchableOpacity onPress={() => this.toggle()}>
            <NewChatComponent
              upperText={'Muhammad Salman'}
              showOnline
              hideOnlineStatus
              readyForBroadcast={this.state.select ? true : false}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <NewChatComponent upperText={'Muhammad Ali'} hideOnlineStatus />
          </TouchableOpacity>
          <TouchableOpacity>
            <NewChatComponent
              upperText={'Muhammad Faizan'}
              showOnline
              hideOnlineStatus
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <NewChatComponent
              upperText={'Muhammad Salman'}
              showOnline
              hideOnlineStatus
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <NewChatComponent upperText={'Muhammad Salman'} hideOnlineStatus />
          </TouchableOpacity>

          <TouchableOpacity>
            <NewChatComponent
              upperText={'Muhammad Ali'}
              showOnline
              hideOnlineStatus
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default NewBroadcastScreen;

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  viewStyle: {
    height: 50,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  nameTextViewStyle: {
    height: 30,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});
