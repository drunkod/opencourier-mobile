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
