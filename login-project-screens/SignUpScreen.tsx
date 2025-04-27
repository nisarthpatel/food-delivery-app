import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from '../routes/routes';
import CustomTouchable from '../common/CustomTouchable';
import TextCommon from '../common/TextCommon';
import ProfileIcon from '../login-project-svgs/ProfileIcon';
import InputCommon from '../common/InputCommon';
import UsernameIcon from '../login-project-svgs/UsernameIcon';
import LocationIcon from '../login-project-svgs/LocationIcon';
import ButtonCommon from '../common/ButtonCommon';
import BouncyCheckbox from 'react-native-bouncy-checkbox/build/dist/BouncyCheckbox';
import LogoImg from '../login-project-svgs/LogoImg';
import BackButtonIcon from '../login-project-svgs/BackButtonIcon';

type OpeningProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

const SignUpScreen = ({navigation}: OpeningProps) => {
  const backButton = () => {
    navigation.goBack();
  };

  const [{fullname, address, email}, setCredentials] = useState({
    fullname: '',
    email: '',
    address: '',
  });

  const handleChange =
    (type: 'fullname' | 'address' | 'email') => (event: any) => {
      setCredentials(prev => ({...prev, [type]: event}));
    };

  const handleInput = () => {
    if (fullname && email && address) {
      navigation.navigate('VerificationScreen');
    } else {
      return;
    }
  };

  return (
    <View style={styles.container}>
      <CustomTouchable
        onPress={backButton}
        component={<BackButtonIcon style={styles.backBtn} />}
      />
      <LogoImg style={styles.logoImg} />
      <TextCommon text="Sign Up" variant="large" style={styles.largeTxt} />
      <TextCommon
        text="Register New Account"
        variant="smallv2"
        style={styles.desTxt}
      />
      <View
        style={
          fullname && email && address
            ? styles.filledStyle
            : styles.unFilledStyle
        }>
        <View style={styles.txtInputStyles}>
          <ProfileIcon style={styles.iconsStyles} />
          <InputCommon
            style={styles.inputTxtStyle}
            placeholder="Full Name"
            keyboardType="default"
            onChangeText={handleChange('fullname')}
          />
        </View>
        <View style={styles.txtInputStyles}>
          <UsernameIcon style={styles.iconsStyles} />
          <InputCommon
            style={styles.inputTxtStyle}
            placeholder="Email or Phone"
            keyboardType="email-address"
            onChangeText={handleChange('email')}
          />
        </View>
        <View style={styles.txtInputStyles}>
          <LocationIcon style={styles.iconsStyles} />
          <InputCommon
            style={styles.inputTxtStyle}
            keyboardType="default"
            placeholder="Your Address"
            onChangeText={handleChange('address')}
          />
        </View>
      </View>
      <View style={styles.checkBoxStyles}>
        <BouncyCheckbox
          size={20}
          fillColor="black"
          unFillColor="#FFFFFF"
          iconStyle={{borderRadius: 5}}
          innerIconStyle={{borderRadius: 5}}
          textStyle={{fontFamily: 'JosefinSans-Regular'}}
        />
        <View style={styles.checkBoxInputStyles}>
          <TextCommon
            text="I agree with "
            variant="smallv2"
            style={styles.darkTxt}
          />
          <Pressable>
            <TextCommon
              text="Terms Of Services "
              variant="smallv2"
              style={styles.highlightTxt}
            />
          </Pressable>
          <TextCommon text="and " variant="smallv2" style={styles.darkTxt} />
        </View>
      </View>
      <Pressable>
        <TextCommon
          text="Policy Privacy."
          variant="smallv2"
          style={[styles.highlightTxt, styles.ppStyles]}
        />
      </Pressable>
      <ButtonCommon
        onPress={handleInput}
        title="Sign Up"
        style={{
          marginVertical: 30,
          alignSelf: 'center',
          backgroundColor: address && fullname && email ? '#ed215f' : '#F181af',
        }}
      />
      <View style={styles.buttonBelow}>
        <TextCommon
          style={styles.darkTxt}
          text={'Your have any problem?'}
          variant="smallv2"
        />
        <TouchableOpacity onPress={() => Alert.alert('hi')}>
          <TextCommon
            style={styles.helpButtonText}
            text={' Help'}
            variant="smallv2"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  backBtn: {
    marginLeft: 10,
    marginTop: 20,
  },
  ppStyles: {
    marginLeft: 48,
  },
  highlightTxt: {
    color: '#2454F8',
    fontWeight: 400,
    fontFamily: 'Poppins',
  },
  darkTxt: {
    color: '#000000',
    fontWeight: 400,
    fontFamily: 'Poppins',
  },
  unFilledStyle: {
    opacity: 0.5,
  },
  filledStyle: {
    opacity: 1,
  },
  txtInputStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    fontFamily: 'Poppins',
  },
  buttonBelow: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
  },
  helpButtonText: {
    color: '#2454F8',
    fontWeight: 500,
    textDecorationLine: 'underline',
    fontFamily: 'Poppins',
  },
  checkBoxInputStyles: {
    flexDirection: 'row',
    paddingLeft: 0,
  },
  checkBoxStyles: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 12,
  },
  iconsStyles: {
    paddingBottom: 50,
    marginHorizontal: 15,
  },
  inputTxtStyle: {
    fontSize: 20,
    width: '85%',
    fontWeight: 500,
    textDecorationStyle: 'solid',
  },
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
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
    marginTop: 60,
  },
  largeTxt: {
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 20,
    fontFamily: 'Poppins',
  },
});
