import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import CustomTouchable from '../common/CustomTouchable';
import BackButtonIcon from '../login-project-svgs/BackButtonIcon';
import AfterVerifyCodeIcon from '../login-project-svgs/AfterVerifyCodeIcon';
import BeforeVerifyCodeIcon from '../login-project-svgs/BeforeVerifyCodeIcon';
import TextCommon from '../common/TextCommon';
import ButtonCommon from '../common/ButtonCommon';
import {RootStackParamList} from '../App';
import OtpTextInput from 'react-native-text-input-otp';

type OpeningProps = NativeStackScreenProps<
  RootStackParamList,
  'VerificationScreen'
>;

const VerificationScreen = ({navigation}: OpeningProps) => {
  const [otp, setOtp] = React.useState('');

  const skipToSignUp = () => {
    if (otp.length >= 4) {
      navigation.navigate('CreatePasswordScreen');
    }
  };
  const backButton = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <CustomTouchable
        onPress={backButton}
        component={<BackButtonIcon style={styles.backBtn} />}
      />
      {otp.length >= 4 ? (
        <AfterVerifyCodeIcon style={styles.logoImg} />
      ) : (
        <BeforeVerifyCodeIcon style={styles.logoImg} />
      )}
      <TextCommon text="Verify Code" variant="large" style={styles.largeTxt} />
      <TextCommon
        text="Check code in your SMS or Email"
        variant="smallv2"
        style={styles.desTxt}
      />
      <OtpTextInput
        otp={otp}
        setOtp={setOtp}
        digits={4}
        style={styles.otpStyles}
        fontStyle={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          padding: 5,
        }}
        focusedStyle={styles.otpTxtStyles}
      />
      <View style={styles.buttonAbove}>
        <TextCommon text={'Don’t receive code? '} variant="smallv2" />
        <TouchableOpacity>
          <TextCommon
            style={styles.loginButtonText}
            text={'Sent again'}
            variant="smallv2"
          />
        </TouchableOpacity>
      </View>
      <ButtonCommon
        onPress={skipToSignUp}
        title="Verify"
        style={{
          alignSelf: 'center',
          backgroundColor: otp.length >= 4 ? '#ed215f' : '#F181af',
        }}
      />
      <View style={styles.buttonBelow}>
        <TextCommon text={'Your have any problem? '} variant="smallv2" />
        <TouchableOpacity>
          <TextCommon
            style={styles.loginButtonText}
            text={'Help'}
            variant="smallv2"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  backBtn: {
    marginLeft: 10,
    marginTop: 20,
  },
  otpTxtStyles: {
    borderColor: 'grey',
    borderBottomWidth: 0,
  },
  otpStyles: {
    backgroundColor: '#f2f2f2',
    borderRadius: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    height: 70,
    marginHorizontal: 4,
  },
  buttonBelow: {
    flexDirection: 'row',
    marginTop: '48%',
    justifyContent: 'center',
  },
  unFilledStyle: {
    opacity: 0.5,
  },
  filledStyle: {
    opacity: 1,
  },

  buttonAbove: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#2454F8',
    fontWeight: 500,
    textDecorationLine: 'underline',
  },

  container: {
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    height: '100%',
  },

  desTxt: {
    color: '#f5c102',
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'Poppins',
    letterSpacing: 1,
  },
  logoImg: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: 80,
  },
  largeTxt: {
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 20,
  },
});
