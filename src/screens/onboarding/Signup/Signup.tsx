import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView, Text, Alert } from 'react-native';
import {
  OnboardingScreen,
  OnboardingScreenProp,
} from '@app/navigation/onboarding/types';
import { BackNavButton } from '@app/components/BackNavButton/BackNavButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, ButtonType } from '@app/components/Button/Button';
import { TextField } from '@app/components/TextField/TextField';
import { styles } from './Signup.styles';
import { validateEmail } from '@app/utilities/text';
import { RootState } from '@app/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '@app/redux/user/user';
import { RootScreen } from '@app/navigation/types';

type Props = OnboardingScreenProp<OnboardingScreen.Signup>;

export const SignupScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
  const { top } = useSafeAreaInsets();
  const { user, signupFinished, signupError } = useSelector(
    (state: RootState) => state.user,
  );
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setEmailIsValid(validateEmail(email));
  }, [email]);

  const handleContinue = () => {
    setLoading(true);
    dispatch(signup({ email: email, password: password }));
  };

  const onBackHandle = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (isLoading) {
      setLoading(false);
      if (signupFinished && user) {
        navigation.navigate(RootScreen.Main);
      } else if (signupError) {
        Alert.alert('Signup error', signupError);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signupFinished, signupError, isLoading]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}>
          <Text style={styles.textTitle}>Sign up</Text>
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
        </ScrollView>
        <BackNavButton
          onPress={onBackHandle}
          style={[styles.backButton, { top: top + 10 }]}
        />
      </SafeAreaView>
    </View>
  );
};
