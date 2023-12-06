import React, { useEffect } from 'react';
import { View, Image, SafeAreaView, Text } from 'react-native';
import { Images } from '@app/utilities/images';
import {
  OnboardingScreen,
  OnboardingScreenProp,
} from '@app/navigation/onboarding/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, ButtonType } from '@app/components/Button/Button';
import { styles } from './Welcome.styles';
import { useTranslation } from 'react-i18next';

type Props = OnboardingScreenProp<OnboardingScreen.Welcome>;

export const WelcomeScreen = ({ navigation }: Props) => {
  const { t, i18n } = useTranslation();
  const { top } = useSafeAreaInsets();

  const onSignUp = () => {
    navigation.navigate(OnboardingScreen.Signup);
  };

  const onLogIn = () => {
    navigation.navigate(OnboardingScreen.Login);
  };

  useEffect(() => {
    i18n.changeLanguage('en');
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Image
          source={Images.OpenDeli}
          style={[styles.imageOpenDeli, { top: top + 10 }]}
        />
        <View style={styles.content}>
          <Text style={styles.textTitle}>{t('translations:welcome')}</Text>
          <Text style={styles.textSubtitle}>
            {t('translations:welcome_to_the_comunity')}
          </Text>
          <Button
            title={t('translations:sign_up')}
            onPress={onSignUp}
            type={ButtonType.black}
            style={styles.buttonSignup}
          />
          <Button
            title={t('translations:log_in')}
            onPress={onLogIn}
            type={ButtonType.white}
            style={styles.buttonLogin}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
