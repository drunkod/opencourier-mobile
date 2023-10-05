import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Switch,
  TouchableOpacity,
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

type Props = OnboardingScreenProp<OnboardingScreen.Login>;

export const Login = ({ navigation }: Props) => {
  const [rememberLogin, setRememberLogin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    setEmailIsValid(validateEmail(email));
  }, [email]);

  const handleContinue = () => {};

  const handleSwitchChange = (value: boolean) => {
    setRememberLogin(value);
  };

  const handleForgotPassword = () => {};

  const onBackHandle = () => {
    navigation.goBack();
  };

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
