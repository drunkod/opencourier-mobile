import moment, { Moment } from 'moment';

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

export enum InstanceTabItem {
  Description = 'description',
  Rules = 'rules',
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

export type Instance = {
  name: string;
  imageUrl: string;
  link: string;
  userCount: number;
  description: string;
  rules: string;
};

export enum SettingsOptions {
  accountInformation = 'account_information',
  accessibility = 'accessibility',
  emergencyContact = 'emergency_contact',
  earningMethod = 'earning_method',
  language = 'language',
  navigation = 'navigation',
  operatingArea = 'specify_operating',
  theme = 'theme',
  verification = 'verification',
  notifications = 'notifications',
  cashOnDelivery = 'cash_on_delivery',
  deliveryBag = 'delivery_bag',
  includeOrdersWithDrinks = 'include_orders_drinks',
  licenses = 'licenses',
  vehicleType = 'vehicle_type',
  cuisineTypes = 'cuisine_types',
  restaurantTypes = 'restaurant_types',
  orderTypes = 'order_types',
  weightOrder = 'weight_order',
  rushedOrders = 'rushed_orders',
  shiftAvailability = 'shift_availability',
}

export type Language = {
  id: string;
  name: string;
  abreviation: string;
};

export type Theme = {
  id: string;
  name: string;
};

export enum AccessibilitySettingsOptions {
  volume = 'default_volume',
  sound = 'default_sound',
  myLanguages = 'my_languages',
  differentSounds = 'enable_different_sounds',
  screenFlash = 'screen_flash',
  vibration = 'enable_vibration',
  readingNotes = 'reading_notes',
  seatbeltReminder = 'seatbelt_reminder',
  deaf = 'im_deaf',
}

export type Ringtone = {
  id: string;
  name: string;
};

export type Volume = {
  id: string;
  name: string;
};

export enum ToastMessage {
  enableNotifications = 'enable_notifications',
  itemsBagged = 'items_bagged',
  enableLocationServices = 'enable_location_services',
  pickupBeforeContinuing = 'pickup_before_continue',
  waitingForNewOrders = 'waiting_for_orders',
  addressCopied = 'address_copied',
  get_closer = 'get_closer_to_restaurant',
  item_may_be_bagged = 'item_may_be_bagged',
}

export type Vehicle = {
  id: string;
  name: string;
};

export type RestauranType = {
  id: string;
  name: string;
};

export type CuisineType = {
  id: string;
  name: string;
};

export type EarningMethod = {
  id: string;
  name: string;
};

export type OrderPreference = {
  id: string;
  name: string;
};

export type WeightOrder = {
  id: string;
  name: string;
  info: string;
};

export type ShiftRange = {
  start: string;
  end: string;
};

export type ShiftAvailability = {
  day: string;
  shifts: ShiftRange[];
};

export enum OrderState {
  orderPickup,
  confirmingOrderItems,
  orderDeliveryInProgress,
  deliveryDone,
}
