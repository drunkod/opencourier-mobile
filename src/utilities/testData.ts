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
