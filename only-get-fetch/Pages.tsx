import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { getUser } from './GetUser';

const Pages = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemWrapperStyle}>
                <Image
                    style={styles.itemImageStyle}
                    source={{ uri: item.picture.large }}
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
    const renderLoader = () => {
        return isLoading ? (
            <View style={styles.loaderStyle}>
                <ActivityIndicator
                    style={styles.activityloaderStyle}
                    size="large"
                    color="#aaa"
                />
            </View>
        ) : null;
    };

    const loadMoreItem = () => {
        setCurrentPage(currentPage + 1);
    };

    useEffect(() => {
        getUser({ currentPage, setIsLoading, setUsers, users });
    }, [currentPage]);

    return (
        <View>
            <FlatList
                data={users}
                onEndReachedThreshold={0.5}
                onEndReached={loadMoreItem}
                ListFooterComponent={renderLoader}
                keyExtractor={item => item.email}
                renderItem={renderItem}
            />
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
    },
    loaderStyle: {
        marginVertical: 16,
        alignItems: 'center',
    },
    activityloaderStyle: {
        marginVertical: 30,
    },
});
