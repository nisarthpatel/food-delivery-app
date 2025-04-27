import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes/routes';
import TextCommon from '../common/TextCommon';
import AccountSuccess from '../login-project-svgs/AccountSuccess';
import ButtonCommon from '../common/ButtonCommon';

type OpeningProps = NativeStackScreenProps<
  RootStackParamList,
  'SuccessAccountScreen'
>;

const SuccessAccountScreen = ({navigation}: OpeningProps) => {
  const skipToLogIn = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View style={styles.container}>
      <AccountSuccess style={styles.logoImg} />
      <TextCommon
        style={styles.midTxt}
        text="You have successfully
    create account"
        variant="medium"
      />
      <ButtonCommon
        onPress={skipToLogIn}
        title="Login"
        style={styles.btnStyle}
      />
    </View>
  );
};

export default SuccessAccountScreen;

const styles = StyleSheet.create({
  btnStyle: {
    alignSelf: 'center',
    backgroundColor: '#ed215f',
    top: 230,
  },
  container: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImg: {
    bottom: 30,
  },
  midTxt: {
    fontWeight: 600,
    // fontFamily: 'Poppins',
    textAlign: 'center',
    padding: 10,
  },
});
