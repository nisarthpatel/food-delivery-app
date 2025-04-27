import React from 'react';
import {Alert, FlatList, Image, StyleSheet, View} from 'react-native';
import TextCommon from '../common/TextCommon';
import {CoffeeData} from '../constants/CoffeeData';
import RatingIconSvg from '../svgs/RatingIconSvg';
import AddCoffeeIcon from '../svgs/AddCoffeeIcon';
import CustomTouchable from '../common/CustomTouchable';

type ItemProps = {
  image: string;
  title: string;
  id: number;
  rating: string;
  dollar: string;
  ingredients: string;
};

const AllCoffees = ({navigation}) => {
  const Item = ({image, title, id, rating, dollar, ingredients}: ItemProps) => (
    <View style={styles.item}>
      <View style={styles.outerContainer}>
        <View style={styles.overlayContainer}>
          <RatingIconSvg style={styles.ratingIcon} />
          <TextCommon style={styles.rating} text={rating} />
        </View>
        <CustomTouchable
          onPress={() => Alert.alert('Hi')}
          component={<Image style={styles.img} source={{uri: image}} />}
        />
      </View>
      <View style={styles.innerContainer}>
        <TextCommon style={styles.title} text={title} />
        <TextCommon style={styles.ingredients} text={ingredients} />
        <View style={styles.addCoffeeIcon}>
          <TextCommon style={styles.dollar} text={dollar} />
          <CustomTouchable
            onPress={() => Alert.alert('Hi')}
            component={<AddCoffeeIcon />}
          />
        </View>
      </View>
    </View>
  );

  const renderItem = ({item, id}: {item: any; id: number}) => {
    return (
      <Item
        id={id}
        title={item.title}
        image={item.image}
        ingredients={item.ingredients}
        dollar={item.dollar}
        rating={item.rating}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        data={CoffeeData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default AllCoffees;

const styles = StyleSheet.create({
  addCoffeeIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 2,
  },
  innerContainer: {
    marginLeft: 20,
  },
  outerContainer: {
    flexDirection: 'row',
    marginLeft: 18,
  },
  ratingIcon: {},
  rating: {
    fontSize: 12,
  },
  dollar: {
    fontWeight: 800,
    fontSize: 20,
  },
  ingredients: {
    marginVertical: 5,
    height: 20,
  },
  item: {
    margin: 10,
    width: '45%',
  },
  title: {
    fontSize: 18,
    width: '90%',
    color: '#000000',
    marginTop: 8,
    fontWeight: 700,
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 15,
    alignSelf: 'center',
  },
  container: {
    top: 50,
    height: '36%',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  overlayContainer: {
    position: 'absolute',
    borderTopEndRadius: 15,
    alignItems: 'center',
    left: 100,
    backgroundColor: '#7F8487',
    borderBottomLeftRadius: 25,
    zIndex: 1,
    height: 30,
    width: 50,
    alignContent: 'center',
    gap: 3,
    paddingLeft: 7,
    flexDirection: 'row',
  },
});
