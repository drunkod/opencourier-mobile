import React from 'react';
import { StyleProp, ViewStyle, View, Text } from 'react-native';
import { styles } from './HomeHeader.styles';
import { HomeTabItem, UserStatus } from '@app/types/types';
import { ProfileBadge } from '../ProfileBadge/ProfileBadge';
import { ButtonSearch } from '../ButtonSearch/ButtonSearch';
import { Colors } from '@app/styles/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { HomeTabs } from '../HomeTabs/HomeTabs';
import { SearchBar } from '../SearchBar/SearchBar';
import { WaitingForOrders } from '../WaitingForOrders/WaitingForOrders';

type Props = {
  style?: StyleProp<ViewStyle>;
  onProfile: () => void;
  onTabSelected: (tab: HomeTabItem) => void;
  onSearch: (toggled: boolean) => void;
  selectedTab: HomeTabItem;
  userStatus: UserStatus;
  newCount: number;
  inProgressCount: number;
  searchShown: boolean;
  onSearchTextChange: (text: string) => void;
  searchText: string;
};

export const HomeHeader = ({
  style,
  onProfile,
  onTabSelected,
  onSearch,
  selectedTab,
  userStatus,
  newCount,
  inProgressCount,
  searchShown,
  onSearchTextChange,
  searchText,
}: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.content, style, { paddingTop: top }]}>
      {userStatus === UserStatus.Online && (
        <LinearGradient
          style={[styles.gradient, { height: top + 100 }]}
          colors={Colors.onlineGradientArray}
        />
      )}
      {userStatus !== UserStatus.Online && (
        <LinearGradient
          style={[styles.gradient, { height: top + 100 }]}
          colors={Colors.offlineGradientArray}
        />
      )}
      {selectedTab === HomeTabItem.New && userStatus === UserStatus.Online && (
        <WaitingForOrders style={styles.waiting} />
      )}
      <View style={styles.containerButtons}>
        <ProfileBadge userStatus={userStatus} onPress={onProfile} />
        <Text style={styles.textTitle}>Open Deli</Text>
        <ButtonSearch onPress={onSearch} isSearching={searchShown} />
      </View>
      <HomeTabs
        newCount={newCount}
        inProgressCount={inProgressCount}
        onTabSelected={onTabSelected}
        selectedTab={selectedTab}
      />
      {searchShown && (
        <SearchBar
          style={styles.searchBar}
          text={searchText}
          onTextChange={onSearchTextChange}
        />
      )}
    </View>
  );
};
