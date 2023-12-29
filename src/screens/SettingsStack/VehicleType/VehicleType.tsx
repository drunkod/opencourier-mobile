import React, { useState } from 'react';
import { View, SafeAreaView, Text, FlatList } from 'react-native';
import { styles } from './VehicleType.styles';
import { MainScreenProp, MainScreens } from '@app/navigation/main/types';
import { BackNavButton } from '@app/components/BackNavButton/BackNavButton';
import { useTranslation } from 'react-i18next';
import {
  SettingsCell,
  SettingsCellType,
} from '@app/components/SettingsCell/SettingsCell';
import { Vehicle } from '@app/types/types';
import { SUPPORTED_VEHICLES } from '@app/utilities/constants';

type Props = MainScreenProp<MainScreens.VehicleTypeScreen>;

export const VehicleTypeScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const [selectedVehicle, setSelectedVehicle] = useState<string>(
    SUPPORTED_VEHICLES[1].name,
  );
  const ringtones = SUPPORTED_VEHICLES;

  const onSelect = (item: string) => {
    setSelectedVehicle(item);
  };

  const renderItem = ({ item, index }: { item: Vehicle; index: number }) => {
    return (
      <SettingsCell
        style={{ marginBottom: 16 }}
        title={item.name}
        cellType={SettingsCellType.radioButton}
        onSelect={onSelect}
        isSelected={selectedVehicle === item.name}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.navHeader}>
          <BackNavButton onPress={() => navigation.goBack()} />
          <Text style={styles.title}>{t('translations:vehicle_type')}</Text>
        </View>
        <FlatList
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={ringtones}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
};
