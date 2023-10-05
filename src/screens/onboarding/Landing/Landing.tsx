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

type Props = OnboardingScreenProp<OnboardingScreen.Landing>;

type Page = {
  title: string;
  image: ImageSourcePropType;
  description: string;
};

const data: Page[] = [
  {
    title: 'Support locals',
    description: 'Support your local restaurants and communities.',
    image: Images.OnboardingCar,
  },
  {
    title: 'Earn\nmoney',
    description: 'More than just a gig economy, join a community of couriers.',
    image: Images.OnboardingMoped,
  },
  {
    title: 'Reach\ngoals',
    description: 'Get paid and accomplish successful milestones.',
    image: Images.OnboardingFood,
  },
];

export const LandingScreen = ({ navigation }: Props) => {
  const { top } = useSafeAreaInsets();
  const [page, setPage] = useState<number>(0);

  const onScroll = (position: any) => {
    setPage(position.nativeEvent.position);
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
          title="Continue"
          onPress={() => undefined}
        />
      </SafeAreaView>
    </View>
  );
};
