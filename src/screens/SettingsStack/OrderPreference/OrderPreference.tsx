import React, { useState } from 'react';
import { View, SafeAreaView, Text, FlatList } from 'react-native';
import { styles } from './OrderPreference.styles';
import { MainScreenProp, MainScreens } from '@app/navigation/main/types';
import { BackNavButton } from '@app/components/BackNavButton/BackNavButton';
import { useTranslation } from 'react-i18next';
import {
  SettingsCell,
  SettingsCellType,
} from '@app/components/SettingsCell/SettingsCell';
import { OrderPreference } from '@app/types/types';
import { SUPPORTED_ORDER_PREFERENCES } from '@app/utilities/constants';
import { FoodPreferences } from '@app/types/enums';
import { selectUser, updateUserSettings } from '@app/redux/user/user';
import { useDispatch, useSelector } from 'react-redux';

type Props = MainScreenProp<MainScreens.OrderPreferenceScreen>;

export const OrderPreferenceScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [selectedPreference, setSelectedPreference] = useState<string
    | null>(
      user.settings!.foodPreferences ? user.settings!.foodPreferences[0].toString() : null,
    );
  const preferences = Object.keys(FoodPreferences).filter((item) => {
    return isNaN(Number(item));
  });;;

  const onSelect = (preference: string) => {
    setSelectedPreference(preference);
    dispatch(updateUserSettings({ id: user.user!.id, settings: { foodPreferences: [preference as unknown as FoodPreferences] } }))
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: string;
    index: number;
  }) => {
    return (
      <SettingsCell
        style={{ marginBottom: 16 }}
        title={item}
        cellType={SettingsCellType.radioButton}
        onSelect={onSelect}
        isSelected={selectedPreference === item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.navHeader}>
          <BackNavButton onPress={() => navigation.goBack()} />
          <Text style={styles.title}>{t('translations:food_preferences')}</Text>
        </View>
        <FlatList
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={preferences}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
};
