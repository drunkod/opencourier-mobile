import React, { useEffect, useState } from 'react';
import { View, Image, SafeAreaView, Text, ScrollView } from 'react-native';
import { Images } from '@app/utilities/images';
import {
  OnboardingScreen,
  OnboardingScreenProp,
} from '@app/navigation/onboarding/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './Welcome.styles';
import { useTranslation } from 'react-i18next';
import { SearchBar } from '@app/components/SearchBar/SearchBar';
import { PopularNearbyInstances } from '@app/components/PopularNearbyInstances/PopularNearbyInstances';
import { TEST_INSTANCES } from '@app/utilities/testData';
import { InstanceCell } from '@app/components/InstanceCell/InstanceCell';
import { Instance } from '@app/types/types';

type Props = OnboardingScreenProp<OnboardingScreen.Welcome>;

export const WelcomeScreen = ({ navigation }: Props) => {
  const { t, i18n } = useTranslation();
  const { top } = useSafeAreaInsets();
  const [text, setText] = useState<string>('');

  const onInstancePress = (instance: Instance) => {
    navigation.navigate(OnboardingScreen.InstanceDetails, {
      instance: instance,
    });
  };

  useEffect(() => {
    i18n.changeLanguage('en');
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Images.NoiseBG} style={styles.background} />
      <SafeAreaView style={styles.safeArea}>
        <Image
          source={Images.OpenDeli}
          style={[styles.imageOpenDeli, { top: top + 10 }]}
        />
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.textTitle}>{t('translations:welcome')}</Text>
          <Text style={styles.textSubtitle}>
            {t('translations:choose_instance')}
          </Text>
          <SearchBar
            text={text}
            onTextChange={setText}
            style={{ marginHorizontal: 0 }}
          />
          <View
            style={[
              text.length === 0 && { height: 40 },
              text.length > 0 && { marginVertical: 20 },
            ]}>
            {text.length > 0 &&
              TEST_INSTANCES.map(obj => {
                return (
                  <InstanceCell
                    instance={obj}
                    onPress={instance => onInstancePress(instance)}
                  />
                );
              })}
          </View>
          <PopularNearbyInstances
            instances={TEST_INSTANCES}
            onPress={instance => onInstancePress(instance)}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
