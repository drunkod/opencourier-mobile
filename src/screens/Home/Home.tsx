import React, { useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './Home.styles';
import { HomeHeader } from '@app/components/HomeHeader/HomeHeader';
import {
  HomeEmptyState,
  HomeTabItem,
  Order,
  UserStatus,
} from '@app/types/types';
import { HomeEmptyStateComponent } from '@app/components/HomeEmptyState/HomeEmptyState';
import { DrawerScreenProp, DrawerScreens } from '@app/navigation/drawer/types';
import { TEST_ORDERS_HISTORY } from '@app/utilities/testData';
import { HistoryCell } from '@app/components/HistoryCell/HistoryCell';

type Props = DrawerScreenProp<DrawerScreens.Home>;

export const HomeScreen = ({ navigation }: Props) => {
  const [selectedTab, setSelectedTab] = useState<HomeTabItem>(HomeTabItem.New);
  const [userStatus, setUserStatus] = useState<UserStatus>(UserStatus.Offline);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [dataSourceHistory, setDataSourceHistory] =
    useState<Order[]>(TEST_ORDERS_HISTORY);

  const onProfilePress = () => {
    navigation.toggleDrawer();
  };

  const emptyState = useMemo(() => {
    switch (selectedTab) {
      case HomeTabItem.New:
        return userStatus === UserStatus.Online
          ? HomeEmptyState.WaitingNewOrders
          : HomeEmptyState.New;
      case HomeTabItem.InProgress:
        return HomeEmptyState.InProgress;
      case HomeTabItem.History:
        return HomeEmptyState.History;
    }
  }, [selectedTab, userStatus]);

  const showEmptyState = useMemo(() => {
    switch (selectedTab) {
      case HomeTabItem.New:
        return true;
      case HomeTabItem.InProgress:
        return true;
      case HomeTabItem.History:
        return dataSourceHistory.length === 0;
    }
  }, [selectedTab, dataSourceHistory]);

  const renderItem = ({ item }: { item: Order }) => {
    return <HistoryCell order={item} onPress={() => undefined} />;
  };

  return (
    <View style={styles.container}>
      <HomeHeader
        userStatus={userStatus}
        selectedTab={selectedTab}
        onProfile={onProfilePress}
        onSearch={setIsSearching}
        onTabSelected={setSelectedTab}
        newCount={2}
        inProgressCount={1}
        searchShown={isSearching}
        searchText={searchText}
        onSearchTextChange={setSearchText}
      />
      {showEmptyState && <HomeEmptyStateComponent state={emptyState} />}
      {!showEmptyState && (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={dataSourceHistory}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};
