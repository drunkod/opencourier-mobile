import React, { useState } from 'react';
import { View, SafeAreaView, Text, FlatList } from 'react-native';
import { styles } from './EarningsMethod.styles';
import { MainScreenProp, MainScreens } from '@app/navigation/main/types';
import { BackNavButton } from '@app/components/BackNavButton/BackNavButton';
import { useTranslation } from 'react-i18next';
import {
  SettingsCell,
  SettingsCellType,
} from '@app/components/SettingsCell/SettingsCell';
import { EarningMethod } from '@app/types/types';
import { SUPPORTED_EARNING_METHODS } from '@app/utilities/constants';

type Props = MainScreenProp<MainScreens.EarningsMethodScreen>;

export const EarningsMethodScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const [selectedMethod, setSelectedmethod] = useState<string>(
    SUPPORTED_EARNING_METHODS[1].name,
  );
  const methods = SUPPORTED_EARNING_METHODS;

  const onSelect = (item: string) => {
    setSelectedmethod(item);
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: EarningMethod;
    index: number;
  }) => {
    return (
      <SettingsCell
        style={{ marginBottom: 16 }}
        title={item.name}
        cellType={SettingsCellType.radioButton}
        onSelect={onSelect}
        isSelected={selectedMethod === item.name}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.navHeader}>
          <BackNavButton onPress={() => navigation.goBack()} />
          <Text style={styles.title}>{t('translations:earning_method')}</Text>
        </View>
        <FlatList
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={methods}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
};
