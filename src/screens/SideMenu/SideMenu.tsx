import React, { useEffect, useState } from 'react';
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
import { MainScreens } from '@app/navigation/main/types';
import { TEST_ORG_ARRAY } from '@app/utilities/testData';
import { OrganizationScreens } from '@app/navigation/organizationNavigation/types';
import {
  getAutoAcceptOrders,
  getAutoAcceptOrdersStorage,
  setAutoAcceptOrdersStorage,
} from '@app/utilities/storage';
import { DrawerScreens } from '@app/navigation/drawer/types';
import { RootState } from '@app/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setUserStatus } from '@app/redux/user/user';
import { useTranslation } from 'react-i18next';

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
  const [realTimeLocation, setRealTimeLocation] = useState<boolean>(false);
  const [autoAcceptOrders, setAutoAcceptOrders] = useState<boolean>(false);
  const [selectedOrg, setSelectedOrg] = useState<Organization>(
    TEST_ORG_ARRAY[0],
  );
  const { userStatus } = useSelector((state: RootState) => state.user);
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
        setAutoAcceptOrdersStorage(value);
        return setAutoAcceptOrders(value);
      case SideMenuItem.Location:
        return setRealTimeLocation(value);
    }
  };

  const organizationSelected = (org: Organization) => {
    setSelectedOrg(org);
  };

  useEffect(() => {
    (async () => {
      const accept = await getAutoAcceptOrdersStorage();
      setAutoAcceptOrders(accept);
    })();
  }, []);

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

  const onUserStatusSelect = (status: UserStatus) => {
    if (status === userStatus) {
      return;
    }
    if (userStatus === UserStatus.Offline && status === UserStatus.LastCall) {
      return;
    }
    navigation.navigate(RootScreen.UserStatusModal, {
      status: status,
      onAccept: newStatus => dispatch(setUserStatus(newStatus)),
      onCancel: () => undefined,
    });
  };

  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <View style={styles.containerProfile}>
          <ProfileBadge
            discreteStatusIndicator
            userStatus={userStatus}
            onPress={() => undefined}
          />
          <Text style={styles.textName}>
            {t('translations:hi') + ' Delena!'}
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
          selected={userStatus}
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
