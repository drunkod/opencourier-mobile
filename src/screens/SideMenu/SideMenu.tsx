import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { RootScreen, RootScreenProp } from '@app/navigation/types';
import { styles } from './SideMenu.styles';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { ProfileBadge } from '@app/components/ProfileBadge/ProfileBadge';
import { Organization, SideMenuItem, UserStatus } from '@app/types/types';
import { UserStatusSelector } from '@app/components/UserStatusSelector/UserStatusSelector';
import { SideMenuItemSwitch } from '@app/components/SideMenuItemSwitch/SideMenuItemSwitch';
import { SideMenuItemPlain } from '@app/components/SideMenuItemPlain/SideMenuItemPlain';
import { OrganizationSelect } from '@app/components/OrganizationSelect/OrganizationSelect';
import { TEST_ORG_ARRAY } from '@app/utilities/testData';
import {
  getSelectedOrganizationStorage,
  setSelectedOrganizationStorage,
} from '@app/utilities/storage';
import { DrawerScreens } from '@app/navigation/drawer/types';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '@app/redux/user/user';
import { useTranslation } from 'react-i18next';
import RNRestart from 'react-native-restart';
import { selectUser } from '@app/redux/user/user';
import { OrderSetting } from '@app/types/enums';
import { useLocationPermission } from '@app/hooks/useLocationPermission';
import { track } from '@app/utilities/geo';
import { Point } from 'geojson';
import UserContext from '@app/context/userContext';
import Geolocation from 'react-native-geolocation-service';

type Props = RootScreenProp<RootScreen.Loading>;

const section1 = [SideMenuItem.Location, SideMenuItem.AutoOrders];
const section2 = [
  SideMenuItem.Orders,
  SideMenuItem.Earnings,
  SideMenuItem.Payout,
  SideMenuItem.Support,
  SideMenuItem.Settings,
  SideMenuItem.Logout,
];

export const SideMenu = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const { user } = useSelector(selectUser);
  const { requestLocationPermission, locationPermission } =
    useLocationPermission();
  const [realTimeLocation, setRealTimeLocation] =
    useState<boolean>(locationPermission);
  const [autoAcceptOrders, setAutoAcceptOrders] = useState<boolean>(
    user?.orderSetting == ('auto_accept' as unknown as OrderSetting),
  );
  const [selectedOrg, setSelectedOrg] = useState<Organization>(
    TEST_ORG_ARRAY[0],
  );
  const [status, setStatus] = useState<UserStatus>(user!.status);
  const { watchId, setWatchId } = useContext(UserContext);
  const dispatch = useDispatch();

  const isSwitchOn = (item: SideMenuItem) => {
    switch (item) {
      case SideMenuItem.AutoOrders:
        return autoAcceptOrders;
      case SideMenuItem.Location:
        return realTimeLocation;
    }
    return false;
  };

  const handleSwitchValueChange = (item: SideMenuItem, value: boolean) => {
    switch (item) {
      case SideMenuItem.AutoOrders:
        //setAutoAcceptOrdersStorage(value);
        dispatch(
          updateUser({
            id: user!.id,
            data: {
              orderSetting: (value
                ? 'auto_accept'
                : 'manual') as unknown as OrderSetting,
            },
          }),
        );
        setAutoAcceptOrders(value);
        break;
      case SideMenuItem.Location:
        if (value) {
          !locationPermission && requestLocationPermission();
          console.log('Location Tracking Enabled');
          const newWatchId = track((currentLocation: Point) =>
            dispatch(updateUser({ id: user!.id, data: { currentLocation } })),
          );
          setWatchId!(newWatchId);
          setRealTimeLocation(value);
        } else {
          console.log('Location Tracking Disabled');
          watchId && Geolocation.clearWatch(watchId);
          setWatchId!(undefined);
          setRealTimeLocation(value);
        }
        break;
    }
  };

  const organizationSelected = (org: Organization) => {
    // setSelectedOrg(org);
    setSelectedOrganizationStorage(org);
    RNRestart.restart();
  };

  useEffect(() => {
    (async () => {
      const org = await getSelectedOrganizationStorage();
      if (org !== undefined) {
        setSelectedOrg(org);
      }
      //const accept = await getAutoAcceptOrdersStorage();
      //setAutoAcceptOrders(accept);
    })();
  }, []);

  useEffect(() => {
    setStatus(user!.status);
  }, [user!.status]);

  useEffect(() => {
    setRealTimeLocation(locationPermission);
  }, [locationPermission]);

  const handlePress = (item: SideMenuItem) => {
    switch (item) {
      case SideMenuItem.Orders:
        navigation.navigate(DrawerScreens.Home);
        break;
      case SideMenuItem.Earnings:
        navigation.navigate(DrawerScreens.Earnings);
        break;
      case SideMenuItem.Payout:
        navigation.navigate(DrawerScreens.PaymentMethods);
        break;
      case SideMenuItem.Support:
        break;
      case SideMenuItem.Settings:
        navigation.navigate(DrawerScreens.Settings);
        break;
      case SideMenuItem.Logout:
        break;
    }
  };

  const onUserStatusSelect = (newStatus: UserStatus) => {
    if (newStatus === status) {
      return;
    }
    if (status === UserStatus.Offline && newStatus === UserStatus.LastCall) {
      return;
    }
    navigation.navigate(RootScreen.UserStatusModal, {
      status: newStatus,
      onAccept: newStatus => {
        console.log('dispatching update user');
        dispatch(updateUser({ id: user!.id, data: { status: newStatus } }));
      },
      onCancel: () => undefined,
    });
  };

  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <View style={styles.containerProfile}>
          <ProfileBadge
            discreteStatusIndicator
            userStatus={status}
            onPress={() => undefined}
          />
          <Text style={styles.textName}>
            {t('translations:hi') + ` ${user!.firstname}!`}
          </Text>
        </View>
        <OrganizationSelect
          style={styles.cell}
          organization={selectedOrg}
          onPress={() =>
            navigation.navigate(RootScreen.SelectOrganizationModal, {
              preselected: selectedOrg,
              onOrganizationSelect: organizationSelected,
            })
          }
          onSearch={() => undefined}
        />
        <UserStatusSelector
          style={styles.cell}
          selected={status}
          onPress={onUserStatusSelect}
        />
        <View style={styles.separator} />
        {section1.map(item => {
          return (
            <SideMenuItemSwitch
              key={item}
              style={styles.cell}
              isOn={isSwitchOn(item)}
              item={item}
              onValueChange={value => handleSwitchValueChange(item, value)}
            />
          );
        })}
        <View style={styles.separator} />
        {section2.map(item => {
          return (
            <SideMenuItemPlain
              hideArrow={item === SideMenuItem.Logout}
              key={item}
              style={styles.cell}
              item={item}
              onPress={handlePress}
            />
          );
        })}
      </View>
    </DrawerContentScrollView>
  );
};
