import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

class ToggleBarComponent extends Component {
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
          height: 55,
          flexDirection: 'row',
        }}>
        <View
          style={[
            styles.flexStyle,
            {alignItems: 'flex-start', marginLeft: 15},
          ]}>
          <Text style={{fontSize: 14, fontWeight: '500'}}>
            {this.props.toggleText}
          </Text>
        </View>
        <View
          style={[styles.flexStyle, {alignItems: 'flex-end', marginRight: 17}]}>
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

export default ToggleBarComponent;

const styles = StyleSheet.create({
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
