import { useEffect } from 'react';
import { useAccount } from 'jazz-tools/react-native';
import { CoMap, CourierProfile, OrderList, UserSettings } from '@app/schema';
import { UserStatus } from '@app/types/types';
import { Group } from 'jazz-tools';

/**
 * Hook to initialize Jazz account data on first use
 * Call this in App.tsx or a root component
 */
export const useJazzInit = () => {
  const me = useAccount();

  useEffect(() => {
    if (me && me.$isLoaded) {
      if (!me.profile) {
        const profileGroup = Group.create();
        profileGroup.makePublic('reader');
        // @ts-ignore
        me.profile = CourierProfile.create(
          {
            name: 'Courier User',
            firstName: 'Courier',
            lastName: 'User',
            phoneNumber: '',
            status: UserStatus.Offline,
            deliverySetting: 'asap',
            currentLocation: {
              latitude: 0,
              longitude: 0,
            },
          },
          profileGroup
        );
      }
      if (!me.root) {
        // @ts-ignore
        me.root = CoMap.create(
          {
            orders: OrderList.create([], { owner: me }),
            settings: UserSettings.create(
              {
                vehicleType: 'car',
                preferredAreas: [],
                shiftAvailability: [],
                deliveryPreferences: [],
                foodPreferences: [],
                restaurantTypes: [],
                cuisineTypes: [],
                preferredRestaurantPartners: [],
                dietaryRestrictions: [],
              },
              { owner: me }
            ),
          },
          { owner: me }
        );
      }
    }
  }, [me, me?.$isLoaded]);

  return { me };
};
