import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import CustomTouchable from '../common/CustomTouchable';
import BackButtonIcon from '../login-project-svgs/BackButtonIcon';
import TextCommon from '../common/TextCommon';
import {RootStackParamList} from '../routes/routes';
import PasswordIcon from '../login-project-svgs/PasswordIcon';
import InputCommon from '../common/InputCommon';
import EyeIcon from '../login-project-svgs/EyeIcon';
import ConfirmPassWordChecked from '../login-project-svgs/ConfirmPassWordChecked';
import ButtonCommon from '../common/ButtonCommon';

type OpeningProps = NativeStackScreenProps<
  RootStackParamList,
  'CreatePasswordScreen'
>;

const CreatePasswordScreen = ({navigation}: OpeningProps) => {
  const [{password, cfnPassword}, setCredentials] = useState({
    password: '',
    cfnPassword: '',
  });

  const handleChange = (type: 'password' | 'cfnPassword') => (text: string) => {
    setCredentials(prev => ({...prev, [type]: text}));
  };

  const backButton = () => {
    navigation.goBack();
  };

  const skipToLogIn = () => {
    navigation.navigate('SuccessAccountScreen');
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View style={styles.container}>
      <CustomTouchable
        onPress={backButton}
        component={<BackButtonIcon style={styles.backBtn} />}
      />
      {/* <CreatePasswordIcon style={styles.logoImg} /> */}
      <TextCommon
        text="Create Password"
        variant="large"
        style={styles.largeTxt}
      />
      <TextCommon
        text="Enter your secure password"
        variant="smallv2"
        style={styles.desTxt}
      />
      <View
        style={
          password.length >= 8 && cfnPassword.length >= 8
            ? styles.filledStyle
            : styles.unFilledStyle
        }>
        <View style={styles.passwordStyles}>
          <PasswordIcon style={styles.iconsStyles} />
          <InputCommon
            style={styles.inputTxtStyle}
            placeholder="Password"
            secureTextEntry
            onChangeText={handleChange('password')}
          />
          <CustomTouchable
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            component={<EyeIcon style={styles.eyeIconStyle} />}
          />
        </View>
        <View style={styles.passwordStyles}>
          <ConfirmPassWordChecked style={styles.iconsStyles} />
          <InputCommon
            style={styles.inputTxtStyle}
            placeholder="Confirm Password"
            secureTextEntry={!isPasswordVisible}
            onChangeText={handleChange('cfnPassword')}
          />
          <CustomTouchable
            onPress={() => Alert.alert('hi')}
            component={<EyeIcon style={styles.eyeIconStyle} />}
          />
        </View>
      </View>
      <TextCommon
        style={styles.passTxt}
        text={' * Password must at lease 8 characters.'}
        variant="small"
      />
      <ButtonCommon
        onPress={skipToLogIn}
        title="Create"
        style={{
          alignSelf: 'center',
          backgroundColor: password && cfnPassword ? '#ed215f' : '#F181af',
          marginVertical: 30,
        }}
      />
    </View>
  );
};

export default CreatePasswordScreen;

const styles = StyleSheet.create({
  passTxt: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 5,
  },
  backBtn: {
    marginLeft: 10,
    marginTop: 20,
  },
  unFilledStyle: {
    opacity: 0.5,
  },
  filledStyle: {
    opacity: 1,
  },
  eyeIconStyle: {
    right: 50,
    top: 10,
  },
  passwordStyles: {
    flexDirection: 'row',
    left: 15,
    justifyContent: 'center',
    paddingVertical: 10,
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
    marginTop: 100,
  },
  largeTxt: {
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 20,
  },
});
