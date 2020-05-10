import EmojiBoard from 'react-native-emoji-board';
import React, {PureComponent} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';

const EmojiComponent: () => React$Node = () => {
  const [show, setShow] = useState(false);
  const onClick = emoji => {
    console.log(emoji);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity onPress={() => setShow(!show)}>
        <Text>click here</Text>
      </TouchableOpacity>
      <EmojiBoard showBoard={show} onClick={onClick} />
    </>
  );
};
