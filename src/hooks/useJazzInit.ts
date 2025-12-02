import { useEffect } from 'react';
import { useAccount } from 'jazz-react-native';
import { UserStatus } from '@app/types/types';

/**
 * Hook to initialize Jazz account data on first use
 * Call this in App.tsx or a root component
 */
export const useJazzInit = () => {
  const { me } = useAccount();

  useEffect(() => {
    if (!me) return;

    // Initialize profile if not exists
    // @ts-ignore
    if (!me.profile || !me.profile.firstName) {
      console.log('[Jazz Init] Initializing profile...');
      // @ts-ignore - Legacy initialization pattern, will be refactored with proper Jazz schema
      me.profile = {
        firstName: 'Courier',
        lastName: 'User',
        phoneNumber: '',
        status: UserStatus.Offline,
        deliverySetting: 'manual',
        currentLocation: {
          latitude: 0,
          longitude: 0,
        },
      } as any;
    }

    // Initialize root if not exists
    // @ts-ignore
    if (!me.root) {
      console.log('[Jazz Init] Initializing root...');
      // @ts-ignore - Legacy initialization pattern, will be refactored with proper Jazz schema
      me.root = {
        orders: [],
        settings: {
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
      } as any;
    }
  }, [me]);

  return { me };
};
