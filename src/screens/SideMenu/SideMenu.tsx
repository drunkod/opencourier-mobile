import React, { useState } from 'react';
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

type Props = RootScreenProp<RootScreen.Loading>;

const org: Organization = {
  name: 'BOS Pescatarian',
  id: '111',
  imageUrl:
    'https://w7.pngwing.com/pngs/380/764/png-transparent-paper-box-computer-icons-symbol-random-icons-miscellaneous-angle-text.png',
};

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
  const [userStatus, setUserStatus] = useState<UserStatus>(UserStatus.Online);
  const [realTimeLocation, setRealTimeLocation] = useState<boolean>(false);
  const [autoAcceptOrders, setAutoAcceptOrders] = useState<boolean>(false);

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
        return setAutoAcceptOrders(value);
      case SideMenuItem.Location:
        return setRealTimeLocation(value);
    }
  };

  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <View style={styles.containerProfile}>
          <ProfileBadge
            discreteStatusIndicator
            userStatus={UserStatus.Online}
            onPress={() => undefined}
          />
          <Text style={styles.textName}>HI Delena!</Text>
        </View>
        <OrganizationSelect
          style={styles.cell}
          organization={org}
          onPress={() => undefined}
          onSearch={() => undefined}
        />
        <UserStatusSelector
          style={styles.cell}
          selected={userStatus}
          onPress={setUserStatus}
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
              onPress={() => undefined}
            />
          );
        })}
      </View>
    </DrawerContentScrollView>
  );
};
