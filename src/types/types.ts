export enum UserStatus {
  Online = 'Online',
  Offline = 'Offline',
  LastCall = 'Last Call',
}

export enum HomeTabItem {
  New = 'New',
  InProgress = 'In Progress',
  History = 'History',
}

export enum HomeEmptyState {
  New = 'New',
  InProgress = 'In Progress',
  History = 'History',
  WaitingNewOrders = 'WaitingNewOrders',
}

export enum SideMenuItem {
  Location = 'Real-time location',
  AutoOrders = 'Auto accept orders',
  Orders = 'Orders',
  Earnings = 'Earnings',
  Payout = 'Payout method',
  Support = 'Support',
  Settings = 'Settings',
  Logout = 'Log-out',
}

export type Organization = {
  name: string;
  id: string;
  imageUrl: string;
  iconUrl?: string;
};

export enum OrderStatus {
  Delivered = 'Delivered',
  Canceled = 'Canceled',
  DroppingOff = 'dropping_off',
}

export type User = {
  firstname: string;
  lastname: string;
  profilePictureUrl: string;
  address: string;
  location?: { lat: number; lon: number };
};

export type Restaurant = {
  name: string;
  address: string;
  location?: { lat: number; lon: number };
};

export type Order = {
  date: string;
  id: string;
  order_id: string;
  courier_id: string;
  customer_id: string;
  customer_name: string;
  merchant_id: string;
  merchant_name: string;
  merchant_phone_number: string;
  created_at: string;
  updated_at: string;
  currency: 'USD';
  customer_notes_for_courier: string[];
  courier_notes_for_customer: string[];
  courier_tips_for_merchant: CourierTip[];
  pickup: { location: Location; coordinates: Coordinates };
  dropoff: { location: Location; coordinates: Coordinates };
  undeliverable_action: string;
  undeliverable_reason: string;
  return: { location: Location; coordinates: Coordinates };
  income: Income;
  status: OrderStatus;
  deliveredTo: User;
  restaurant: Restaurant;
  price: number;
  deliveryInstructions?: DeliveryType[];
  pickupInstructions?: PickupInstruction[];
  restaurantNotes?: string[];
  clientNotes?: string[];
  items: OrderItem[];
};

export enum DeliveryType {
  LeaveAtDoor = 'Leave at door',
  MeetOutside = 'Meet outside',
  MeetInside = 'Meet inside',
  MeetAtDoor = 'Meet at door',
  CallOnArrival = 'Call on arrival',
}

export enum PickupType {
  LineupThirdPartyPickup = 'Line up for third-party pickup',
  ParkThirdPartyLot = 'Park in third-party lot',
  DontOpenBags = `Don't open bags for checklist`,
  CallOnArrival = 'Call on arrival',
}

export type PickupInstruction = {
  type: string;
  count?: number;
};

export enum MapLinkingOptions {
  apple = 'Apple Maps',
  google = 'Google Maps',
  waze = 'Waze',
}

export type OrderItem = {
  name: string;
  quantity: number;
  size: string;
  dimensions: Dimensions;
  price: number;
  must_be_upright: boolean;
  weight: number;
};

export enum CustomerNotes {
  PreventLeaks = 'Prevent Leaks',
  BellnotRung = 'Bell Not Rung',
  HandleWithCare = 'Handle with care: Hot!',
  DontBlockDoor = `Don't block door access`,
}

export enum EarningsTabItem {
  Today = 'Today',
  Weekly = 'Weekly',
  All = 'All',
}

export enum PaymentTabItem {
  Bank = 'Bank',
  DirectDebit = 'Direct Debit',
}

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type CoordinatesRange = {
  latitude_range: number[];
  longitude_range: number[];
};

export type Location = {
  addressLine1: string;
  addressLine2: string;
  locality: string;
  postalCode: number;
  countryCode: string;
};

export type CourierTip = {
  courier_id: string;
  tip_text: string;
  upvotes: number;
};

export type Dimensions = {
  length: number;
  width: number;
  height: number;
  unit: string;
};

export type Income = {
  currency: string;
  total_charge: number;
  fees: number;
  total: number;
  pay: number;
  tips: number;
};

export type Pagination = {
  total: number;
  lastPage: number;
  currentPage: number;
  perPage: number;
  prevPage: number;
  nextPage: number;
};

export type ConfirmItemsCheck = {
  orderId: string;
  confirmedItems: boolean;
};
