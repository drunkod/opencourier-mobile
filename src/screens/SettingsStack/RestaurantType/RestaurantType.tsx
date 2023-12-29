import React, { useState } from 'react';
import { View, SafeAreaView, Text, FlatList } from 'react-native';
import { styles } from './RestaurantType.styles';
import { MainScreenProp, MainScreens } from '@app/navigation/main/types';
import { BackNavButton } from '@app/components/BackNavButton/BackNavButton';
import { useTranslation } from 'react-i18next';
import {
  SettingsCell,
  SettingsCellType,
} from '@app/components/SettingsCell/SettingsCell';
import { RestauranType } from '@app/types/types';
import { SUPPORTED_RESTAURANTS } from '@app/utilities/constants';

type Props = MainScreenProp<MainScreens.RestaurantTypeScreen>;

export const RestaurantTypeScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const [selectedRestaurant, setSelectedRestaurant] = useState<string>(
    SUPPORTED_RESTAURANTS[1].name,
  );
  const restaurants = SUPPORTED_RESTAURANTS;

  const onSelect = (item: string) => {
    setSelectedRestaurant(item);
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: RestauranType;
    index: number;
  }) => {
    return (
      <SettingsCell
        style={{ marginBottom: 16 }}
        title={item.name}
        cellType={SettingsCellType.radioButton}
        onSelect={onSelect}
        isSelected={selectedRestaurant === item.name}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.navHeader}>
          <BackNavButton onPress={() => navigation.goBack()} />
          <Text style={styles.title}>{t('translations:restaurant_type')}</Text>
        </View>
        <FlatList
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={restaurants}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
};
