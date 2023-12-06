import React, { useEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { styles } from './Settings.styles';
import { BackNavButton } from '@app/components/BackNavButton/BackNavButton';
import { DrawerScreenProp, DrawerScreens } from '@app/navigation/drawer/types';
import { MainScreens } from '@app/navigation/main/types';
import { useTranslation } from 'react-i18next';

type Props = DrawerScreenProp<DrawerScreens.Settings>;

export const SettingsScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.navHeader}>
          <BackNavButton onPress={() => navigation.toggleDrawer()} />
          <Text style={styles.title}>{t('translations:settings')}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(MainScreens.Licences)}>
          <Text>Licences</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
