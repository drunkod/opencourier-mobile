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

type Props = MainScreenProp<MainScreens.WeightOrderScreen>;

export const WeightOrderScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const [selectedOrder, setSelectedOrder] = useState<string>(
    SUPPORTED_WEIGHT_ORDERS[1].name,
  );
  const orders = SUPPORTED_WEIGHT_ORDERS;

  const onSelect = (item: string) => {
    setSelectedOrder(item);
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: WeightOrder;
    index: number;
  }) => {
    return (
      <SettingsCell
        style={{ marginBottom: 16 }}
        title={item.name}
        subtitle={item.info}
        cellType={SettingsCellType.radioButton}
        radioButtonType={RadioButtonType.checkmark}
        onSelect={onSelect}
        isSelected={selectedOrder === item.name}
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
