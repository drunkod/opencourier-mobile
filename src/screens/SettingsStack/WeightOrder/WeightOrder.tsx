import React, { useState } from 'react';
import { View, SafeAreaView, Text, FlatList } from 'react-native';
import { styles } from './WeightOrder.styles';
import { MainScreenProp, MainScreens } from '@app/navigation/main/types';
import { BackNavButton } from '@app/components/BackNavButton/BackNavButton';
import { useTranslation } from 'react-i18next';
import {
  RadioButtonType,
  SettingsCell,
  SettingsCellType,
} from '@app/components/SettingsCell/SettingsCell';
import { WeightOrder } from '@app/types/types';
import { SUPPORTED_WEIGHT_ORDERS } from '@app/utilities/constants';
import { selectUser, updateUserSettings } from '@app/redux/user/user';
import { useDispatch, useSelector } from 'react-redux';
import { OrderPreferences } from '@app/types/enums';

type Props = MainScreenProp<MainScreens.WeightOrderScreen>;

const weightInfo = new Map(
  [['small_orders', 'weight_info_small'], ['medium_orders', 'weight_info_medium'],
  ['large_orders', 'weight_info_large']]);

export const WeightOrderScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const { user, settings } = useSelector(selectUser);
  const dispatch = useDispatch();
  const [selectedOrder, setSelectedOrder] = useState<string | null>(
    settings?.orderPreferences && settings.orderPreferences.length > 0 ? settings.orderPreferences[0]: null
  );
  const orders = Object.keys(OrderPreferences).filter((item) => {
    return isNaN(Number(item));
  });

  const onSelect = (orderPreference: string) => {
    setSelectedOrder(orderPreference);
    dispatch(updateUserSettings({ id: user!.id, settings: { orderPreferences: [orderPreference as unknown as OrderPreferences] } }))
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
        subtitle={weightInfo.get(item) || ""}
        cellType={SettingsCellType.radioButton}
        radioButtonType={RadioButtonType.checkmark}
        onSelect={onSelect}
        isSelected={selectedOrder === item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.navHeader}>
          <BackNavButton onPress={() => navigation.goBack()} />
          <Text style={styles.title}>{t('translations:weight_order')}</Text>
        </View>
        <FlatList
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={orders}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
};
