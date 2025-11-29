import { useAccount } from 'jazz-react-native';
import { CourierAccount } from '../schema';
import { UserStatus } from '@app/types/types';

const useUser = (enabled: boolean = true) => {
  const { me } = useAccount();

  const user = me?.profile ? {
    id: me.id,
    email: 'local@user',
    role: ['COURIER'],
    // @ts-ignore - Custom profile fields
    firstName: me.profile.firstName || 'Local',
    // @ts-ignore - Custom profile fields
    lastName: me.profile.lastName || 'Courier',
    // @ts-ignore - Custom profile fields
    phoneNumber: me.profile.phoneNumber,
    // @ts-ignore - Custom profile fields
    status: (me.profile.status as UserStatus) || UserStatus.Offline,
    // @ts-ignore - Custom profile fields
    deliverySetting: me.profile.deliverySetting,
    // @ts-ignore - Custom profile fields
    currentLocation: me.profile.currentLocation,
    // Add other fields required by User type if missing
    createdAt: new Date().toISOString(),
    node_uri: 'local',
    userId: me.id,
  } : undefined;

  const updateStatus = (status: string) => {
    if (me?.profile) {
      // @ts-ignore - Custom profile fields
      me.profile.status = status;
    }
  };

  const updateDeliverySettings = (settings: string) => {
    if (me?.profile) {
      // @ts-ignore - Custom profile fields
      me.profile.deliverySetting = settings;
    }
  };

  const updateUserLocation = (params: { latitude: number; longitude: number }) => {
    if (me?.profile) {
      // @ts-ignore - Custom profile fields
      me.profile.currentLocation = params;
    }
  };

  return {
    user,
    isLoading: !me,
    refetchUser: () => { },
    updateStatus,
    updateDeliverySettings,
    updateUserLocation,
  };
};

export default useUser;
