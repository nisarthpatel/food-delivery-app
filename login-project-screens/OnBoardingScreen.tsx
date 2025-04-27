import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useRef} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RootStackParamList} from '../routes/routes';
import TextCommon from '../common/TextCommon';
import ButtonCommon from '../common/ButtonCommon';

type OpeningProps = NativeStackScreenProps<
  RootStackParamList,
  'OnBoardingScreen'
>;

const OnBoardingScreen = ({navigation}: OpeningProps) => {
  const flatListRef = useRef<FlatList>(null);
  const nextPress = (index: number) => {
    if (index < 2) {
      flatListRef?.current?.scrollToIndex({
        animated: true,
        index: index + 1,
      });
    } else if (index === 2) {
      skipToLogin();
    }
  };
  const skipToLogin = () => {
    navigation.navigate('LoginScreen');
  };
  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <View style={styles.imageContext}>
        <Image style={styles.imageStyles} source={{uri: item.imgUrl}} />
        <View>
          <TextCommon
            variant="large"
            text={item.titleText}
            style={styles.largeText}
          />
          <TextCommon
            style={styles.smallv2Text}
            variant="smallv2"
            text={item.descriptionText}
          />
        </View>
        <View style={styles.inlineDots}>
          <View style={index === 0 ? styles.activeDot : styles.dot} />;
          <View style={index === 1 ? styles.activeDot : styles.dot} />;
          <View style={index === 2 ? styles.activeDot : styles.dot} />;
        </View>
        <ButtonCommon title={item.btnTxt} onPress={() => nextPress(index)} />
        <View style={styles.skipStyles}>
          <View style={styles.leftBorderStyles} />
          <Pressable onPress={skipToLogin}>
            <Text>Skip</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      ref={flatListRef}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
    />
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  leftBorderStyles: {
    borderBottomWidth: 1,
    width: 340,
    paddingTop: 2,
  },
  skipStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  inlineDots: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  activeDot: {
    backgroundColor: 'orange',
    width: 10,
    height: 10,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 10,
    height: 10,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  imageContext: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    backgroundColor: '#ffffff',
  },
  smallv2Text: {
    textAlign: 'center',
    marginHorizontal: 30,
    fontWeight: 500,
    lineHeight: 25,
  },
  imageStyles: {
    margin: 10,
    borderRadius: 20,
    height: 480,
    width: 380,
  },
  largeText: {
    fontWeight: '900',
    textAlign: 'center',
    paddingTop: 20,
  },
});

const data = [
  {
    id: 1,
    btnTxt: 'Next',
    titleText: 'Best Coffee',
    descriptionText: 'Lorem ipsum odor amet, consectetuer adipiscing elit.',
    imgUrl:
      'https://mobimg.b-cdn.net/lwallpaper_img/chocolate_by_4k_wallpapers/real/1_chocolate_by_4k_wallpapers.jpg',
  },
  {
    id: 2,
    btnTxt: 'Next',
    titleText: '1 Cup Drink',
    descriptionText: 'Lorem ipsum odor amet, consectetuer adipiscing elit.',
    imgUrl:
      'https://cdn.pixabay.com/photo/2022/01/14/19/21/chocolate-6938015_1280.jpg',
  },
  {
    id: 3,
    btnTxt: 'Get Start',
    titleText: 'Working Power',
    descriptionText: 'Lorem ipsum odor amet, consectetuer adipiscing elit.',
    imgUrl:
      'https://cdn.pixabay.com/photo/2018/01/12/16/31/nougat-3078581_960_720.jpg',
  },
];
