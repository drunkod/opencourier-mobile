import React, { useState } from 'react';
import { View, SafeAreaView, Text, FlatList } from 'react-native';
import { styles } from './CuisineType.styles';
import { MainScreenProp, MainScreens } from '@app/navigation/main/types';
import { BackNavButton } from '@app/components/BackNavButton/BackNavButton';
import { useTranslation } from 'react-i18next';
import {
  SettingsCell,
  SettingsCellType,
} from '@app/components/SettingsCell/SettingsCell';
import { selectUser, updateUserSettings } from '@app/redux/user/user';
import { useDispatch, useSelector } from 'react-redux';
import { CuisineTypes } from '@app/types/enums';

type Props = MainScreenProp<MainScreens.CuisineTypeScreen>;

export const CuisineTypeScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(
    user.settings!.cuisineTypes ? user.settings!.cuisineTypes[0].toString() : null
  );
  const cuisines = Object.keys(CuisineTypes).filter((item) => {
    return isNaN(Number(item));
  });

  const onSelect = (cuisine: string) => {
    setSelectedCuisine(cuisine);
    dispatch(updateUserSettings({id: user.user!.id, settings: {cuisineTypes: [cuisine as unknown as CuisineTypes]}}))
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
        isSelected={selectedCuisine === item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.navHeader}>
          <BackNavButton onPress={() => navigation.goBack()} />
          <Text style={styles.title}>{t('translations:cuisine_type')}</Text>
        </View>
        <FlatList
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={cuisines}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
};
