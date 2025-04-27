import React from 'react';
import {
  Alert,
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import InputCommon from '../common/InputCommon';
import TextCommon from '../common/TextCommon';
import AllCoffees from '../coffeeproject/AllCoffees';
import {CoffeeData} from '../coffeeproject/CoffeeData';
import FilterIconSvg from '../svgs/FilterIconSvg';
import SearchIconSvg from '../svgs/SearchIconSvg';

type ItemProps = {title: string; id?: number};

const HomeScreen = ({navigation}: {navigation: any}) => {
  const Item = ({title, id}: ItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({item, id}: {item: any; id: number}) => {
    return (
      <Pressable onPress={() => Alert.alert('hi')}>
        <Item title={item.title} />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <LinearGradient
          colors={['#121212', '#222222', '#303030']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={{flex: 1}}>
          <TextCommon
            style={styles.locationTxt}
            text="Location"
            variant="smallv2"
          />
          <TextCommon
            style={styles.locationPlaceTxt}
            text="Kalupur, Ahmedabad"
            variant="smallv2"
          />
          <View style={styles.searchBarContainer}>
            <SearchIconSvg style={styles.searchIcon} />
            <InputCommon style={styles.searchBar} placeholder="Search coffee" />
            <FilterIconSvg style={styles.filterIcon} />
          </View>
          <View>
            <ImageBackground
              borderRadius={20}
              style={styles.imgStyles}
              source={require('../assets/bannerImgcoffeepromocode.png')}
            />
          </View>
        </LinearGradient>
      </View>
      <View style={styles.horizontalTxtContainer}>
        <FlatList
          data={CoffeeData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <AllCoffees />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    color: '#000000',
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  horizontalTxtContainer: {
    top: 50,
  },

  imgStyles: {
    height: '75%',
    width: '95%',
    top: 50,
    left: 10,
    marginHorizontal: 'auto',
  },
  filterIcon: {
    backgroundColor: '#c67c4e',
    width: '18%',
    borderRadius: 20,
    left: 10,
  },
  searchIcon: {
    marginTop: 5,
    marginHorizontal: 3,
  },
  searchBarContainer: {
    width: '70%',
    flexDirection: 'row',
    marginLeft: 25,
    marginTop: 30,
    backgroundColor: '#303030',
    borderRadius: 10,
    padding: 1,
  },
  locationPlaceTxt: {
    color: '#ffffff',
    fontWeight: 400,
    paddingTop: 10,
    paddingLeft: 25,
  },
  container: {backgroundColor: '#fff', height: '100%', width: '100%'},
  upperContainer: {height: '42%'},
  locationTxt: {
    color: '#fff',
    fontWeight: 200,
    paddingTop: 50,
    paddingLeft: 25,
  },
  searchBar: {
    marginLeft: 3,
    width: '90%',
  },
});
