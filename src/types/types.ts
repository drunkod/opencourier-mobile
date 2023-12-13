export enum UserStatus {
  Online = 'online',
  Offline = 'offline',
  LastCall = 'last_call',
}

export enum HomeTabItem {
  New = 'new',
  InProgress = 'in_progress',
  History = 'history',
}

export enum HomeEmptyState {
  New = 'New',
  InProgress = 'In Progress',
  History = 'History',
  WaitingNewOrders = 'waitingNewOrders',
}

export enum SideMenuItem {
  Location = 'real_time_location',
  AutoOrders = 'auto_accept_orders',
  Orders = 'orders',
  Earnings = 'earnings',
  Payout = 'payout_method',
  Support = 'support',
  Settings = 'settings',
  Logout = 'log_out',
}

export enum OrderStatus {
  Delivered = 'delivered',
  Canceled = 'canceled',
  DroppingOff = 'dropping_off',
}

export enum DeliveryType {
  LeaveAtDoor = 'leave_at_door',
  MeetOutside = 'meet_outside',
  MeetInside = 'meet_inside',
  MeetAtDoor = 'meet_at_door',
  CallOnArrival = 'call_on_arrival',
}

export enum PickupType {
  LineupThirdPartyPickup = 'line_up_pickup',
  ParkThirdPartyLot = 'park_in_lot',
  DontOpenBags = `dont_open_bags`,
  CallOnArrival = 'call_on_arrival',
}

export enum MapLinkingOptions {
  apple = 'apple_maps',
  google = 'google_maps',
  waze = 'waze',
}

export enum CustomerNotes {
  PreventLeaks = 'prevent_leaks',
  BellnotRung = 'bell_not_rung',
  HandleWithCare = 'handle_with_care',
  DontBlockDoor = `dont_block_door`,
}

export enum EarningsTabItem {
  Today = 'today',
  Weekly = 'weekly',
  All = 'all',
}

export enum PaymentTabItem {
  Bank = 'bank',
  DirectDebit = 'direct_debit',
}

export type Organization = {
  name: string;
  id: string;
  imageUrl: string;
  iconUrl?: string;
};

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

export type PickupInstruction = {
  type: string;
  count?: number;
};

export type OrderItem = {
  name: string;
  quantity: number;
  size: string;
  dimensions: Dimensions;
  price: number;
  must_be_upright: boolean;
  weight: number;
};

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

export enum MapDestination {
  customer,
  restaurant,
}
