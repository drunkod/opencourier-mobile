import AsyncStorage from '@react-native-async-storage/async-storage';

export const AUTO_ACCEPT_ORDERS_KEY = 'auto_accept_orders';

export const setAutoAcceptOrdersStorage = async (accept: boolean) => {
  const stringValue = accept ? 'yes' : 'no';
  await AsyncStorage.setItem(AUTO_ACCEPT_ORDERS_KEY, stringValue);
};

export const getAutoAcceptOrdersStorage = async (): Promise<boolean> => {
  const accept = await AsyncStorage.getItem(AUTO_ACCEPT_ORDERS_KEY);
  if (accept === null) {
    return false;
  }
  return accept === 'yes';
};
