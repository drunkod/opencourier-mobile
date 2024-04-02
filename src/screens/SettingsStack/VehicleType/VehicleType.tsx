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
import { selectUser, updateUserSettings } from '@app/redux/user/user';
import { useDispatch, useSelector } from 'react-redux';
import { VehicleType } from '@app/types/enums';

type Props = MainScreenProp<MainScreens.VehicleTypeScreen>;

export const VehicleTypeScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const user = useSelector(selectUser);
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(
    user.settings!.vehicleType ? user.settings!.vehicleType : null, 
  );
  const vehicles = Object.keys(VehicleType).filter((item) => {
    return isNaN(Number(item));
  });

  const onSelect = (vehicle: string) => {
    setSelectedVehicle(vehicle);
    dispatch(updateUserSettings({ id: user.user!.id, settings: { vehicleType: vehicle as unknown as VehicleType } }))
  };

  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <SettingsCell
        style={{ marginBottom: 16 }}
        title={item}
        cellType={SettingsCellType.radioButton}
        onSelect={onSelect}
        isSelected={selectedVehicle === item}
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
          data={vehicles}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
};
