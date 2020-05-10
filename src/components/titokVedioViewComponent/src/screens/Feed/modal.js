import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import greyHeart from '../../../../../Icons/heart-o.png';
import redHeart from '../../../assets/red-heart.png';
import {STATUS_BAR_COLOR, TEXT_NOTE_COLOR} from '../../../../../themes/colors';
import {SMALL, EXTRA_SMALL} from '../../../../../themes/fonts';
import TiktokMsgModal from '../../../../../components/tiktokComponents/tiktokMsgReplyComponent';

function ModalComponent() {
  const [heart, toggleHeart] = useState(false);
  const [replyBox, setReplyBox] = useState(false);

  function handleHeart() {
    toggleHeart(!heart);
  }
  function handleReply() {
    setReplyBox(true);
  }

  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={handleReply}
        style={{
          height: 45,
          width: '95%',
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <View style={styles.flexStyle1}>
          <Image
            source={require('../../../../../Images/image.jpg')}
            style={{height: 35, width: 35, borderRadius: 100}}
          />
        </View>
        <View style={[styles.flexStyle1, {flex: 5}]}>
          <Text style={{fontSize: EXTRA_SMALL, fontWeight: '700'}}>Farhan</Text>
          <View style={{height: 5}} />
          <Text style={{fontSize: EXTRA_SMALL}}>
            yes mother love cannot defeat anything 17h
          </Text>
        </View>
        <View style={styles.flexStyle}>
          <TouchableOpacity onPress={handleHeart}>
            <Image
              // source={require('../../../../../Icons/heartIcon.png')}
              source={heart ? redHeart : greyHeart}
              style={{height: 14, width: 15}}
            />
          </TouchableOpacity>
          <View style={{height: 2}} />
          <Text
            style={{
              fontSize: EXTRA_SMALL,
              color: heart ? '#FE2B54' : TEXT_NOTE_COLOR,
              paddingRight: 2,
            }}>
            56
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{height: 15}} />
      {replyBox ? <TiktokMsgModal /> : false}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  flexStyle1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default ModalComponent;
