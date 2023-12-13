import React, { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Linking,
  Platform,
  RefreshControl,
  View,
} from 'react-native';
import { styles } from './Home.styles';
import { HomeHeader } from '@app/components/HomeHeader/HomeHeader';
import {
  CourierTip,
  HomeEmptyState,
  HomeTabItem,
  MapDestination,
  MapLinkingOptions,
  Order,
  PickupInstruction,
  UserStatus,
} from '@app/types/types';
import { HomeEmptyStateComponent } from '@app/components/HomeEmptyState/HomeEmptyState';
import { DrawerScreenProp, DrawerScreens } from '@app/navigation/drawer/types';
import { HistoryCell } from '@app/components/HistoryCell/HistoryCell';
import { NewOrderCell } from '@app/components/NewOrderCell/NewOrderCell';
import { getAutoAcceptOrdersStorage } from '@app/utilities/storage';
import { InProgressCell } from '@app/components/InProgressCell/InProgressCell';
import ActionSheet from 'react-native-action-sheet';
import { MainScreens } from '@app/navigation/main/types';
import Clipboard from '@react-native-clipboard/clipboard';
import { useDispatch, useSelector } from 'react-redux';
import { acceptOrder, declineOrder } from '@app/redux/order/order';
import { useHomeOrders } from '@app/hooks/useHomeOrders';
import { RootState } from '@app/redux/store';
import { useTranslation } from 'react-i18next';
import { RootScreen } from '@app/navigation/types';

type Props = DrawerScreenProp<DrawerScreens.Home>;

export const HomeScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const [availableMapApps, setAvailableMapApps] = useState<string[]>([
    t('translations:cancel'),
  ]);
  const [selectedTab, setSelectedTab] = useState<HomeTabItem>(HomeTabItem.New);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [dataSource, setDataSource] = useState<Order[]>([]);
  const [autoAcceptOrders, setAutoAcceptOrders] = useState<boolean>(false);
  const [showMapActionSheet, setShowMapActionSheet] = useState<
    { order: Order; destination: MapDestination } | undefined
  >(undefined);
  const [refreshing, setRefreshing] = React.useState(false);
  const [orderDeliveredNotif, setOrderDeliveredNotif] =
    useState<boolean>(false);
  const dispatch = useDispatch();
  const {
    dataSourceHistory,
    dataSourceInProgress,
    dataSourceNew,
    newOrdersTimers,
    getNewOrdersFinished,
    getInProgressOrdersFinished,
    getOrderHistoryFinished,
    fetchHistory,
    fetchInProgressOrders,
    fetchNewOrders,
    itemsConfirmedForOrder,
    confirmedItems,
  } = useHomeOrders();
  const { userStatus } = useSelector((state: RootState) => state.user);

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

  const onAcceptNewOrder = (order: Order) => {
    dispatch(acceptOrder(order));
  };

  const onDeclineNewOrder = (order: Order) => {
    dispatch(declineOrder(order));
  };

  const getRemainingSecondsForNewOrder = (order: Order) => {
    const arr = newOrdersTimers.filter(timer => timer.orderId === order.id);
    if (arr.length > 0) {
      return arr[0].secondsRemaining;
    } else {
      return 0;
    }
  };

  const renderItem = ({ item }: { item: Order }) => {
    switch (selectedTab) {
      case HomeTabItem.New:
        return (
          <NewOrderCell
            secondsRemaining={getRemainingSecondsForNewOrder(item)}
            autoAcceptOrders={autoAcceptOrders}
            order={item}
            onAccept={onAcceptNewOrder}
            onDecline={onDeclineNewOrder}
            onCopyCustomer={order =>
              Clipboard.setString(order.deliveredTo.address)
            }
            onCopyRestaurant={order =>
              Clipboard.setString(order.restaurant.address)
            }
          />
        );
      case HomeTabItem.InProgress:
        //TODO: TEMP FIX
        if (item.dropoff.location === undefined) {
          return <View />;
        }
        return (
          <InProgressCell
            itemsConfirmed={itemsConfirmedForOrder(item)}
            onCopyCustomer={order =>
              Clipboard.setString(order.dropoff.location.addressLine1)
            }
            onCopyRestaurant={order =>
              Clipboard.setString(order.pickup.location.addressLine1)
            }
            onConfirmItems={() => {
              navigation.navigate(MainScreens.ItemsCollected, {
                order: item,
              });
            }}
            onContactCustomer={() => Linking.openURL(`tel://${12341251511}`)}
            onContactRestaurant={() => Linking.openURL(`tel://${12341251511}`)}
            onMarkAsDelivered={() =>
              navigation.navigate(MainScreens.MarkAsDelivered)
            }
            order={item}
            onRestaurantAddressPress={order =>
              setShowMapActionSheet({
                order: order,
                destination: MapDestination.restaurant,
              })
            }
            onCustomerAddressPress={order =>
              setShowMapActionSheet({
                order: order,
                destination: MapDestination.customer,
              })
            }
            onAddNote={onAddNote}
            onPickupInstructionPress={onPickupInstructionPress}
          />
        );
      case HomeTabItem.History:
        return <HistoryCell order={item} onPress={() => undefined} />;
    }
  };

  const onPickupInstructionPress = (order: Order, instruction: CourierTip) => {
    var temp = dataSource.filter(obj => obj.id === order.id);
    if (temp.length > 0 && temp[0].courier_tips_for_merchant) {
      var newInstructions: CourierTip[] = temp[0].courier_tips_for_merchant.map(
        ins => {
          if (ins.tip_text === instruction.tip_text) {
            return {
              courier_id: instruction.courier_id,
              tip_text: instruction.tip_text,
              upvotes: instruction.upvotes ? instruction.upvotes + 1 : 2,
            };
          }
          return ins;
        },
      );
      temp[0].courier_tips_for_merchant = [...newInstructions];
      setDataSource(temp);
    }
  };

  const onSelect = (buttonIndex: number) => {
    const { order, destination } = showMapActionSheet;
    if (
      order !== undefined &&
      order.pickup !== undefined &&
      order.dropoff !== undefined &&
      destination !== undefined
    ) {
      const labelCustomer =
        order.customer_name ?? t('translations:dropoff_address');
      const labelRestauran =
        order.merchant_name ?? t('translations:pickup_address');
      const label =
        destination === MapDestination.customer
          ? labelCustomer
          : labelRestauran;

      const latLngCustomer = `${order.dropoff.coordinates.latitude}, ${order.dropoff.coordinates.longitude}.`;
      const latLngRestaurant = `${order.pickup.coordinates.latitude}, ${order.pickup.coordinates.longitude}.`;
      const latLng = MapDestination.customer
        ? latLngCustomer
        : latLngRestaurant;

      if (
        availableMapApps[buttonIndex] ===
        t(`translations:${MapLinkingOptions.apple}`)
      ) {
        const scheme = 'maps://0,0?q=';
        const url = `${scheme}${label}@${latLng}`;
        Linking.canOpenURL(url).then(supported => {
          if (supported) {
            Linking.openURL(url);
          }
        });
      }
      if (
        availableMapApps[buttonIndex] ===
        t(`translations:${MapLinkingOptions.google}`)
      ) {
        const scheme = 'geo:0,0?q=';
        const url = `${scheme}${latLng}(${label})`;
        Linking.canOpenURL(url).then(supported => {
          if (supported) {
            Linking.openURL(url);
          }
        });
      }
      if (
        availableMapApps[buttonIndex] ===
        t(`translations:${MapLinkingOptions.waze}`)
      ) {
        const url = `https://www.waze.com/ul?ll=${latLng}&navigate=yes&zoom=17`;
        Linking.canOpenURL(url).then(supported => {
          if (supported) {
            Linking.openURL(url);
          }
        });
      }
    }
    setShowMapActionSheet(undefined);
  };

  const showActionSheeet = (_order: Order) => {
    ActionSheet.showActionSheetWithOptions(
      {
        options: availableMapApps,
        cancelButtonIndex: Math.max(0, availableMapApps.length - 1),
        tintColor: 'blue',
        cancelButtonTintColor: 'red',
      },
      onSelect,
    );
  };

  const onNoteAdded = (note: string, order: Order) => {
    if (note) {
      var temp = dataSource.filter(obj => obj.id === order.id);
      if (temp.length > 0 && temp[0].courier_tips_for_merchant) {
        temp[0].courier_tips_for_merchant = [
          ...temp[0].courier_tips_for_merchant,
          { courier_id: order.courier_id, tip_text: note, upvotes: 0 },
        ];
        setDataSource(temp);
      }
    }
  };

  const onAddNote = (order: Order) => {
    navigation.navigate(RootScreen.AddNoteModal, {
      onNoteAdded: onNoteAdded,
      order: order,
    });
  };

  const onRefresh = () => {
    switch (selectedTab) {
      case HomeTabItem.New:
        fetchNewOrders();
        break;
      case HomeTabItem.InProgress:
        fetchInProgressOrders();
        break;
      case HomeTabItem.History:
        fetchHistory();
        break;
    }
  };

  const checkInstalledMapApps = async () => {
    const waze: boolean = await Linking.canOpenURL('waze://');
    const google: boolean = await Linking.canOpenURL('comgooglemaps://');
    const apple: boolean = await Linking.canOpenURL('maps://');
    const maps = [];
    if (apple) {
      maps.push(t(`translations:${MapLinkingOptions.apple}`));
    }
    if (google) {
      maps.push(t(`translations:${MapLinkingOptions.google}`));
    }
    if (waze) {
      maps.push(t(`translations:${MapLinkingOptions.waze}`));
    }
    maps.push(t('translations:cancel'));
    setAvailableMapApps(maps);
  };

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

  useEffect(() => {
    (async () => {
      const accept = await getAutoAcceptOrdersStorage();
      setAutoAcceptOrders(accept);
      checkInstalledMapApps();
    })();
  }, []);

  const showLoader = useMemo(() => {
    return (
      !getNewOrdersFinished ||
      !getInProgressOrdersFinished ||
      !getOrderHistoryFinished
    );
  }, [
    getNewOrdersFinished,
    getInProgressOrdersFinished,
    getOrderHistoryFinished,
  ]);

  return (
    <View style={styles.container}>
      <HomeHeader
        orderDeliveredNotification={orderDeliveredNotif}
        onCloseOrderDeliveredNotification={() =>
          setOrderDeliveredNotif(!orderDeliveredNotif)
        }
        userStatus={userStatus}
        selectedTab={selectedTab}
        onProfile={onProfilePress}
        onSearch={setIsSearching}
        onTabSelected={setSelectedTab}
        newCount={dataSourceNew.length}
        inProgressCount={dataSourceInProgress.length}
        searchShown={isSearching}
        searchText={searchText}
        onSearchTextChange={setSearchText}
        loadingNewOrders={
          selectedTab === HomeTabItem.New && !getNewOrdersFinished
        }
      />

      {showEmptyState && <HomeEmptyStateComponent state={emptyState} />}
      {!showEmptyState && (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={dataSource}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl refreshing={showLoader} onRefresh={onRefresh} />
          }
        />
      )}

      {showMapActionSheet !== undefined && showActionSheeet(showMapActionSheet)}
    </View>
  );
};
