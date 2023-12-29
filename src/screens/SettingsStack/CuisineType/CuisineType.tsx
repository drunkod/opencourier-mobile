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
import { CuisineType } from '@app/types/types';
import { SUPPORTED_CUISINES } from '@app/utilities/constants';

type Props = MainScreenProp<MainScreens.CuisineTypeScreen>;

export const CuisineTypeScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const [selectedCuisine, setSelectedCuisine] = useState<string>(
    SUPPORTED_CUISINES[1].name,
  );
  const cuisines = SUPPORTED_CUISINES;

  const onSelect = (item: string) => {
    setSelectedCuisine(item);
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: CuisineType;
    index: number;
  }) => {
    return (
      <SettingsCell
        style={{ marginBottom: 16 }}
        title={item.name}
        cellType={SettingsCellType.radioButton}
        onSelect={onSelect}
        isSelected={selectedCuisine === item.name}
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
