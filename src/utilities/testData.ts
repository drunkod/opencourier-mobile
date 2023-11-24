import {
  Order,
  OrderStatus,
  Organization,
  DeliveryType,
  PickupType,
} from '@app/types/types';

export const TEST_IMAGE_URL =
  'https://w7.pngwing.com/pngs/380/764/png-transparent-paper-box-computer-icons-symbol-random-icons-miscellaneous-angle-text.png';

export const TEST_ORG_ARRAY: Organization[] = [
  {
    name: 'BOS Pescatarian',
    id: '1',
    imageUrl: TEST_IMAGE_URL,
    iconUrl: TEST_IMAGE_URL,
  },
  {
    name: 'Sustainable NYC',
    id: '2',
    imageUrl: TEST_IMAGE_URL,
    iconUrl: TEST_IMAGE_URL,
  },
  {
    name: 'London Ladies',
    id: '3',
    imageUrl: TEST_IMAGE_URL,
    iconUrl: TEST_IMAGE_URL,
  },
  {
    name: `Mom n' Pop LA`,
    id: '4',
    imageUrl: TEST_IMAGE_URL,
    iconUrl: TEST_IMAGE_URL,
  },
];

export const TEST_ORDERS_HISTORY: Order[] = [
  {
    id: '#A1B2C3',
    deliveredTo: {
      firstname: 'Krystal',
      address: 'Sunflower St #111 San Antonio, TX 78006',
      lastname: '',
      profilePictureUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU',
    },
    date: '29 JUL 2022 - 9:10 AM',
    status: OrderStatus.Delivered,
    restaurant: {
      name: 'Mi Familia Restaurant ',
      address: '17623 La Cantera Pkwy #103 San Antonio, TX 78249',
    },
    price: 30.95,
    clientNotes: ['Client Note 1', 'Client Note 2'],
    pickupInstructions: [
      { type: PickupType.CallOnArrival },
      { type: PickupType.DontOpenBags },
      { type: PickupType.ParkThirdPartyLot, count: 3 },
      { type: PickupType.LineupThirdPartyPickup, count: 3 },
    ],
    deliveryInstructions: [
      DeliveryType.CallOnArrival,
      DeliveryType.LeaveAtDoor,
      DeliveryType.MeetAtDoor,
      DeliveryType.MeetInside,
      DeliveryType.MeetOutside,
    ],
    items: [
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' },
      { name: 'Item 4' },
    ],
  },
  {
    id: '#W1X2Z4',
    deliveredTo: {
      address: 'Sunflower St #111 San Antonio, TX 78006',
      firstname: 'Emilio',
      lastname: '',
      profilePictureUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU',
    },
    date: '21 OCT 2022 - 2:05 PM',
    status: OrderStatus.Canceled,
    restaurant: {
      name: 'Mi Familia Restaurant ',
      address: '17623 La Cantera Pkwy #103 San Antonio, TX 78249',
    },
    price: 13.85,
    clientNotes: ['Client Note 1', 'Client Note 2'],
    pickupInstructions: [
      { type: PickupType.CallOnArrival },
      { type: PickupType.DontOpenBags },
      { type: PickupType.ParkThirdPartyLot, count: 3 },
      { type: PickupType.LineupThirdPartyPickup, count: 3 },
    ],
    deliveryInstructions: [
      DeliveryType.CallOnArrival,
      DeliveryType.LeaveAtDoor,
      DeliveryType.MeetAtDoor,
      DeliveryType.MeetInside,
      DeliveryType.MeetOutside,
    ],
    items: [
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' },
      { name: 'Item 4' },
    ],
  },
  {
    id: '#H142TY',
    deliveredTo: {
      firstname: 'Matt',
      address: 'Sunflower St #111 San Antonio, TX 78006',
      lastname: '',
      profilePictureUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU',
    },
    date: '7 JAN 2022 - 3:10 PM',
    status: OrderStatus.Delivered,
    restaurant: {
      name: 'Mi Familia Restaurant ',
      address: '17623 La Cantera Pkwy #103 San Antonio, TX 78249',
    },
    price: 11.99,
    clientNotes: ['Client Note 1', 'Client Note 2'],
    pickupInstructions: [
      { type: PickupType.CallOnArrival },
      { type: PickupType.DontOpenBags },
      { type: PickupType.ParkThirdPartyLot, count: 3 },
      { type: PickupType.LineupThirdPartyPickup, count: 3 },
    ],
    deliveryInstructions: [
      DeliveryType.CallOnArrival,
      DeliveryType.LeaveAtDoor,
      DeliveryType.MeetAtDoor,
      DeliveryType.MeetInside,
      DeliveryType.MeetOutside,
    ],
    items: [
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' },
      { name: 'Item 4' },
    ],
  },
];

export const TEST_NEW_ORDERS: Order[] = [
  {
    id: 'id1',
    deliveredTo: {
      address: 'Sunflower St #111 San Antonio, TX 78006',
      firstname: 'James R',
      lastname: '',
      location: { lat: 51.497583051332, lon: -0.20000902923313477 },
      profilePictureUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU',
    },
    date: Date(),
    status: OrderStatus.Delivered,
    restaurant: {
      name: 'La Gloria',
      address: '17623 La Cantera Pkwy #103 San Antonio, TX 78249',
      location: { lat: 51.53340136458096, lon: -0.12186910229810398 },
    },
    price: 11.21,
    restaurantNotes: ['Restaurant Note 1', 'Restaurant Note 2'],
    clientNotes: ['Client Note 1', 'Client Note 2'],
    pickupInstructions: [
      { type: PickupType.CallOnArrival },
      { type: PickupType.DontOpenBags },
      { type: PickupType.ParkThirdPartyLot, count: 3 },
      { type: PickupType.LineupThirdPartyPickup, count: 3 },
    ],
    deliveryInstructions: [
      DeliveryType.CallOnArrival,
      DeliveryType.LeaveAtDoor,
      DeliveryType.MeetAtDoor,
      DeliveryType.MeetInside,
      DeliveryType.MeetOutside,
    ],
    items: [
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' },
      { name: 'Item 4' },
    ],
  },
];

export const TEST_EARNINGS_ORDERS: Order[] = [
  {
    id: '1',
    date: '27 OCT 2023 - 3:10 PM',
    restaurant: { name: 'Mi Familia Restaurant' },
    price: 10.0,
  },
  {
    id: '2',
    date: '27 OCT 2023 - 4:10 PM',
    restaurant: { name: 'Ocean Harmony Bistro' },
    price: 10.0,
  },
  {
    id: '3',
    date: '27 OCT 2023 - 5:10 PM',
    restaurant: { name: 'Local Catch Café' },
    price: 10.0,
  },
  {
    id: '4',
    date: '20 OCT 2023 - 5:10 PM',
    restaurant: { name: 'Local Catch Café' },
    price: 10.0,
  },
  {
    id: '5',
    date: '20 OCT 2023 - 5:10 PM',
    restaurant: { name: 'Local Catch Café' },
    price: 10.0,
  },
  {
    id: '6',
    date: '20 OCT 2023 - 5:10 PM',
    restaurant: { name: 'Local Catch Café' },
    price: 10.0,
  },
  {
    id: '7',
    date: '20 OCT 2023 - 5:10 PM',
    restaurant: { name: 'Local Catch Café' },
    price: 10.0,
  },
  {
    id: '8',
    date: '20 OCT 2023 - 5:10 PM',
    restaurant: { name: 'Local Catch Café' },
    price: 10.0,
  },
  {
    id: '9',
    date: '20 OCT 2023 - 5:10 PM',
    restaurant: { name: 'Local Catch Café' },
    price: 10.0,
  },
];

export const TEST_USER = {
  address: 'Sunflower St #111 San Antonio, TX 78006',
  firstname: 'James R',
  lastname: '',
  location: { lat: 51.497583051332, lon: -0.20000902923313477 },
  profilePictureUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU',
};

export const TEST_API_NEW_ORDER = {
  id: 'a3f68b2e-6b46-4e4b-9f53-19e91d2e9d08',
  order_id: 'c4d2b4de-3f8b-441f-a5f4-37f9b65e1f17',
  courier_id: 'b3107f69-768d-4c67-b5f2-5c4e5b0356b7',
  customer_id: 'f4a2c2a1-3f8b-441f-a5f4-37f9b65e1f17',
  customer_name: 'Alex Smith',
  merchant_id: 'e4a2c2a1-3f8b-441f-a5f4-37f9b65e1f17',
  merchant_name: 'Burger King',
  merchant_phone_number: '555-0199',
  status: 'dropping_off',
  created_at: '2023-04-05T14:48:00Z',
  updated_at: '2023-04-05T15:48:00Z',
  currency: 'USD',
  customer_notes_for_courier: [],
  courier_notes_for_customer: ['Hot food', 'Handle with care'],
  courier_tips_for_merchant: [
    {
      courier_id: 'c2d3e4f5-g6h7-i8j9-k10l-mn11o12p13q4',
      tip_text:
        'Merchant is faster with pre-orders, recommend contacting ahead of time.',
      upvotes: 3,
    },
    {
      courier_id: 'd3e4f5g6-h7i8-j9k1-lm2n-o12p34q56r78',
      tip_text: 'Parking available behind the store after 6 PM.',
      upvotes: 8,
    },
  ],
  pickup: {
    location: {
      addressLine1: '123 Main St',
      addressLine2: 'Apt 4',
      locality: 'Springfield',
      postalCode: '62701',
      countryCode: 'US',
    },
    coordinates: {
      latitude: 39.7817,
      longitude: -89.6501,
    },
  },
  dropoff: {
    location: {
      addressLine1: '456 Elm St',
      addressLine2: '',
      locality: 'Springfield',
      postalCode: '62704',
      countryCode: 'US',
    },
    coordinates: {
      latitude: 39.7817,
      longitude: -89.6202,
    },
  },
  items: [
    {
      name: 'Cheeseburger',
      quantity: 2,
      size: 'medium',
      dimensions: {
        length: 10,
        width: 6,
        height: 4,
        unit: 'cm',
      },
      price: 15,
      must_be_upright: false,
      weight: 500,
    },
    {
      name: 'Fries',
      quantity: 1,
      size: 'small',
      dimensions: {
        length: 10,
        width: 6,
        height: 4,
        unit: 'cm',
      },
      price: 5,
      must_be_upright: false,
      weight: 200,
    },
    {
      name: 'Soda',
      quantity: 1,
      size: 'small',
      dimensions: {
        length: 10,
        width: 6,
        height: 4,
        unit: 'cm',
      },
      price: 5,
      must_be_upright: true,
      weight: 200,
    },
  ],
  undeliverable_action: '',
  undeliverable_reason: '',
  return: {
    location: {
      addressLine1: '123 Main St',
      addressLine2: 'Apt 4',
      locality: 'Springfield',
      postalCode: '62701',
      countryCode: 'US',
    },
    coordinates: {
      latitude: 39.7817,
      longitude: -89.6501,
    },
  },
  income: {
    currency: 'USD',
    total_charge: '30',
    fees: '5',
    total: '25',
    pay: '20',
    tips: '5',
  },
};
