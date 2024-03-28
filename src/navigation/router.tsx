import React, { useContext, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootScreen, RootStackParamList } from '@app/navigation/types';
import { LoadingScreen } from '@app/screens/Loading/Loading';
import { OnboardingStack } from '@app/navigation/onboarding/OnboardingNavigation';
import { MainStack } from './main/MainNavigation';
import { SelectOrganizationModal } from '@app/screens/SelectOrganizationModal/SelectOrganizationModal';
import { SearchOrganization } from '@app/screens/SearchOrganization/SearchOrganization';
import { StatusPopupScreen } from '@app/screens/StatusPopup/StatusPopupScreen';
import usePushNotifications from '@app/services/notifications';
import { AddNote } from '@app/screens/AddNote/AddNote';
import { DeleteNote } from '@app/screens/DeleteNote/DeleteNote';
import { DatePickerScreen } from '@app/screens/DatePicker/DatePicker';
import User from '@app/context/userContext';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, updateUser } from '@app/redux/user/user';
import { track } from '@app/utilities/geo';
import { Point } from 'geojson';
import Geolocation from 'react-native-geolocation-service';
import { useLocationPermission } from '@app/hooks/useLocationPermission';
import UserContext from '@app/context/userContext';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const DEFAULT_OPTIONS = { headerShown: false };

export const Router = () => {
  const { user } = useSelector(selectUser)
  const { setWatchId, watchId } = useContext(UserContext);
  const { locationPermission } = useLocationPermission();
  const dispatch = useDispatch();

  // usePushNotifications(true);
  // if (user.isLoading) {
  //   return <RootStack.Screen
  //     name={RootScreen.Loading}
  //     component={LoadingScreen}
  //     options={DEFAULT_OPTIONS}
  //   />
  // }

  useEffect(() => {
    if (locationPermission) {
      console.log("Beginning location tracking")
      const newWatchId = track((currentLocation: Point) => user && dispatch(updateUser({ id: user.id, data: { currentLocation } })));
      setWatchId!(newWatchId)
    } else {
      console.log("Stopping location tracking")
      user && dispatch(updateUser({ id: user.id, data: { currentLocation: null } }));
      watchId && Geolocation.clearWatch(watchId);
      setWatchId!(undefined);
    }
  }, [locationPermission]);

  return (
    <RootStack.Navigator>
      {!user ? (
        <RootStack.Screen
          name={RootScreen.Onboarding}
          component={OnboardingStack}
          options={DEFAULT_OPTIONS}
        />
      ) : (
        <>
          <RootStack.Screen
            name={RootScreen.Main}
            component={MainStack}
            options={DEFAULT_OPTIONS}
          />
          <RootStack.Screen
            name={RootScreen.SelectOrganizationModal}
            component={SelectOrganizationModal}
            options={{ headerShown: false, presentation: 'transparentModal' }}
          />
          <RootStack.Screen
            name={RootScreen.SearchOrganization}
            component={SearchOrganization}
            options={{
              headerShown: false,
              presentation: 'transparentModal',
            }}
          />
          <RootStack.Screen
            name={RootScreen.UserStatusModal}
            component={StatusPopupScreen}
            options={{ headerShown: false, presentation: 'transparentModal' }}
          />
          <RootStack.Screen
            name={RootScreen.AddNoteModal}
            component={AddNote}
            options={{ headerShown: false, presentation: 'transparentModal' }}
          />
          <RootStack.Screen
            name={RootScreen.DeleteNoteModal}
            component={DeleteNote}
            options={{ headerShown: false, presentation: 'transparentModal' }}
          />
          <RootStack.Screen
            name={RootScreen.DatePickerScreen}
            component={DatePickerScreen}
            options={{ headerShown: false, presentation: 'transparentModal' }}
          />
        </>
      )}
    </RootStack.Navigator>
  );
};
