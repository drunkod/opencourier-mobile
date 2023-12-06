import React, { useCallback, useState } from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  ImageSourcePropType,
} from 'react-native';
import { Images } from '@app/utilities/images';
import PagerView from 'react-native-pager-view';
import { Button, ButtonType } from '@app/components/Button/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PageIndicator } from 'react-native-page-indicator';
import {
  OnboardingScreen,
  OnboardingScreenProp,
} from '@app/navigation/onboarding/types';
import { styles } from './Landing.styles';
import { useTranslation } from 'react-i18next';

type Props = OnboardingScreenProp<OnboardingScreen.Landing>;

type Page = {
  title: string;
  image: ImageSourcePropType;
  description: string;
};

export const LandingScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const { top } = useSafeAreaInsets();
  const [page, setPage] = useState<number>(0);

  const data: Page[] = [
    {
      title: t('translations:support_locals'),
      description: t('translations:support_locals_details'),
      image: Images.OnboardingCar,
    },
    {
      title: t('translations:earn_money'),
      description: t('translations:more_than_a_gig'),
      image: Images.OnboardingMoped,
    },
    {
      title: t('translations:reach_goals'),
      description: t('translations:get_paid'),
      image: Images.OnboardingFood,
    },
  ];

  const onScroll = (position: any) => {
    setPage(position.nativeEvent.position);
  };

  const onContinue = () => {
    navigation.navigate(OnboardingScreen.Welcome);
  };

  const PageItem = useCallback(
    ({ title, image, description }: Page) => (
      <View style={styles.pageContent} key={title}>
        <View>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textSubtitle}>{description}</Text>
          <Image source={image} style={styles.ilustration} />
        </View>
      </View>
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Image
          source={Images.OpenDeli}
          style={[styles.imageOpenDeli, { top: top + 10 }]}
        />
        <PagerView
          style={styles.pagerView}
          initialPage={page}
          onPageSelected={onScroll}>
          {data.map(item => (
            <PageItem
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </PagerView>
        <PageIndicator
          variant="beads"
          count={3}
          current={page}
          style={styles.pageIndicator}
        />
        <Button
          style={styles.buttonContinue}
          type={ButtonType.black}
          title={t('translations:continue')}
          onPress={onContinue}
        />
      </SafeAreaView>
    </View>
  );
};
