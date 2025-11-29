import { useAccount } from 'jazz-react-native';
import { UserSettings } from '@app/services/types';

const useUserSettings = () => {
  const { me } = useAccount();

  // @ts-ignore - Custom root fields
  const settings = me?.root?.settings;

  const updateSettings = (params: { settings: Partial<UserSettings> }) => {
    if (settings && params.settings) {
      Object.entries(params.settings).forEach(([key, value]) => {
        // @ts-ignore
        settings[key] = value;
      });
    }
  };

  return {
    settings: settings as unknown as UserSettings,
    isLoading: !me,
    isUpdating: false,
    updateSettings,
  };
};

export default useUserSettings;
