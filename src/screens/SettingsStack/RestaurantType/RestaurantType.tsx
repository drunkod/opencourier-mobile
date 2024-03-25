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
import { RestaurantTypes } from '@app/types/enums';
import { selectUser } from '@app/redux/user/user';
import { useSelector } from 'react-redux';

type Props = MainScreenProp<MainScreens.RestaurantTypeScreen>;

export const RestaurantTypeScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const user = useSelector(selectUser);
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(
    user.settings.cuisineTypes ? user.settings.cuisineTypes[0].toString() : null,
  );
  const restaurants = Object.keys(RestaurantTypes).filter((item) => {
    return isNaN(Number(item));
  });

  const onSelect = (item: string) => {
    setSelectedRestaurant(item);
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
        isSelected={selectedRestaurant === item}
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
