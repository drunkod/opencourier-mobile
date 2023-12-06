import React from 'react';
import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { styles } from './HomeTabs.styles';
import { HomeTabItem } from '@app/types/types';
import { Colors } from '@app/styles/colors';
import { useTranslation } from 'react-i18next';

type Props = {
  style?: StyleProp<ViewStyle>;
  newCount: number;
  inProgressCount: number;
  selectedTab: HomeTabItem;
  onTabSelected: (tab: HomeTabItem) => void;
};

export const HomeTabs = ({
  style,
  newCount,
  inProgressCount,
  selectedTab,
  onTabSelected,
}: Props) => {
  const { t } = useTranslation();
  const tabs: HomeTabItem[] = [
    HomeTabItem.New,
    HomeTabItem.InProgress,
    HomeTabItem.History,
  ];

  const tabSelectedColor = (currentTab: HomeTabItem): string => {
    return currentTab === selectedTab ? Colors.black1 : Colors.gray2;
  };

  const TabItem = ({ tab }: { tab: HomeTabItem }) => {
    return (
      <TouchableOpacity style={styles.tab} onPress={() => onTabSelected(tab)}>
        <View style={styles.containerTabText}>
          <Text style={[styles.textTab, { color: tabSelectedColor(tab) }]}>
            {t(`translations:${tab}`)}
          </Text>
          {tab === HomeTabItem.New && newCount > 0 && (
            <View
              style={[
                styles.containerCount,
                { backgroundColor: Colors.orange1 },
              ]}>
              <Text style={styles.textCount}>{newCount}</Text>
            </View>
          )}
          {tab === HomeTabItem.InProgress && inProgressCount > 0 && (
            <View
              style={[
                styles.containerCount,
                { backgroundColor: Colors.green2 },
              ]}>
              <Text style={styles.textCount}>{inProgressCount}</Text>
            </View>
          )}
        </View>
        {selectedTab === tab && <View style={styles.indicator} />}
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.tabs}>
        {tabs.map(tab => {
          return <TabItem tab={tab} />;
        })}
      </View>
    </View>
  );
};
