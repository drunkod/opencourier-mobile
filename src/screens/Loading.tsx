import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { RootScreen, RootScreenProp } from '@app/navigation/types';
import { Images } from '@app/utilities/images';
import { Colors } from '@app/styles/colors';

type Props = RootScreenProp<RootScreen.Loading>;

export const LoadingScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={Images.Logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
});
