import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RootScreen, RootScreenProp } from '@app/navigation/types';

type Props = RootScreenProp<RootScreen.Loading>;

export const LoadingScreen = ({ navigation }: Props) => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
