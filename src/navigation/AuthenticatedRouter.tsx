import React, { useContext, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootScreen, RootStackParamList } from '@app/navigation/types';
import { MainStack } from './main/MainNavigation';
import { SelectOrganizationModal } from '@app/screens/SelectOrganizationModal/SelectOrganizationModal';
import { SearchOrganization } from '@app/screens/SearchOrganization/SearchOrganization';
import { StatusPopupScreen } from '@app/screens/StatusPopup/StatusPopupScreen';
import { AddNote } from '@app/screens/AddNote/AddNote';
import { DeleteNote } from '@app/screens/DeleteNote/DeleteNote';
import { DatePickerScreen } from '@app/screens/DatePicker/DatePicker';
import { track } from '@app/utilities/geo';
import { Point } from 'geojson';
import Geolocation from 'react-native-geolocation-service';
import { useLocationPermission } from '@app/hooks/useLocationPermission';
import UserContext from '@app/context/userContext';
import useUser from '@app/hooks/useUser';
import { useJazzInit } from '@app/hooks/useJazzInit';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const DEFAULT_OPTIONS = { headerShown: false };

export const AuthenticatedRouter = () => {
    const { user, updateUserLocation } = useUser();
    const { setWatchId, watchId } = useContext(UserContext);
    const { locationPermission } = useLocationPermission();

    // Initialize Jazz data
    useJazzInit();

    useEffect(() => {
        if (!user || !locationPermission) {
            console.log('Location Tracking Disabled');
            watchId && Geolocation.clearWatch(watchId);
            setWatchId(undefined);
        } else if (!watchId) {
            console.log('Location Tracking Enabled');
            const newWatchId = track((currentLocation: Point) =>
                updateUserLocation({
                    latitude: currentLocation.coordinates[1],
                    longitude: currentLocation.coordinates[0],
                }),
            );
            setWatchId(newWatchId);
        }
    }, [locationPermission, user?.id]);

    return (
        <RootStack.Navigator>
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
        </RootStack.Navigator>
    );
};
