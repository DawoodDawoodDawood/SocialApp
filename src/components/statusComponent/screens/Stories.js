import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';

import CubeNavigationHorizontal from './cubeNavigationHorizontal';
import AllStories from '../constants/AllStories';
import StoryContainer from '../components/StoryContainer';
import FriendStatusList from '../components/friendsStatusList';
import {
  TEXT_BLUE_COLOR,
  TEXT_NOTE_COLOR,
  WHITE_COLOR,
  VIEW_BG_COLOR,
  STATUS_BAR_COLOR,
} from '../../../themes/colors';
import {MEDIUM} from '../../../themes/fonts';

const Stories = (props) => {
  const [isModelOpen, setModel] = useState(false);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [currentScrollValue, setCurrentScrollValue] = useState(0);
  const [stories, setstories] = useState(0);
  const modalScroll = useRef(null);

  const onStorySelect = (index) => {
    setCurrentUserIndex(index);
    setModel(true);
  };

  const onStoryClose = () => {
    setModel(false);
  };
  const onStories = (length) => {
    console.log(length);
    setstories(length);
  };
  const onStoryNext = (isScroll) => {
    const newIndex = currentUserIndex + 1;
    if (AllStories.length - 1 > currentUserIndex) {
      setCurrentUserIndex(newIndex);
      if (!isScroll) {
        modalScroll.current.scrollTo(newIndex, true);
      }
    } else {
      setModel(false);
    }
  };

  const onStoryPrevious = (isScroll) => {
    const newIndex = currentUserIndex - 1;
    if (currentUserIndex > 0) {
      setCurrentUserIndex(newIndex);
      if (!isScroll) {
        modalScroll.current.scrollTo(newIndex, true);
      }
    }
  };

  const onScrollChange = (scrollValue) => {
    if (currentScrollValue > scrollValue) {
      onStoryNext(true);
      console.log('next');
      setCurrentScrollValue(scrollValue);
    }
    if (currentScrollValue < scrollValue) {
      onStoryPrevious();
      console.log('previous');
      setCurrentScrollValue(scrollValue);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
      <FlatList
        data={AllStories}
        renderItem={({item, index}) => (
          <React.Fragment>
            <FriendStatusList
              onStorySelect={() => onStorySelect(index)}
              userData={item}
            />
          </React.Fragment>
        )}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={isModelOpen}
        style={styles.modal}
        onShow={() => {
          if (currentUserIndex > 0) {
            modalScroll.current.scrollTo(currentUserIndex, false);
          }
        }}
        onRequestClose={onStoryClose}>
        <CubeNavigationHorizontal
          animated={false}
          callBackAfterSwipe={(g) => onScrollChange(g)}
          ref={modalScroll}
          responderCaptureDx={30}
          style={styles.container}>
          {AllStories.map((item, index) => (
            <StoryContainer
              onClose={onStoryClose}
              onStoryNext={onStoryNext}
              onStoryPrevious={onStoryPrevious}
              user={item}
              isNewStory={index !== currentUserIndex}
            />
          ))}
        </CubeNavigationHorizontal>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    width: 66,
    margin: 4,
    height: 66,
    borderRadius: 33,
    borderWidth: 2,
    borderColor: '#ffd835',
  },
  modal: {
    flex: 1,
  },
  mainViewStyle: {
    height: 70,
    width: '93%',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: WHITE_COLOR,
  },
  onlineStatusStyle: {
    height: 12,
    width: 12,
    borderRadius: 20,
    backgroundColor: '#50DAFE',
    marginBottom: -10,
    marginRight: -35,
    zIndex: 999,
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginLeft: 5,
    // borderWidth: 2,
    // borderColor: VIEW_BG_COLOR,
  },
  nameTextStyle: {
    fontSize: MEDIUM,
    fontWeight: '300',
    paddingLeft: 5,
  },
  underLineStyle: {height: 1, backgroundColor: '#F5F5F5'},
  msgTimeTextStyle: {
    fontSize: MEDIUM,
    fontWeight: 'bold',
    paddingLeft: 5,
    color: TEXT_NOTE_COLOR,
  },
  msgNumberViewStyle: {
    height: 25,
    borderRadius: 20,
    backgroundColor: VIEW_BG_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickViewStyle: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: '#43E243',
    marginTop: -20,
    marginRight: -50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Stories;
