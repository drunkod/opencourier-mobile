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

type Props = MainScreenProp<MainScreens.OrderPreferenceScreen>;

export const OrderPreferenceScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const [selectedPreference, setSelectedPreference] = useState<string>(
    SUPPORTED_ORDER_PREFERENCES[1].name,
  );
  const preferences = SUPPORTED_ORDER_PREFERENCES;

  const onSelect = (item: string) => {
    setSelectedPreference(item);
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: OrderPreference;
    index: number;
  }) => {
    return (
      <SettingsCell
        style={{ marginBottom: 16 }}
        title={item.name}
        cellType={SettingsCellType.radioButton}
        onSelect={onSelect}
        isSelected={selectedPreference === item.name}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.navHeader}>
          <BackNavButton onPress={() => navigation.goBack()} />
          <Text style={styles.title}>{t('translations:order_preference')}</Text>
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
