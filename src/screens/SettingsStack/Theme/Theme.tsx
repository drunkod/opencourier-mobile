import React, { useState } from 'react';
import { View, SafeAreaView, Text, FlatList } from 'react-native';
import { styles } from './Theme.styles';
import { MainScreenProp, MainScreens } from '@app/navigation/main/types';
import { BackNavButton } from '@app/components/BackNavButton/BackNavButton';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_THEMES } from '@app/utilities/constants';
import { Theme } from '@app/types/types';
import {
  SettingsCell,
  SettingsCellType,
} from '@app/components/SettingsCell/SettingsCell';

type Props = MainScreenProp<'ThemeScreen'>;

export const ThemeScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const [selectedTheme, setSelectedTheme] = useState<Theme>(
    SUPPORTED_THEMES[0],
  );
  const themes = SUPPORTED_THEMES;

  const renderItem = ({ item, index }: { item: Theme; index: number }) => {
    return (
      <SettingsCell
        style={{ marginBottom: 16 }}
        title={item.name}
        subtitle={undefined}
        cellType={SettingsCellType.radioButton}
        onSelect={themeName => {
          const found = SUPPORTED_THEMES.find(t => t.name === themeName);
          if (found) setSelectedTheme(found);
        }}
        isSelected={selectedTheme.name === item.name}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.navHeader}>
          <BackNavButton onPress={() => navigation.goBack()} />
          <Text style={styles.title}>{t('translations:theme')}</Text>
        </View>
        <FlatList
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={themes}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
};
