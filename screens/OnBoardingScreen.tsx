import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ButtonCommon from '../common/ButtonCommon';
import TextCommon from '../common/TextCommon';
import { RootStackParamList } from '../routes/routes';

type OpeningProps = NativeStackScreenProps<
    RootStackParamList,
    'OnBoardingScreen'
>;

const OnBoardingScreen = ({ navigation }: OpeningProps) => {

    const navigateToHome = () => {
        navigation.navigate('HomeScreen')
    }

    return (
        <View style={styles.containerStyles}>
            <Image style={styles.imgStyles} source={require('../assets/img.png')} />
            <View>
                <TextCommon
                    style={styles.headingTxt}
                    variant="large"
                    text="Fall in Love with Coffee in Blissful Delight"
                />
            </View>
            <TextCommon
                style={styles.desTxt}
                variant="smallv2"
                text="Welcome to our cozy coffee corner,where every cup is delightful for you"
            />
            <ButtonCommon onPress={navigateToHome} title="Get Started" style={styles.btnStyles} />
        </View>
    );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
    btnStyles: {
        alignSelf: 'center',
        marginVertical: 'auto',
    },
    desTxt: {
        color: '#ededed',
        textAlign: 'center',
        fontSize: 16,
        paddingHorizontal: 50,
        fontWeight: 200,
        marginVertical: 10,
    },
    headingTxt: {
        color: '#EDEDED',
        textAlign: 'center',
        fontWeight: 600,
    },
    containerStyles: {
        backgroundColor: '#000000',
        height: '100%',
        width: '100%',
    },
    imgStyles: {
        marginHorizontal: 'auto',
    },
});
