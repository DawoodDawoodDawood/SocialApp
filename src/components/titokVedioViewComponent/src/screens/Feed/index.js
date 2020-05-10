import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  Alert,
  TextInput,
  StatusBar,
} from 'react-native';
import Modal from 'react-native-modalbox';
import TextTicker from 'react-native-text-ticker';
import VerticalViewPager from 'react-native-vertical-view-pager';

const {width, height = height - 50} = Dimensions.get('window');

import profile from '../../../assets/perfil-marlon.jpg';
import iconPlus from '../../../assets/iconplus.png';
import whiteHeart from '../../../assets/white-heart-fill.png';
import greyHeart from '../../../../../Icons/heart-o.png';
import redHeart from '../../../assets/red-heart.png';
import comment from '../../../assets/comment.png';
import iconMusic from '../../../assets/music.png';
import whatsapp from '../../../../../Icons/socialShareIcon.png';
import cancle from '../../../../../Icons/cancleIcon.png';
import Video from 'react-native-video';
import Share from 'react-native-share';
import {
  STATUS_BAR_COLOR,
  TEXT_NOTE_COLOR,
  WHITE_COLOR,
} from '../../../../../themes/colors';
import {SMALL, EXTRA_SMALL} from '../../../../../themes/fonts';
import ModalComponent from './modal';

const url = 'https://awesome.contents.com/';
const title = 'Awesome Contents';
const message = 'Please check this out.';
const icon = 'data:<data_type>/<file_extension>;base64,<base64_data>';
const options = Platform.select({
  ios: {
    activityItemSources: [
      {
        // For sharing url with custom title.
        placeholderItem: {type: 'url', content: url},
        item: {
          default: {type: 'url', content: url},
        },
        subject: {
          default: title,
        },
        linkMetadata: {originalUrl: url, url, title},
      },
      {
        // For sharing text.
        placeholderItem: {type: 'text', content: message},
        item: {
          default: {type: 'text', content: message},
          message: null, // Specify no text to share via Messages app.
        },
        linkMetadata: {
          // For showing app icon on share preview.
          title: message,
        },
      },
      {
        // For using custom icon instead of default text icon at share preview when sharing with message.
        placeholderItem: {
          type: 'url',
          content: icon,
        },
        item: {
          default: {
            type: 'text',
            content: `${message} ${url}`,
          },
        },
        linkMetadata: {
          title: message,
          icon: icon,
        },
      },
    ],
  },
  default: {
    title,
    subject: title,
    message: `${message} ${url}`,
  },
});
function Feed({navigation}) {
  const [feed, setfeed] = useState([]);
  const [liked, setLiked] = useState(false);
  const [isModelOpen, setModel] = useState(false);
  const [heart, toggleHeart] = useState(false);
  const [following, setFollowing] = useState(false);
  const [forYou, setForYou] = useState(true);
  const [a] = useState([
    {author: {name: 'dawood'}},
    {author: {name: 'ali'}},
    {author: {name: 'ahmand'}},
  ]);
  function handleLike() {
    setLiked(!liked);
  }
  function handleFollowing() {
    setFollowing(true);
    setForYou(false);
  }
  function handleForYou() {
    setFollowing(false);
    setForYou(true);
  }

  function handleHeart() {
    toggleHeart(!heart);
  }
  const onReadMoreClose = () => {
    setModel(false);
  };

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />

      {forYou ? (
        <VerticalViewPager showsVerticalScrollIndicator={false}>
          {a.map(item => (
            <View key={item.id} style={[styles.page_container, styles.post]}>
              <Video
                source={{
                  uri:
                    'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                style={styles.backgroundVideo}
                muted={false}
                repeat={true}
                resizeMode={'stretch'}
                rate={1.0}
                isLooping
                ignoreSilentSwitch={'obey'}
              />

              <View style={styles.upperBarViewStyle}>
                <View style={[styles.flexStyle, {alignItems: 'center'}]}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                      source={require('../../../../../Icons/arrowBackWhiteIcon.png')}
                      style={{height: 16, width: 11}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{flex: 5, flexDirection: 'row'}}>
                  <View style={styles.flexStyle}>
                    <TouchableOpacity onPress={handleFollowing}>
                      {following ? (
                        <Text style={styles.fontStyle1}>Following</Text>
                      ) : (
                        <Text style={styles.fontStyle2}>Following</Text>
                      )}
                    </TouchableOpacity>
                  </View>
                  <View style={{width: 8}} />
                  <View
                    style={{
                      width: 1,
                      height: 7,
                      alignSelf: 'center',
                      backgroundColor: '#8D8B86',
                    }}
                  />
                  <View style={{width: 8}} />
                  <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
                    <TouchableOpacity onPress={handleForYou}>
                      {forYou ? (
                        <Text style={styles.fontStyle1}>For You</Text>
                      ) : (
                        <Text style={styles.fontStyle2}>For You</Text>
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{flex: 1}}></View>
              </View>
              <View style={styles.content}>
                <View style={styles.InnerContent}>
                  <TouchableOpacity>
                    <Text style={styles.name}>@dawoodSadddique</Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity>
                  <Text style={styles.description} numberOfLines={5}>
                    {item.description}
                  </Text>
                </TouchableOpacity> */}
                  <Text style={styles.hashtags}>
                    #amir #lukman #ali #standwithkhasmir #stayhomestaysafe #amir
                    #lukman #ali #standwithkhasmir #stayhomestaysafe
                  </Text>
                  {/* <TouchableOpacity>
                    <Text style={styles.translate}>@dawoodSadddique</Text>
                  </TouchableOpacity> */}
                  <TouchableOpacity style={styles.componentMusic}>
                    <View style={styles.imageIconMusic}>
                      <Image style={styles.iMusic} source={iconMusic} />
                    </View>
                    <TextTicker
                      style={styles.nameMusic}
                      duration={4000}
                      loop
                      bounce={false}
                      repeatSpacer={70}
                      marqueeDelay={1000}
                      shouldAnimateTreshold={40}>
                      I Don’t Care - Ed Sheeran Part Justin Bieber
                    </TextTicker>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.contentIcon}>
                <View style={styles.contentIconProfile}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ProfileScreen')}>
                    <Image
                      resizeMode={'stretch'}
                      source={require('../../../../../Images/person.png')}
                      style={styles.iconProfile}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={iconPlus} style={styles.iconPlusProfile} />
                  </TouchableOpacity>
                </View>
                <View style={styles.iconsAction}>
                  <View style={styles.contentIconAction}>
                    <TouchableOpacity onPress={handleLike}>
                      <Image
                        source={liked ? redHeart : whiteHeart}
                        style={[styles.iconAction, {width: 33, height: 33}]}
                      />
                    </TouchableOpacity>
                    <Text style={styles.textActions}>53.1K</Text>
                  </View>
                  <View style={{height: 3}} />
                  <TouchableOpacity
                    style={styles.contentIconAction}
                    onPress={() => setModel(true)}>
                    <Image source={comment} style={styles.iconAction} />
                    <Text style={styles.textActions}>208</Text>
                  </TouchableOpacity>
                  <View style={{height: 3}} />
                  <TouchableOpacity
                    style={styles.contentIconAction}
                    onPress={() => Share.open(options)}>
                    <Image
                      source={whatsapp}
                      resizeMode={'stretch'}
                      style={styles.iconWhatsapp}
                    />
                    <Text style={styles.textActions}>272</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.iconsMusic}>
                  <TouchableOpacity>
                    <Image
                      source={{uri: item.author.avatar}}
                      style={styles.iconMusic}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </VerticalViewPager>
      ) : (
        <VerticalViewPager showsVerticalScrollIndicator={false}>
          {a.map(item => (
            <View key={item.id} style={[styles.page_container, styles.post]}>
              <Video
                source={{
                  uri:
                    'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                style={styles.backgroundVideo}
                muted={false}
                repeat={true}
                resizeMode={'stretch'}
                rate={1.0}
                isLooping
                ignoreSilentSwitch={'obey'}
              />

              <View style={styles.upperBarViewStyle}>
                <View style={[styles.flexStyle, {alignItems: 'center'}]}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                      source={require('../../../../../Icons/arrowBackWhiteIcon.png')}
                      style={{height: 16, width: 11}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{flex: 5, flexDirection: 'row'}}>
                  <View style={styles.flexStyle}>
                    <TouchableOpacity onPress={handleFollowing}>
                      {following ? (
                        <Text style={styles.fontStyle1}>Following</Text>
                      ) : (
                        <Text style={styles.fontStyle2}>Following</Text>
                      )}
                    </TouchableOpacity>
                  </View>
                  <View style={{width: 8}} />
                  <View
                    style={{
                      width: 1,
                      height: 7,
                      alignSelf: 'center',
                      backgroundColor: '#8D8B86',
                    }}
                  />
                  <View style={{width: 8}} />
                  <View style={[styles.flexStyle, {alignItems: 'flex-start'}]}>
                    <TouchableOpacity onPress={handleForYou}>
                      {forYou ? (
                        <Text style={styles.fontStyle1}>For You</Text>
                      ) : (
                        <Text style={styles.fontStyle2}>For You</Text>
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{flex: 1}}></View>
              </View>
              <View style={styles.content}>
                <View style={styles.InnerContent}>
                  <TouchableOpacity>
                    <Text style={styles.name}>@farhanakram</Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity>
                  <Text style={styles.description} numberOfLines={5}>
                    {item.description}
                  </Text>
                </TouchableOpacity> */}
                  <Text style={styles.hashtags}>
                    #standwithkhasmir #stayhomestaysafe
                  </Text>
                  {/* <TouchableOpacity>
                    <Text style={styles.translate}>@dawoodSadddique</Text>
                  </TouchableOpacity> */}
                  <TouchableOpacity style={styles.componentMusic}>
                    <View style={styles.imageIconMusic}>
                      <Image style={styles.iMusic} source={iconMusic} />
                    </View>
                    <TextTicker
                      style={styles.nameMusic}
                      duration={4000}
                      loop
                      bounce={false}
                      repeatSpacer={70}
                      marqueeDelay={1000}
                      shouldAnimateTreshold={40}>
                      I Don’t Care - Ed Sheeran Part Justin Bieber
                    </TextTicker>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.contentIcon}>
                <View style={styles.contentIconProfile}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ProfileScreen')}>
                    <Image
                      resizeMode={'stretch'}
                      source={require('../../../../../Images/person.png')}
                      style={styles.iconProfile}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={iconPlus} style={styles.iconPlusProfile} />
                  </TouchableOpacity>
                </View>
                <View style={styles.iconsAction}>
                  <View style={styles.contentIconAction}>
                    <TouchableOpacity onPress={handleLike}>
                      <Image
                        source={liked ? redHeart : whiteHeart}
                        style={[styles.iconAction, {width: 33, height: 33}]}
                      />
                    </TouchableOpacity>
                    <Text style={styles.textActions}>53.1K</Text>
                  </View>
                  <View style={{height: 3}} />
                  <TouchableOpacity
                    style={styles.contentIconAction}
                    onPress={() => setModel(true)}>
                    <Image source={comment} style={styles.iconAction} />
                    <Text style={styles.textActions}>208</Text>
                  </TouchableOpacity>
                  <View style={{height: 3}} />
                  <TouchableOpacity
                    style={styles.contentIconAction}
                    onPress={() => Share.open(options)}>
                    <Image
                      source={whatsapp}
                      resizeMode={'stretch'}
                      style={styles.iconWhatsapp}
                    />
                    <Text style={styles.textActions}>272</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.iconsMusic}>
                  <TouchableOpacity>
                    <Image
                      source={{uri: item.author.avatar}}
                      style={styles.iconMusic}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </VerticalViewPager>
      )}

      <Modal
        transparent={true}
        style={styles.modal}
        position="bottom"
        isOpen={isModelOpen}
        onClosed={onReadMoreClose}>
        <View>
          <View style={{height: 40, flexDirection: 'row'}}>
            <View style={{flex: 1}} />
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: '700', fontSize: SMALL}}>
                2098 comments
              </Text>
            </View>
            <View style={styles.cancleView}>
              <TouchableOpacity onPress={() => setModel(false)}>
                <Image source={cancle} style={styles.cancle} />
              </TouchableOpacity>
            </View>
          </View>

          <ModalComponent />
          <ModalComponent />
          <ModalComponent />
          <ModalComponent />
        </View>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  cancleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },
  cancle: {height: 15, width: 15},
  container: {},
  post: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1,

    alignSelf: 'stretch',
    position: 'relative',
    bottom: 30,
  },
  upperBarViewStyle: {
    top: 50,
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    height: 40,
  },
  fontStyle1: {
    color: WHITE_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
  },
  fontStyle2: {
    color: '#8D8B86',
    fontSize: 14,
    fontWeight: 'bold',
  },
  page_container: {
    width,
    height: height,
  },
  video: {
    width: '100%',
    flex: 1,
    height: '100%',
  },
  videoPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modal: {
    width: '100%',
    height: '60%',

    borderTopLeftRadius: 20,

    borderTopRightRadius: 20,
  },
  header: {
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    left: 75,
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  spanCenterHeader: {color: 'white', fontSize: 10},
  textLeftHeader: {
    color: 'grey',
    paddingHorizontal: 10,
    fontSize: 20,
  },

  textRightHeader: {
    color: 'white',
    paddingHorizontal: 10,
    fontSize: 23,
    fontWeight: 'bold',
  },
  content: {
    width: '75%',
    position: 'absolute',
    left: 0,
    bottom: 50,
  },
  InnerContent: {
    width: '100%',
    position: 'relative',
    bottom: 0,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    flexDirection: 'column',
  },

  name: {color: 'white', marginVertical: 3, fontSize: 13, fontWeight: 'bold'},
  description: {color: 'white', marginTop: 2, fontSize: 13},
  hashtags: {color: 'white', fontWeight: '700', fontSize: 13},
  componentMusic: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    width: 200,
  },
  imageIconMusic: {
    marginRight: 15,
  },
  iMusic: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  nameMusic: {
    color: 'white',
    fontSize: 15,
  },
  translate: {
    fontWeight: '700',
    color: 'white',
    marginVertical: 5,
  },
  contentIcon: {
    width: '20%',
    position: 'absolute',
    bottom: 11,
    right: 0,
    alignItems: 'center',
  },
  contentIconProfile: {
    alignItems: 'center',
    marginTop: 10,
  },

  iconProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  iconPlusProfile: {
    height: 35,
    width: 25,
    position: 'relative',
    bottom: 20,
    resizeMode: 'contain',
  },
  flexStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  iconsAction: {
    alignItems: 'center',
    marginBottom: 20,
  },
  contentIconAction: {
    alignItems: 'center',
    marginBottom: 13,
  },
  iconAction: {
    height: 35,
    width: 35,
  },
  iconWhatsapp: {
    height: 30,
    width: 35,
  },
  textActions: {color: 'white', fontSize: EXTRA_SMALL},
  iconMusic: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  flexStyle1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export default Feed;
