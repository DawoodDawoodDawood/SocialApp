import React, {Component} from 'react';
import {Animated, Easing, Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// Whatsapp Screens
// -----Live Video Streaming Screens-----
import LiveVideoScreen from '../screens/whatsappScreens/videoScreens/liveVideoScreen';
import CameraScreen from '../screens/whatsappScreens/videoScreens/cameraScreen';

// -----Profile Screens-----
import EditProfileScreen from '../screens/whatsappScreens/profileScreen/editProfileScreen';
import AddBioScreen from '../screens/whatsappScreens/profileScreen/addBioScreen';

// -----Call Screens-----
import CreateCallScreen from '../screens/whatsappScreens/callScreens/createCallScreen';
import NewGroupCallScreen from '../screens/whatsappScreens/callScreens/newGroupCallScreen';
import AudioCallScreen from '../screens/whatsappScreens/callScreens/audioCallScreen';
import VideoCallScreen from '../screens/whatsappScreens/callScreens/videoCallScreen';
import GoToContactScreen from '../screens/whatsappScreens/callScreens/contactScreen';

// -----Chat Screens-----
import HomePageWithMenuFirstScreen from '../screens/whatsappScreens/chatScreens/homePageWithMenuScreen1';
import HomePageWithMenuSecondScreen from '../screens/whatsappScreens/chatScreens/homePageWithMenuScreen2';
import ChatHomePageWithMenuScreen from '../screens/whatsappScreens/chatScreens/chatPageWithMenuScreen';
import ChatCameraScreen from '../screens/whatsappScreens/chatScreens/chatCameraScreen';
import GroupChatScreen from '../screens/whatsappScreens/chatScreens/groupChatScreen';
import GroupMainTabScreen from '../screens/whatsappScreens/chatScreens/groupMainTabScreen';
import NewChatScreen from '../screens/whatsappScreens/chatScreens/newChatScreen';
import NewMessagesScreen from '../screens/whatsappScreens/chatScreens/newMessagesScreen';
import NewBroadcastScreen from '../screens/whatsappScreens/chatScreens/newBroadcastScreen';
import NewBroadcastSecondScreen from '../screens/whatsappScreens/chatScreens/newBroadcastSecondScreen';
import ArchiveChatScreen from '../screens/whatsappScreens/chatScreens/archiveChatScreen';
import StarredMessagesScreen from '../screens/whatsappScreens/chatScreens/starredMessageScreen';
import NewGroupFirstScreen from '../screens/whatsappScreens/chatScreens/newGroupFirstScreen';
import NewGroupSecondScreen from '../screens/whatsappScreens/chatScreens/newGroupSecondScreen';
import WhatsappFooterScreen from '../screens/whatsappScreens/footerTabScreen';
import AddStatusScreen from '../screens/whatsappScreens/statusScreens/addStatusScreen';
import BroadCastChatScreen from '../screens/whatsappScreens/chatScreens/broadcastChatScreen';

//Tiktok Screens
import TiktokFooterTabScreen from '../screens/tiktokScreens/tiktokFooterTabScreen';
import SearchScreen from '../screens/tiktokScreens/searchScreens/searchFirstScreen';
import InboxScreen from '../screens/tiktokScreens/searchScreens/searchSecondScreen';
import MessageFirstScreen from '../screens/tiktokScreens/msgScreens/msgFirstScreen';
import MessageSecondScreen from '../screens/tiktokScreens/msgScreens/msgSecondScreen';
import MessageDetailScreen from '../screens/tiktokScreens/msgScreens/msgDetailScreen';
import ProfileScreen from '../screens/tiktokScreens/profileScreens/profileScreen';
import FollowingFollowerScreen from '../screens/tiktokScreens/follower_followingScreens/follower_followingScreen';
import SaveVideoSoundScreen from '../screens/tiktokScreens/follower_followingScreens/followersVideo_SoundScreen';
import TiktokEditProfileScreen from '../screens/tiktokScreens/editProfileScreens/editProfileScreen';
import EditNameScreen from '../screens/tiktokScreens/editProfileScreens/editNameScreen';
import EditUsernameScreen from '../screens/tiktokScreens/editProfileScreens/editUsernameScreen';
import EditBioScreen from '../screens/tiktokScreens/editProfileScreens/editBioScreen';
import RecordingScreen from '../screens/tiktokScreens/recordingScreens/recordingScreen';
import SoundMainScreen from '../screens/tiktokScreens/soundScreens/soundMainScreen';
import SoundSecondScreen from '../screens/tiktokScreens/soundScreens/soundSecondScreen';
import FinalPostPageScreen from '../screens/tiktokScreens/finalPostPage';
import CreateAffectScreen from '../screens/tiktokScreens/recordingScreens/createAffect_Filter';
import ApplyAffectScreen from '../screens/tiktokScreens/recordingScreens/applyAffectScreen';
import VideoScreen from '../screens/tiktokScreens/videoScreen';
import FindFriendScreen from '../screens/tiktokScreens/findFriendScreen';

let SlideFromRight = (index, position, width) => {
  const translateX = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [width, 0],
  });

  return {transform: [{translateX}]};
};

let SlideFromBottom = (index, position, height) => {
  const translateY = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [height, 0],
  });

  return {transform: [{translateY}]};
};

let CollapseTransition = (index, position) => {
  const opacity = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0, 1, 1],
  });

  const scaleY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0, 1, 1],
  });

  return {
    opacity,
    transform: [{scaleY}],
  };
};

const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const {layout, position, scene} = sceneProps;
      const width = layout.initWidth;
      const height = layout.initHeight;
      const {index, route} = scene;
      const params = route.params || {};
      const transition = params.transition || 'default';
      return {
        default: SlideFromRight(index, position, width),
        bottomTransition: SlideFromBottom(index, position, height),
        collapseTransition: CollapseTransition(index, position),
      }[transition];
    },
  };
};

const AppNavigator = createStackNavigator(
  {
    WhatsappFooterScreen: {screen: WhatsappFooterScreen},
    NewMessagesScreen: {screen: NewMessagesScreen},
    NewBroadcastScreen: {screen: NewBroadcastScreen},
    NewBroadcastSecondScreen: {screen: NewBroadcastSecondScreen},
    NewGroupFirstScreen: {screen: NewGroupFirstScreen},
    NewGroupSecondScreen: {screen: NewGroupSecondScreen},
    ChatHomePageWithMenuScreen: {screen: ChatHomePageWithMenuScreen},
    GroupChatScreen: {screen: GroupChatScreen},
    GroupMainTabScreen: {screen: GroupMainTabScreen},
    NewChatScreen: {screen: NewChatScreen},
    CreateCallScreen: {screen: CreateCallScreen},
    NewGroupCallScreen: {screen: NewGroupCallScreen},
    LiveVideoScreen: {screen: LiveVideoScreen},
    CameraScreen: {screen: CameraScreen},
    EditProfileScreen: {screen: EditProfileScreen},
    AddBioScreen: {screen: AddBioScreen},
    ArchiveChatScreen: {screen: ArchiveChatScreen},
    ChatCameraScreen: {screen: ChatCameraScreen},
    AddStatusScreen: {screen: AddStatusScreen},
    AudioCallScreen: {screen: AudioCallScreen},
    VideoCallScreen: {screen: VideoCallScreen},
    GoToContactScreen: {screen: GoToContactScreen},
    BroadCastChatScreen: {screen: BroadCastChatScreen},
    // tiktokScreens
    TiktokFooterTabScreen: {screen: TiktokFooterTabScreen},
    SearchScreen: {screen: SearchScreen},
    InboxScreen: {screen: InboxScreen},
    MessageFirstScreen: {screen: MessageFirstScreen},
    MessageSecondScreen: {screen: MessageSecondScreen},
    MessageDetailScreen: {screen: MessageDetailScreen},
    ProfileScreen: {screen: ProfileScreen},
    FollowingFollowerScreen: {screen: FollowingFollowerScreen},
    SaveVideoSoundScreen: {screen: SaveVideoSoundScreen},
    TiktokEditProfileScreen: {screen: TiktokEditProfileScreen},
    EditNameScreen: {screen: EditNameScreen},
    EditUsernameScreen: {screen: EditUsernameScreen},
    EditBioScreen: {screen: EditBioScreen},
    // TiktokView: {screen: TiktokView},
    RecordingScreen: {screen: RecordingScreen},
    SoundMainScreen: {screen: SoundMainScreen},
    CreateAffectScreen: {screen: CreateAffectScreen},
    ApplyAffectScreen: {screen: ApplyAffectScreen},
    FinalPostPageScreen: {screen: FinalPostPageScreen},
    VideoScreen: {screen: VideoScreen},
    FindFriendScreen: {screen: FindFriendScreen},
  },
  {
    initialRouteName: 'WhatsappFooterScreen',
    headerMode: 'none',
    // transitionConfig: TransitionConfiguration,
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
