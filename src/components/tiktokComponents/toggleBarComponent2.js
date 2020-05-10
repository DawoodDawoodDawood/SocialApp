import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

class ToggleBarComponent2 extends Component {
  state = {isOn: false, popupVisible: false};
  toggleSwitch() {
    this.setState({isOn: !this.state.isOn});
  }
  togglePopup() {
    this.setState({popupVisible: !this.state.popupVisible});
  }
  render() {
    return (
      <View
        style={{
          height: 50,
          width: '90%',
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
          <Image
            source={this.props.source}
            style={{
              height: this.props.height,
              width: this.props.width,
              marginLeft: 7,
            }}
          />
        </View>
        <View style={[styles.flexStyle, {alignItems: 'flex-start', flex: 6}]}>
          <Text style={{fontSize: 14, fontWeight: '500'}}>
            {this.props.toggleText}
          </Text>
        </View>
        <View style={[styles.flexStyle, {alignItems: 'flex-end'}]}>
          <ToggleSwitch
            isOn={this.state.isOn}
            onColor="lightgreen"
            offColor="gray"
            labelStyle={{color: 'red', fontWeight: '700'}}
            size="small"
            onToggle={() => this.toggleSwitch()}
          />
        </View>
      </View>
    );
  }
}

export default ToggleBarComponent2;

const styles = StyleSheet.create({
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
