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
import TextCommon from '../common/TextCommon';
import UsernameIcon from '../login-project-svgs/UsernameIcon';
import InputCommon from '../common/InputCommon';
import PasswordIcon from '../login-project-svgs/PasswordIcon';
import CustomTouchable from '../common/CustomTouchable';
import EyeIcon from '../login-project-svgs/EyeIcon';
import ButtonCommon from '../common/ButtonCommon';
import GoogleIcon from '../login-project-svgs/GoogleIcon';
import FacebookIcons from '../login-project-svgs/FacebookIcon';
import TwitterIcon from '../login-project-svgs/TwitterIcon';
import LogoImg from '../login-project-svgs/LogoImg';

type OpeningProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

const LoginScreen = ({navigation}: OpeningProps) => {
  const [credentials, setCredentials] = useState({email: '', password: ''});
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleChange = (type: 'email' | 'password') => (text: string) => {
    setCredentials(prev => ({...prev, [type]: text}));
  };

  const togglePasswordVisibility = () => {
    setSecureTextEntry(prev => !prev);
  };

  const skipToSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <LogoImg style={styles.logoImg} />
      <TextCommon text="Sign in" variant="large" style={styles.largeTxt} />
      <TextCommon
        text="Access to your account"
        variant="smallv2"
        style={styles.desTxt}
      />

      <View
        style={
          credentials.email && credentials.password
            ? styles.filledStyle
            : styles.unFilledStyle
        }>
        <View style={styles.inputStyles}>
          <UsernameIcon style={styles.iconsStyles} />
          <InputCommon
            style={styles.inputTxtStyle}
            placeholder="Email or Phone"
            keyboardType="email-address"
            onChangeText={handleChange('email')}
          />
        </View>

        <View style={styles.passwordStyles}>
          <PasswordIcon style={styles.iconsStyles} />
          <InputCommon
            style={styles.inputTxtStyle}
            placeholder="Password"
            secureTextEntry={secureTextEntry}
            onChangeText={handleChange('password')}
          />
          <CustomTouchable
            onPress={togglePasswordVisibility}
            component={<EyeIcon style={styles.eyeIconStyle} />}
          />
        </View>
      </View>

      <ButtonCommon
        onPress={() => Alert.alert('Signing in...')}
        title="Sign in"
        style={{
          alignSelf: 'center',
          backgroundColor:
            credentials.password && credentials.email ? '#ed215f' : '#F181af',
        }}
      />

      <Pressable onPress={() => Alert.alert('Forgot Password')}>
        <TextCommon
          text="Forget Password?"
          variant="smallv2"
          style={styles.forgetPassStyles}
        />
      </Pressable>

      <View style={styles.buttonMid}>
        <View style={styles.divider} />
        <TextCommon text="or sign-in with" variant="smallv2" />
        <View style={styles.divider} />
      </View>

      <View style={styles.svgIcons}>
        <CustomTouchable
          onPress={() => Alert.alert('Google Login')}
          component={<GoogleIcon />}
        />
        <CustomTouchable
          onPress={() => Alert.alert('Facebook Login')}
          component={<FacebookIcons />}
        />
        <CustomTouchable
          onPress={() => Alert.alert('Twitter Login')}
          component={<TwitterIcon />}
        />
      </View>

      <View style={styles.buttonBelow}>
        <TextCommon text="Don't have an account?" variant="smallv2" />
        <TouchableOpacity onPress={skipToSignUp}>
          <TextCommon
            style={styles.loginButtonText}
            text=" Sign Up"
            variant="smallv2"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  unFilledStyle: {opacity: 0.5},
  filledStyle: {opacity: 1},
  eyeIconStyle: {right: 50, top: 10},
  passwordStyles: {
    flexDirection: 'row',
    left: 15,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  buttonBelow: {
    marginHorizontal: 90,
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'center',
  },
  logoImg: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: 100,
  },
  loginButtonText: {
    color: '#2454F8',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  svgIcons: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'center',
    gap: 10,
  },
  buttonMid: {flexDirection: 'row', alignItems: 'center', marginVertical: 10},
  forgetPassStyles: {color: '#2454F8', textAlign: 'center', fontWeight: '500'},
  iconsStyles: {paddingBottom: 50, marginHorizontal: 15},
  inputTxtStyle: {
    fontSize: 20,
    width: '85%',
    fontWeight: '500',
    textDecorationStyle: 'solid',
  },
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  inputStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  desTxt: {
    color: '#f5c102',
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'Poppins',
    letterSpacing: 1,
  },
  largeTxt: {fontWeight: '700', textAlign: 'center', paddingTop: 20},
  divider: {
    borderBottomWidth: 1,
    width: 100,
    marginHorizontal: 20,
    borderBottomColor: 'grey',
  },
});
