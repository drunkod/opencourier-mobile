import React from 'react';
import { View, Image, SafeAreaView, Text } from 'react-native';
import { Images } from '@app/utilities/images';
import {
  OnboardingScreen,
  OnboardingScreenProp,
} from '@app/navigation/onboarding/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, ButtonType } from '@app/components/Button/Button';
import { styles } from './Welcome.styles';

type Props = OnboardingScreenProp<OnboardingScreen.Welcome>;

export const WelcomeScreen = ({ navigation }: Props) => {
  const { top } = useSafeAreaInsets();

  const onSignUp = () => {};

  const onLogIn = () => {
    navigation.navigate(OnboardingScreen.Login);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Image
          source={Images.OpenDeli}
          style={[styles.imageOpenDeli, { top: top + 10 }]}
        />
        <View style={styles.content}>
          <Text style={styles.textTitle}>Welcome</Text>
          <Text style={styles.textSubtitle}>
            To the community owned app for public interest
          </Text>
          <Button
            title="Sign up"
            onPress={onSignUp}
            type={ButtonType.black}
            style={styles.buttonSignup}
          />
          <Button
            title="Log in"
            onPress={onLogIn}
            type={ButtonType.white}
            style={styles.buttonLogin}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
