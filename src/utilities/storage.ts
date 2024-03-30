import { Organization } from '@app/types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AUTO_ACCEPT_ORDERS_KEY = 'auto_accept_orders';
export const SELECTED_ORG_KEY = 'selected_org_key';
export const SEEN_NEW_ORDERS = 'seen_new_orders';

// QQQ: Shouldn't this just be stored in the backend?
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

export const setSelectedOrganizationStorage = async (org: Organization) => {
  const toSave = JSON.stringify(org);
  await AsyncStorage.setItem(SELECTED_ORG_KEY, toSave);
};

export const getSelectedOrganizationStorage = async (): Promise<
  Organization | undefined
> => {
  const org = await AsyncStorage.getItem(SELECTED_ORG_KEY);
  if (org === null) {
    return undefined;
  }
  return JSON.parse(org);
};

export const setSeenNewOrders = async (orderIds: string[]) => {
  const toSave = JSON.stringify(orderIds);
  await AsyncStorage.setItem(SEEN_NEW_ORDERS, toSave);
};

export const getSeenNewOrders = async (): Promise<
  string[] | undefined
> => {
  const orderIds = await AsyncStorage.getItem(SEEN_NEW_ORDERS);
  if (orderIds === null) {
    return undefined;
  }
  return JSON.parse(orderIds);
};
