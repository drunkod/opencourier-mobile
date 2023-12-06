import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { styles } from './Settings.styles';
import { BackNavButton } from '@app/components/BackNavButton/BackNavButton';
import { DrawerScreenProp, DrawerScreens } from '@app/navigation/drawer/types';
import { MainScreens } from '@app/navigation/main/types';
import { useTranslation } from 'react-i18next';
import messaging from '@react-native-firebase/messaging';
import Clipboard from '@react-native-clipboard/clipboard';

type Props = DrawerScreenProp<DrawerScreens.Settings>;

export const SettingsScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    pullToken();
  });

  const pullToken = async () => {
    const fcmToken = await messaging().getToken();
    setToken(fcmToken);
  };

  const onTokenPressHandle = () => {
    Clipboard.setString(token);
  };

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
        {token && (
          <TouchableOpacity onPress={onTokenPressHandle}>
            <Text style={{ color: 'black', padding: 20 }}>
              FCM Token: {token}
            </Text>
          </TouchableOpacity>
        )}
      </SafeAreaView>
    </View>
  );
};
