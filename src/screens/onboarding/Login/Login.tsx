import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  OnboardingScreen,
  OnboardingScreenProp,
} from '@app/navigation/onboarding/types';
import { BackNavButton } from '@app/components/BackNavButton/BackNavButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, ButtonType } from '@app/components/Button/Button';
import { TextField } from '@app/components/TextField/TextField';
import { styles } from './Login.styles';
import { validateEmail } from '@app/utilities/text';
import { RootScreen } from '@app/navigation/types';
import { RootState } from '@app/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@app/redux/user/user';

type Props = OnboardingScreenProp<OnboardingScreen.Login>;

export const LoginScreen = ({ navigation }: Props) => {
  const [rememberLogin, setRememberLogin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
  const { top } = useSafeAreaInsets();
  const { user, loginFinished, loginError } = useSelector(
    (state: RootState) => state.user,
  );
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setEmailIsValid(validateEmail(email));
  }, [email]);

  const handleContinue = () => {
    setLoading(true);
    dispatch(
      login({ email: email, password: password, rememberLogin: rememberLogin }),
    );
  };

  const handleSwitchChange = (value: boolean) => {
    setRememberLogin(value);
  };

  const handleForgotPassword = () => {};

  const onBackHandle = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (loginFinished && user) {
      setLoading(false);
      navigation.navigate(RootScreen.Main);
    } else if (loginError) {
      setLoading(false);
      Alert.alert('Login error', loginError);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginFinished, loginError, isLoading, user]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}>
          <Text style={styles.textTitle}>Log in</Text>
          <TextField
            emailValid={emailIsValid}
            emailCheck
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextField
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          <Button
            isLoading={isLoading}
            style={styles.buttonLogin}
            type={ButtonType.black}
            title="Continue"
            onPress={handleContinue}
          />
          <View style={styles.containerSwitch}>
            <Switch value={rememberLogin} onValueChange={handleSwitchChange} />
            <Text style={styles.textRemember}>Remember login for 2 weeks</Text>
          </View>
          <TouchableOpacity
            style={styles.containerForgot}
            onPress={handleForgotPassword}>
            <Text style={styles.textForgot}>Forgot password</Text>
          </TouchableOpacity>
        </ScrollView>
        <BackNavButton
          onPress={onBackHandle}
          style={[styles.backButton, { top: top + 10 }]}
        />
      </SafeAreaView>
    </View>
  );
};
