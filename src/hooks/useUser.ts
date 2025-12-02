import { useAccount } from 'jazz-tools/react-native';
import { UserStatus } from '@app/types/types';
import { getLoadedOrUndefined } from 'jazz-tools';

const useUser = () => {
  const me = useAccount();
  const loadedMe = getLoadedOrUndefined(me);

  const user = loadedMe?.profile ? {
    id: loadedMe.$jazz.id,
    email: 'local@user',
    role: ['COURIER'],
    // @ts-ignore - Custom profile fields
    firstName: loadedMe.profile.firstName || 'Local',
    // @ts-ignore - Custom profile fields
    lastName: loadedMe.profile.lastName || 'Courier',
    // @ts-ignore - Custom profile fields
    phoneNumber: loadedMe.profile.phoneNumber,
    // @ts-ignore - Custom profile fields
    status: (loadedMe.profile.status as UserStatus) || UserStatus.Offline,
    // @ts-ignore - Custom profile fields
    deliverySetting: loadedMe.profile.deliverySetting,
    // @ts-ignore - Custom profile fields
    currentLocation: loadedMe.profile.currentLocation,
    // Add other fields required by User type if missing
    createdAt: new Date().toISOString(),
    node_uri: 'local',
    userId: loadedMe.$jazz.id,
  } : undefined;

  const updateStatus = (status: string) => {
    if (loadedMe?.profile) {
      // @ts-ignore - Custom profile fields
      loadedMe.profile.status = status;
    }
  };

  const updateDeliverySettings = (settings: string) => {
    if (loadedMe?.profile) {
      // @ts-ignore - Custom profile fields
      loadedMe.profile.deliverySetting = settings;
    }
  };

  const updateUserLocation = (params: { latitude: number; longitude: number }) => {
    if (loadedMe?.profile) {
      // @ts-ignore - Custom profile fields
      loadedMe.profile.currentLocation = params;
    }
  };

  return {
    user,
    isLoading: !loadedMe,
    refetchUser: () => { },
    updateStatus,
    updateDeliverySettings,
    updateUserLocation,
  };
};

export default useUser;
