import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { RootScreen, RootScreenProp } from '@app/navigation/types';
import { Images } from '@app/utilities/images';
import { styles } from './Loading.styles';

type Props = RootScreenProp<RootScreen.Loading>;

export const LoadingScreen = ({ navigation }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(RootScreen.Onboarding);
    }, 1000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={Images.Logo} />
    </View>
  );
};
