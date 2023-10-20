import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, Linking, Platform, View } from 'react-native';
import { styles } from './Home.styles';
import { HomeHeader } from '@app/components/HomeHeader/HomeHeader';
import {
  HomeEmptyState,
  HomeTabItem,
  MapLinkingOptions,
  Order,
  UserStatus,
} from '@app/types/types';
import { HomeEmptyStateComponent } from '@app/components/HomeEmptyState/HomeEmptyState';
import { DrawerScreenProp, DrawerScreens } from '@app/navigation/drawer/types';
import { TEST_NEW_ORDERS, TEST_ORDERS_HISTORY } from '@app/utilities/testData';
import { HistoryCell } from '@app/components/HistoryCell/HistoryCell';
import { NewOrderCell } from '@app/components/NewOrderCell/NewOrderCell';
import { getAutoAcceptOrdersStorage } from '@app/utilities/storage';
import { InProgressCell } from '@app/components/InProgressCell/InProgressCell';
import ActionSheet from 'react-native-action-sheet';
import {
  MAP_ACTION_SHEET_OPTIONS_ANDROID,
  MAP_ACTION_SHEET_OPTIONS_IOS,
} from '@app/utilities/constants';
import { MainScreens } from '@app/navigation/main/types';

const data: string[] =
  Platform.OS === 'android'
    ? MAP_ACTION_SHEET_OPTIONS_ANDROID
    : MAP_ACTION_SHEET_OPTIONS_IOS;

type Props = DrawerScreenProp<DrawerScreens.Home>;

export const HomeScreen = ({ navigation }: Props) => {
  const [selectedTab, setSelectedTab] = useState<HomeTabItem>(HomeTabItem.New);
  const [userStatus, setUserStatus] = useState<UserStatus>(UserStatus.Offline);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [dataSourceHistory, setDataSourceHistory] =
    useState<Order[]>(TEST_ORDERS_HISTORY);
  const [dataSourceNew, setDataSourceNew] = useState<Order[]>(TEST_NEW_ORDERS);
  const [dataSourceInProgress, setDataSourceInProgress] =
    useState<Order[]>(TEST_NEW_ORDERS);

  const [dataSource, setDataSource] = useState<Order[]>([]);
  const [autoAcceptOrders, setAutoAcceptOrders] = useState<boolean>(false);
  const [showMapActionSheet, setShowMapActionSheet] = useState<
    Order | undefined
  >(undefined);

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
        return dataSourceNew.length === 0;
      case HomeTabItem.InProgress:
        return dataSourceInProgress.length === 0;
      case HomeTabItem.History:
        return dataSourceHistory.length === 0;
    }
  }, [selectedTab, dataSourceHistory, dataSourceNew, dataSourceInProgress]);

  useEffect(() => {
    switch (selectedTab) {
      case HomeTabItem.New:
        setDataSource(dataSourceNew);
        break;
      case HomeTabItem.InProgress:
        setDataSource(dataSourceInProgress);
        break;
      case HomeTabItem.History:
        setDataSource(dataSourceHistory);
        break;
    }
  }, [selectedTab, dataSourceHistory, dataSourceNew, dataSourceInProgress]);

  const renderItem = ({ item }: { item: Order }) => {
    switch (selectedTab) {
      case HomeTabItem.New:
        return (
          <NewOrderCell
            autoAcceptOrders={autoAcceptOrders}
            order={item}
            onAccept={() => console.warn('ACCEPTED')}
            onDecline={() => console.warn('DECLINED')}
          />
        );
      case HomeTabItem.InProgress:
        return (
          <InProgressCell
            onChatCustomer={() => undefined}
            onChatRestaurant={() => undefined}
            onConfirmItems={() =>
              navigation.navigate(MainScreens.ItemsCollected, {
                items: item.items,
              })
            }
            onContactCustomer={() => undefined}
            onContactRestaurant={() => undefined}
            onMarkAsDelivered={() =>
              navigation.navigate(MainScreens.MarkAsDelivered)
            }
            order={item}
            onMapPress={order => setShowMapActionSheet(order)}
          />
        );
      case HomeTabItem.History:
        setDataSource(dataSourceHistory);
        return <HistoryCell order={item} onPress={() => undefined} />;
    }
  };

  const onSelect = (buttonIndex: number) => {
    setShowMapActionSheet(undefined);
    if (data[buttonIndex] === MapLinkingOptions.apple) {
      const scheme = 'maps://0,0?q=';
      const latLng = '40.730610, -73.935242.';
      const label = 'Test Label';
      const url = `${scheme}${label}@${latLng}`;
      Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.warn('Not Installed');
        }
      });
    }
    if (data[buttonIndex] === MapLinkingOptions.google) {
      const scheme = 'geo:0,0?q=';
      const latLng = '40.730610, -73.935242.';
      const label = 'Test Label';
      const url = `${scheme}${latLng}(${label})`;
      Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.warn('Not Installed');
        }
      });
    }
    if (data[buttonIndex] === MapLinkingOptions.waze) {
      const url =
        'https://www.waze.com/ul?ll=40.75889500%2C-73.98513100&navigate=yes&zoom=17';
      Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        }
      });
    }
  };

  const showActionSheeet = (_order: Order) => {
    ActionSheet.showActionSheetWithOptions(
      {
        options: data,
        cancelButtonIndex: 3,
        tintColor: 'blue',
        cancelButtonTintColor: 'red',
      },
      onSelect,
    );
  };

  useEffect(() => {
    (async () => {
      const accept = await getAutoAcceptOrdersStorage();
      setAutoAcceptOrders(accept);
    })();
  }, []);

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
          data={dataSource}
          renderItem={renderItem}
        />
      )}
      {showMapActionSheet !== undefined && showActionSheeet(showMapActionSheet)}
    </View>
  );
};
