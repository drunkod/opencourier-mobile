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
import { styles } from './ForgotPassword.styles';
import { validateEmail } from '@app/utilities/text';

type Props = OnboardingScreenProp<OnboardingScreen.ForgotPassword>;

export const ForgotPasswordScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>('');
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false);
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    setEmailIsValid(validateEmail(email));
  }, [email]);

  const handleContinue = () => { };

  const onBackHandle = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}>
          <Text style={styles.textTitle}>Forgot password</Text>
          {/* Legacy screen - prop types don't match new TextField */}
          {(TextField as any)({
            emailValid: emailIsValid,
            emailCheck: true,
            placeholder: "Email",
            value: email,
            onChangeText: setEmail,
          })}
          <Button
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
