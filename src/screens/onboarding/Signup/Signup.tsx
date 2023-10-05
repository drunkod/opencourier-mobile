import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView, Text } from 'react-native';
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

type Props = OnboardingScreenProp<OnboardingScreen.Signup>;

export const SignupScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
  const { top } = useSafeAreaInsets();

  const handleContinue = () => {};

  useEffect(() => {
    setEmailIsValid(validateEmail(email));
  }, [email]);

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
            style={styles.buttonLogin}
            type={ButtonType.black}
            title="Continue"
            onPress={handleContinue}
          />
        </ScrollView>
        <BackNavButton
          onPress={() => navigation.goBack()}
          style={[styles.backButton, { top: top + 10 }]}
        />
      </SafeAreaView>
    </View>
  );
};
