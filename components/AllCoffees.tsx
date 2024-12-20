import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import TextCommon from '../common/TextCommon';
import { CoffeeData } from '../constants/CoffeeData';
import RatingIconSvg from '../svgs/RatingIconSvg';

type ItemProps = {
  image: string;
  title: string;
  id: number;
  rating: string;
  dollar: string;
  ingredients: string;
};

const AllCoffees = () => {
  const Item = ({ image, title, id, rating, dollar, ingredients }: ItemProps) => (
    <View style={styles.item}>
      <View style={styles.outerContainer}>
        <View style={styles.overlayContainer}>
          <RatingIconSvg style={styles.ratingIcon} />
          <TextCommon style={styles.rating} text={rating} />
        </View>
        <Image style={styles.img} source={{ uri: image }} />
      </View>
      <View style={styles.innerContainer}>
        <TextCommon style={styles.title} text={title} />
        <TextCommon style={styles.ingredients} text={ingredients} />
        <TextCommon style={styles.dollar} text={dollar} />
      </View>
    </View>
  );

  const renderItem = ({ item, id }: { item: any; id: number }) => {
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
  innerContainer: {
    marginLeft: 20,
  },
  outerContainer: {
    backgroundColor: '#45444d',
    width: '23%',
    borderBottomLeftRadius: 10,
    flexDirection: 'row',
    position: 'relative',
    marginLeft: 18,

  },
  ratingIcon: {

  },
  rating: {},
  dollar: {},
  ingredients: {},
  item: {
    margin: 10,
    width: '45%',
    // backgroundColor: 'red',
  },
  title: {
    fontSize: 18,
    width: '90%',
    color: '#000000',
    borderRadius: 5,
    marginTop: 8,
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
    top: 10,
    left: 10,
    zIndex: 1,
    flexDirection: 'row',

  },
});
