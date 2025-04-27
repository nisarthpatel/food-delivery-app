import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodos, User} from './todo';
const Pages = () => {
  const dispatch = useDispatch<any>();
  const loading = useSelector(state => state.todo.isLoading);
  // const todo = useSelector(state => state.todo.data);
  const [user, setUser] = useState<Array<User>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // useEffect(() => {
  //   if (todo.length > 1) {
  //     setUser(todo);
  //   }
  // }, []);

  useEffect(() => {
    if (currentPage > 1) {
      fetchMore();
    }
  }, [currentPage]);

  // const loadMoreData = async () => {
  //   const user = await dispatch(fetchTodos({current: currentPage}));
  //   setUser(prevUser => [...prevUser, ...user]);
  // };

  const fetchMore = async () => {
    const user = await dispatch(fetchTodos({currentPage: currentPage}));
    setUser(prevUser => [...prevUser, ...user.payload]);
  };

  useEffect(() => {
    fetchFirstPage();
  }, []);

  const fetchFirstPage = async () => {
    const user = await dispatch(fetchTodos({currentPage: currentPage}));
    setUser(user.payload);
  };
  const fetchNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemWrapperStyle}>
        <Image
          style={styles.itemImageStyle}
          source={{uri: item.picture.large}}
        />
        <View style={styles.contentWrapperStyle}>
          <Text
            style={
              styles.txtNameStyle
            }>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
          <Text style={styles.txtEmailStyle}>{item.email}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      {user.length && (
        <FlatList
          data={user}
          renderItem={renderItem}
          onEndReached={fetchNextPage}
          keyExtractor={item => item.login.uuid}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            loading ? <ActivityIndicator size={'large'} /> : null
          }
        />
      )}
    </View>
  );
};

export default Pages;

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    justifyContent: 'space-around',
  },
  txtNameStyle: {
    fontSize: 16,
  },
  txtEmailStyle: {
    color: '#777',
    fontSize: 16,
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
  activityloaderStyle: {
    marginVertical: 30,
  },
});
