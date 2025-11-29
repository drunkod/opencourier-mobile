# DeepWiki Q&A with Code Context for Repository: Princeton-HCI/opencourier-mobile
## Q1
create todo list how setup my app to work without backend with localfist store
what files changes for this functionalyty
get all files uses for backend
### Answer
Based on my analysis of the OpenCourier mobile codebase, here's a comprehensive guide to convert the app from backend-dependent to local-first storage:

## Files Currently Using Backend

### Service Layer (API Communication)
All backend API calls are centralized in the service layer:

- **`src/services/Client.ts`** - Axios HTTP client with automatic token injection opencourier-mobile:9-30 

- **`src/services/Services.ts`** - Service facade that instantiates all services opencourier-mobile:13-27 

- **`src/services/orderService.ts`** - All order-related API endpoints (getNewOrders, getInProgressOrders, getOrdersHistory, acceptOrder, declineOrder, confirmItems, markAsDelivered) opencourier-mobile:20-78 

- **`src/services/userService.ts`** - User/authentication API endpoints (login, signup, getUser, getUserSettings, updateUserSettings, setUserStatus, setDeliverySettings, setUserLocation) opencourier-mobile:29-88 

- **`src/services/commentService.ts`** - Comment/location notes API endpoints opencourier-mobile:16-48 

- **`src/services/socket.ts`** - WebSocket connection for real-time order updates opencourier-mobile:9-72 

### Custom Hooks (Data Fetching Layer)
These hooks use React Query to consume the services:

- **`src/hooks/useHomeOrders.ts`** - Fetches new, in-progress, and history orders opencourier-mobile:43-68 

- **`src/hooks/useUser.ts`** - Fetches and updates user data opencourier-mobile:9-44 

- **`src/hooks/useOrder.ts`** - Order mutations (confirmItems) opencourier-mobile:6-20 

- **`src/hooks/useComment.ts`** - Comment CRUD operations opencourier-mobile:6-47 

- **`src/hooks/useUserSetttings.ts`** - User settings management opencourier-mobile:6-24 

### Screens Using Services Directly
- **`src/screens/onboarding/JoinInstance/JoinInstance.tsx`** - Signup flow
- **`src/screens/onboarding/LoginInstance/LoginInstance.tsx`** - Login flow
- **`src/screens/MarkAsDelivered/MarkAsDelivered.tsx`** - Delivery completion
- **`src/screens/SideMenu/SideMenu.tsx`** - User status updates

### Storage Utilities (Already in use)
- **`src/utilities/storage.ts`** - AsyncStorage wrapper for local data (auth token, organization, auto-accept settings) opencourier-mobile:1-64 

## TODO List: Local-First Storage Implementation

### Phase 1: Set Up Local Database
1. **Install a local database solution**
   - Add WatermelonDB or Realm to `package.json` for robust local-first storage
   - Consider SQLite for simpler implementation
   - Alternative: Extend AsyncStorage usage with better data modeling

2. **Create database schema**
   - Define tables/collections for: Orders, Users, Comments, UserSettings
   - Create migration files
   - Set up relationships between entities

### Phase 2: Create Local Storage Services
3. **Create local storage service layer** (New files needed)
   - `src/services/storage/orderStorageService.ts` - Local CRUD for orders
   - `src/services/storage/userStorageService.ts` - Local CRUD for users
   - `src/services/storage/commentStorageService.ts` - Local CRUD for comments
   - `src/services/storage/syncService.ts` - Handle sync logic (optional for future backend sync)

4. **Update service factory**
   - Modify `src/services/Services.ts` to use local storage services instead of API services
   - Create a flag/config to switch between local and remote mode

### Phase 3: Replace Backend Services
5. **Replace `orderService.ts` implementation** opencourier-mobile:1-81 
   - Change all API calls to local storage operations
   - Implement local ID generation (UUID)
   - Add timestamp tracking for order states
   - Keep the same interface so hooks don't need changes

6. **Replace `userService.ts` implementation** opencourier-mobile:1-90 
   - Store user data locally instead of fetching from API
   - Implement local authentication (or skip auth for local-only mode)
   - Store user settings in AsyncStorage or local DB

7. **Replace `commentService.ts` implementation** opencourier-mobile:1-50 
   - Store comments locally with order relationships
   - Implement local reaction counting

8. **Remove or mock `Client.ts`** opencourier-mobile:1-82 
   - Remove Axios dependency or keep for future use
   - Remove token interceptor logic

9. **Remove `socket.ts` or mock it** opencourier-mobile:1-72 
   - Remove WebSocket connection
   - Replace real-time updates with local polling or manual refresh

### Phase 4: Update Storage Utilities
10. **Extend `storage.ts`** opencourier-mobile:1-64 
    - Add methods for storing complete order objects
    - Add methods for storing user objects
    - Add methods for storing comments
    - Consider using a prefix/namespace system for better organization

### Phase 5: Update Data Access Layer
11. **Verify hooks work with local services**
    - `useHomeOrders.ts` should work unchanged if service interface is maintained opencourier-mobile:33-193 
    - `useUser.ts` should work unchanged opencourier-mobile:6-54 
    - `useComment.ts` should work unchanged opencourier-mobile:6-47 
    - `useOrder.ts` should work unchanged opencourier-mobile:6-20 
    - `useUserSetttings.ts` should work unchanged opencourier-mobile:6-24 

### Phase 6: Seed Local Data
12. **Create seed data utilities** (New file needed)
    - `src/utilities/seedData.ts` - Create demo orders, users, etc.
    - Use existing test data from `DemoClient.ts` as reference opencourier-mobile:12-70 

13. **Update onboarding screens**
    - Skip login/signup for local mode, or create local profiles
    - Automatically seed initial data on first launch

### Phase 7: Update Configuration
14. **Update `package.json`**
    - Add local database dependency (WatermelonDB/Realm/react-native-sqlite-storage)
    - Remove axios if not needed (currently at version 1.6.0) opencourier-mobile:25-25 
    - Remove socket.io-client if not needed opencourier-mobile:50-50 

15. **Add local-first mode configuration**
    - Add environment variable or config file to enable/disable local mode
    - Update app initialization to skip backend setup in local mode

### Phase 8: Testing
16. **Test all user flows**
    - Order acceptance/decline flow
    - Order status transitions (dispatched → picked up → delivered)
    - Comment creation/editing/deletion
    - User settings updates
    - Data persistence across app restarts

## Notes

- **Demo Client Exists**: There's already a `DemoClient.ts` with test data that you can reference opencourier-mobile:1-70 

- **AsyncStorage Already In Use**: The app already uses AsyncStorage for tokens and settings, making it easy to extend for more data opencourier-mobile:1-64 

- **Service Interface Pattern**: The current architecture uses factory functions for services, which makes swapping implementations straightforward opencourier-mobile:13-27 

- **React Query Integration**: All data fetching uses React Query through custom hooks, which means you only need to update the service layer - the UI layer remains unchanged

- **Consider Sync Strategy**: If you plan to eventually sync with a backend, design your local storage with sync metadata (lastModified, syncStatus, etc.)
### Citations
**File:** src/services/Client.ts (L1-82)
```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
//@ts-ignore

export interface UClient extends AxiosInstance {}

const timeout = 10000;

const Client = (): UClient => {
  const options: AxiosRequestConfig = {
    timeout: timeout,
    headers: {
      Accept: 'application/json',
    },
  };

  const addInterseptor = (axiosClient: UClient) => {
    axiosClient.interceptors.request.use(config => {
      return new Promise(async resolve => {
        if (!config.headers.Authorization) {
          const token = await AsyncStorage.getItem('token');
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }

        resolve(config);
      });
    });
  };

  // const refreshToken = async (): Promise<string> => {
  //   // pull token
  //   // return token;
  //   return '';
  // };

  //   const refreshInterceptor = axiosClient.interceptors.response.use(
  //     response => response,
  //     error => {
  //       if (
  //         error.response &&
  //         error.response.data &&
  //         error.response.data.statusCode
  //       ) {
  //         const status = error.response.data.statusCode;
  //         // Reject promise if usual error
  //         if (status !== 401) {
  //           return Promise.reject(error);
  //         }
  //       } else {
  //         return Promise.reject(error);
  //       }

  //       /*
  //        * When response code is 401, try to refresh the token.
  //        * Eject the interceptor so it doesn't loop in case
  //        * token refresh causes the 401 response
  //        */
  //       axiosClient.interceptors.response.eject(refreshInterceptor);

  //       return refreshToken()
  //         .then(token => {
  //           error.response.config.headers.Authorization = `Bearer ${token}`;
  //           return axiosClient(error.response.config);
  //         })
  //         .catch(_refreshError => {
  //           return Promise.reject(error);
  //         })
  //         .finally(() => addInterseptor(axiosClient));
  //     },
  //   );
  // };

  const Axios = axios.create(options);

  addInterseptor(Axios);

  return Axios;
};

export const client = Client();
```
**File:** src/services/Services.ts (L13-27)
```typescript
const Services = (): Services => {
  const uService = userService(client);
  const oService = orderService(client);
  const cService = commentService(client);

  const logout = () => {
    client.defaults.headers.common.Authorization = undefined;
  };

  return {
    userService: uService,
    orderService: oService,
    commentService: cService,
    logout,
  };
```
**File:** src/services/orderService.ts (L1-81)
```typescript
import { UClient } from './Client';
import { OrderServiceParams, OrderServiceReponse } from './types';

export interface OrderService {
  getNewOrders: () => Promise<OrderServiceReponse>;
  getInProgressOrders: () => Promise<OrderServiceReponse>;
  getOrdersHistory: () => Promise<OrderServiceReponse>;
  acceptOrder: (id: string) => Promise<OrderServiceReponse>;
  declineOrder: (id: string) => Promise<OrderServiceReponse>;
  confirmItems: (params: {
    id: string;
    isDispatched: boolean;
  }) => Promise<OrderServiceReponse>;
  markAsDelivered: (params: {
    id: string;
    note: string;
  }) => Promise<OrderServiceReponse>;
}

const orderService = (client: UClient): OrderService => {
  const getNewOrders = async (): Promise<OrderServiceReponse> => {
    const { data } = await client.get('deliveries/new?page=1&perPage=10');
    return data.result.data;
  };

  const getInProgressOrders = async (): Promise<OrderServiceReponse> => {
    const { data } = await client.get(
      'deliveries/in-progress?page=0&perPage=10',
    );
    return data.result.data;
  };

  const getOrdersHistory = async (): Promise<OrderServiceReponse> => {
    const { data } = await client.get('deliveries/done?page=0&perPage=50');
    return data.result.data;
  };

  const acceptOrder = async (id: string): Promise<OrderServiceReponse> => {
    await client.post(`deliveries/${id}/accept`, {});
    return client.post(`deliveries/${id}/mark-as-dispatched`, {});
  };

  const declineOrder = async (id: string): Promise<OrderServiceReponse> => {
    return client.post(`deliveries/${id}/reject`, {});
  };

  const confirmItems = async (params: {
    id: string;
    isDispatched: boolean;
  }): Promise<OrderServiceReponse> => {
    const { id, isDispatched } = params;
    if (!isDispatched) {
      await client.post(`deliveries/${id}/mark-as-dispatched`, {});
    }
    return client.post(`deliveries/${id}/mark-as-picked-up`);
  };

  const markAsDelivered = async (params: {
    id: string;
    note: string;
  }): Promise<OrderServiceReponse> => {
    const { id, note } = params;
    return client.post(`deliveries/${id}/mark-as-delivered`, {
      note: note,
      imageName: 'imageName',
      imageType: 'JPEG',
    });
  };

  return {
    getNewOrders,
    getOrdersHistory,
    getInProgressOrders,
    acceptOrder,
    confirmItems,
    markAsDelivered,
    declineOrder,
  };
};

export default orderService;
```
**File:** src/services/userService.ts (L1-90)
```typescript
import { DeliveryType, User, UserResponse } from '@app/types/types';
import { UClient } from './Client';
import {
  UserParams,
  LoginParams,
  SignupParams,
  SettingsParams,
  UserServiceResponse,
  LoginResponse,
  UserSettings,
} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface UserService {
  login: (params: LoginParams) => Promise<LoginResponse>;
  signup: (params: SignupParams) => Promise<LoginResponse>;
  getUser: () => Promise<User>;
  getUserSettings: () => Promise<UserSettings>;
  updateUserSettings: (params: Partial<UserSettings>) => Promise<UserSettings>;
  updateUser: (params: UserParams) => Promise<UserServiceResponse>;
  setUserStatus: (status: string) => Promise<any>;
  setDeliverySettings: (settings: string) => Promise<any>;
  setUserLocation: (params: {
    latitude: number;
    longitude: number;
  }) => Promise<any>;
}

const userService = (client: UClient): UserService => {
  const login = async (params: LoginParams): Promise<LoginResponse> => {
    const { data } = await client.post<LoginResponse>('auth/login', params);
    const token = data.result.session.accessToken;
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
    AsyncStorage.setItem('token', token);
    return data;
  };

  const signup = async (params: SignupParams): Promise<LoginResponse> => {
    const { data } = await client.post<LoginResponse>('auth/register', params);
    const token = data.result.session.accessToken;
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
    AsyncStorage.setItem('token', token);
    return data;
  };

  const getUser = async (): Promise<User> => {
    const { data } = await client.get<UserResponse>('auth/me');
    const { email, courier, role } = data.result;
    const user = { email, role, ...courier };
    return user;
  };

  const setUserStatus = async (status: string): Promise<any> => {
    return client.patch('courier/status', { status: status.toUpperCase() });
  };

  const setDeliverySettings = async (deliverySetting: string): Promise<any> => {
    return client.patch('courier/delivery-setting', { deliverySetting });
  };

  const getUserSettings = async (): Promise<UserServiceResponse> => {
    const { data } = await client.get('courier-settings');
    return data.result;
  };

  const updateUserSettings = async (
    params: SettingsParams,
  ): Promise<UserServiceResponse> => {
    return client.patch('courier-settings', params);
  };

  const setUserLocation = async (params: {
    latitude: number;
    longitude: number;
  }) => {
    return client.patch('courier/location', params);
  };

  return {
    login,
    signup,
    getUser,
    getUserSettings,
    updateUserSettings,
    setUserLocation,
    setUserStatus,
    setDeliverySettings,
  };
};

```
**File:** src/services/commentService.ts (L1-50)
```typescript
import { UClient } from './Client';
import { NewCommentParams, OrderServiceReponse } from './types';
export interface CommentService {
  createComment: (params: NewCommentParams) => Promise<OrderServiceReponse>;
  updateComment: (params: {
    id: string;
    note: string;
  }) => Promise<OrderServiceReponse>;
  deleteComment: (id: string) => Promise<OrderServiceReponse>;
  addReaction: (params: {
    locationNoteId: string;
    reaction: string;
  }) => Promise<any>;
}

const commentService = (client: UClient): CommentService => {
  const createComment = async (
    params: NewCommentParams,
  ): Promise<OrderServiceReponse> => {
    return client.post('location-notes', params);
  };

  const updateComment = async (params: {
    id: string;
    note: string;
  }): Promise<OrderServiceReponse> => {
    const { id, note } = params;
    return client.patch(`location-notes/${id}`, { note });
  };
  const deleteComment = async (id: string): Promise<OrderServiceReponse> => {
    return client.delete(`location-notes/${id}`);
  };

  const addReaction = async (params: {
    locationNoteId: string;
    reaction: string;
  }) => {
    const { locationNoteId, reaction } = params;
    return client.post(`location-notes/${locationNoteId}/react`, { reaction });
  };

  return {
    createComment,
    updateComment,
    deleteComment,
    addReaction,
  };
};

export default commentService;
```
**File:** src/services/socket.ts (L1-72)
```typescript
/* eslint-disable react-hooks/exhaustive-deps */
import useUser from '@app/hooks/useUser';
import { QueryKeys } from '@app/utilities/queryKeys';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const ClientSocket = (url: string, token: String) => {
  const socket = io(url, {
    transports: ['websocket'],
    auth: { authorization: `Bearer ${token}` },
  });

  return socket;
};

const SocketProvider = () => {
  const queryClient = useQueryClient();

  const [url, setUrl] = useState<string>();
  const [token, setToken] = useState<string>();

  const { user } = useUser();

  useEffect(() => {
    if (user && !token) {
      checkForToken();
    }
  }, [user, url]);

  useEffect(() => {
    let socket: Socket;
    if (url && token) {
      socket = ClientSocket(url, token);

      socket.on('NEW_DELIVERY_OFFER', _data => {
        queryClient.invalidateQueries({ queryKey: [QueryKeys.newOrders] });
      });

      socket.on('connect', () => {
        // console.warn('connect');
      });

      socket.on('disconnect', _any => {
        // console.warn('disconnect'); // undefined
      });

      socket.on('connect_error', _err => {
        // console.warn('connect_error', err);
        // client.connect();
      });
    }

    return () => {
      if (socket) {
        socket.removeAllListeners();
      }
    };
  }, [url, token]);

  const checkForToken = async () => {
    const savedToken = await AsyncStorage.getItem('token');
    const baseUrl = await AsyncStorage.getItem('SOCKET_BASE_URL');
    if (savedToken && baseUrl) {
      setUrl(baseUrl);
      setToken(savedToken);
    }
  };

  return null;
};
```
**File:** src/hooks/useHomeOrders.ts (L33-193)
```typescript
export const useHomeOrders = () => {
  const [dataSourceNew, setDataSourceNew] = useState<Order[]>([]);
  const [dataSourceInProgress, setDataSourceInProgress] = useState<Order[]>([]);
  const [dataSourceHistory, setDataSourceHistory] = useState<Order[]>([]);
  const [offerExpirationTimers, setOfferExpirationTimers] = useState<
    Map<string, Timer>
  >(new Map());

  // quieries

  const {
    data: newOrders,
    isLoading: loadingNewOrders,
    refetch: refetchNew,
  } = useQuery({
    queryFn: services.orderService.getNewOrders,
    queryKey: [QueryKeys.newOrders],
  });

  const {
    data: inProgressOrders,
    isLoading: loadingInProgressOrders,
    refetch: refetchInProgress,
  } = useQuery({
    queryFn: services.orderService.getInProgressOrders,
    queryKey: [QueryKeys.inProgressOrders],
  });

  const {
    data: historyOrders,
    isLoading: loadingHistoryOrders,
    refetch: refechHistory,
  } = useQuery({
    queryFn: services.orderService.getOrdersHistory,
    queryKey: [QueryKeys.orderHistory],
  });

  // mutations

  const { mutate: acceptOrder } = useMutation({
    mutationFn: services.orderService.acceptOrder,
    onSuccess: () => {
      refetchNew();
      refetchInProgress();
    },
    onError: error => Alert.alert('Error accepting order', error.message),
  });

  const { mutate: declineOrder } = useMutation({
    mutationFn: services.orderService.declineOrder,
    onSuccess: () => {
      refetchNew();
    },
    onError: error => Alert.alert('Error declining order', error.message),
  });

  //Temp fix
  const [upDownVotedNoteIds, setUpDownVotedNoteIds] = useState<string[][]>([
    [],
    [],
  ]);

  const { user } = useUser();

  const acceptOrderFn = (orderId: string) => {
    offerExpirationTimers.get(orderId)?.stop();
    offerExpirationTimers.delete(orderId);

    acceptOrder(orderId);

    const updateNewOrders = newOrders!.filter(
      newOrder => newOrder.id !== orderId,
    );
    setDataSourceNew(updateNewOrders);
  };

  const declineOrderFn = (orderId: string) => {
    offerExpirationTimers.get(orderId)?.stop();
    offerExpirationTimers.delete(orderId);

    declineOrder(orderId);

    const updateNewOrders = newOrders!.filter(item => item.id !== orderId);
    setDataSourceNew(updateNewOrders);
  };

  useEffect(() => {
    if (newOrders !== undefined) {
      const newOfferExpirationTimers = new Map(offerExpirationTimers);
      newOrders.forEach(order =>
        newOfferExpirationTimers.set(
          order.id,
          new Timer(
            () =>
              user!.deliverySetting === OrderSetting.auto_accept
                ? acceptOrderFn(order.id)
                : declineOrderFn(order.id),
            AUTO_ACCEPT_DECLINE_TIMER,
          ),
        ),
      );
      setOfferExpirationTimers(newOfferExpirationTimers);
      setDataSourceNew(newOrders);
    }
  }, [newOrders]);

  useEffect(() => {
    if (inProgressOrders) {
      setDataSourceInProgress(inProgressOrders);
    }
  }, [inProgressOrders]);

  useEffect(() => {
    if (historyOrders) {
      setDataSourceHistory(historyOrders);
    }
  }, [historyOrders]);

  useEffect(() => {
    if (user?.status === UserStatus.Online) {
      refetchNew();
    }
  }, [user?.status]);

  const upvoteCommentTemp = (noteId: string) => {
    if (!upDownVotedNoteIds[0].includes(noteId)) {
      setUpDownVotedNoteIds([
        [...upDownVotedNoteIds[0], noteId],
        upDownVotedNoteIds[1].filter(e => e != noteId),
      ]);
    }
  };

  const downvoteCommentTemp = (noteId: string) => {
    if (!upDownVotedNoteIds[1].includes(noteId)) {
      setUpDownVotedNoteIds([
        upDownVotedNoteIds[0].filter(e => e != noteId),
        [...upDownVotedNoteIds[1], noteId],
      ]);
    }
  };

  return {
    dataSourceNew,
    dataSourceHistory,
    dataSourceInProgress,
    offerExpirationTimers,
    setOfferExpirationTimers,
    acceptOrderFn,
    declineOrderFn,
    //Temp fix
    upDownVotedNoteIds,
    upvoteCommentTemp,
    downvoteCommentTemp,
    isLoading:
      loadingNewOrders || loadingInProgressOrders || loadingHistoryOrders,
    refetchNew,
    refetchInProgress,
    refechHistory,
  };
};
```
**File:** src/hooks/useUser.ts (L6-54)
```typescript
const useUser = (enabled: boolean = true) => {
  const queryClient = useQueryClient();

  const {
    data: user,
    refetch,
    isLoading,
  } = useQuery({
    queryFn: services.userService.getUser,
    queryKey: [QueryKeys.user],
    enabled: enabled,
  });

  const { mutate: updateStatus } = useMutation({
    mutationFn: services.userService.setUserStatus,
    onError: error => Alert.alert('Ooops', error.toString()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.user] });
      refetch();
    },
  });

  const { mutate: updateDeliverySettings } = useMutation({
    mutationFn: services.userService.setDeliverySettings,
    onError: error => Alert.alert('Ooops', error.toString()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.user] });
      refetch();
    },
  });

  const { mutate: updateUserLocation } = useMutation({
    mutationFn: services.userService.setUserLocation,
    onError: error => Alert.alert('Ooops', error.toString()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.user] });
      refetch();
    },
  });

  return {
    user,
    isLoading,
    refetchUser: refetch,
    updateStatus,
    updateDeliverySettings,
    updateUserLocation,
  };
};
```
**File:** src/hooks/useOrder.ts (L6-20)
```typescript
const useOrder = () => {
  const queryClient = useQueryClient();

  const { mutate: confirmOrderItems } = useMutation({
    mutationFn: services.orderService.confirmItems,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.inProgressOrders] });
    },
    onError: error => Alert.alert('Error confirming items', error.message),
  });

  return {
    confirmOrderItems,
  };
};
```
**File:** src/hooks/useComment.ts (L6-47)
```typescript
const useComment = () => {
  const queryClient = useQueryClient();

  const { mutate: createComment } = useMutation({
    mutationFn: services.commentService.createComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.inProgressOrders] });
    },
    onError: error => Alert.alert('Error creating comment', error.message),
  });

  const { mutate: deleteComment } = useMutation({
    mutationFn: services.commentService.deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.inProgressOrders] });
    },
    onError: error => Alert.alert('Error deleting comment', error.message),
  });

  const { mutate: updateComment } = useMutation({
    mutationFn: services.commentService.updateComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.inProgressOrders] });
    },
    onError: error => Alert.alert('Error editing comment', error.message),
  });

  const { mutate: addReaction } = useMutation({
    mutationFn: services.commentService.addReaction,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.inProgressOrders] });
    },
    onError: error => Alert.alert('Error adding reaction', error.message),
  });

  return {
    createComment,
    updateComment,
    deleteComment,
    addReaction,
  };
};
```
**File:** src/hooks/useUserSetttings.ts (L6-24)
```typescript
const useUserSettings = () => {
  const { data, isLoading, refetch } = useQuery({
    queryFn: services.userService.getUserSettings,
    queryKey: [QueryKeys.userSettings],
  });

  const { mutate, isPaused } = useMutation({
    mutationFn: services.userService.updateUserSettings,
    onSuccess: () => refetch(),
    onError: error => Alert.alert('Api Error', error.message),
  });

  return {
    settings: data,
    isLoading,
    isUpdating: isPaused,
    updateSettings: mutate,
  };
};
```
**File:** src/utilities/storage.ts (L1-64)
```typescript
import { Organization } from '@app/types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AUTO_ACCEPT_ORDERS_KEY = 'auto_accept_orders';
export const SELECTED_ORG_KEY = 'selected_org_key';
export const SEEN_NEW_ORDERS = 'seen_new_orders';
export const AUTH_TOKEN_KEY = 'auth_token_key';

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


export const setAuthToken = async (token: string) => {
  await AsyncStorage.setItem(AUTH_TOKEN_KEY, token);
};

export const getAuthToken = async (): Promise<string | undefined> => {
  const token = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
  if (token === null) {
    return undefined;
  }
  return token;
};
```
**File:** src/services/DemoClient.ts (L1-70)
```typescript
import {
  TEST_API_NEW_ORDER,
  TEST_ORDERS_HISTORY,
} from '@app/utilities/testData';
import { GetOrdersParams } from './types';
//@ts-ignore

export interface DemoClientInterface {
  get: (path: string, params: any) => Promise<any>;
}

export const DemoClient = (): DemoClientInterface => {
  const get = async (path: string, params: GetOrdersParams) => {
    // if (params.status === 'new') {
    //   return new Promise(function (resolve) {
    //     setTimeout(resolve, 500, {
    //       deliveries: [TEST_API_NEW_ORDER],
    //       pagination: {
    //         total: 1,
    //         lastPage: 1,
    //         currentPage: 1,
    //         perPage: 1,
    //         prevPage: 1,
    //         nextPage: 1,
    //       },
    //     });
    //   });
    // }

    if (params.params.status === 'in_progress') {
      return new Promise(function (resolve) {
        setTimeout(resolve, 500, {
          data: {
            deliveries: [TEST_API_NEW_ORDER],
            pagination: {
              total: 1,
              lastPage: 1,
              currentPage: 1,
              perPage: 1,
              prevPage: 1,
              nextPage: 1,
            },
          },
        });
      });
    }
    if (params.params.status === 'completed') {
      return new Promise(function (resolve) {
        setTimeout(resolve, 500, {
          data: {
            deliveries: TEST_ORDERS_HISTORY,
            pagination: {
              total: 3,
              lastPage: 1,
              currentPage: 1,
              perPage: 10,
              prevPage: 1,
              nextPage: 1,
            },
          },
        });
      });
    }
    return new Promise(function (resolve) {
      setTimeout(resolve, 500, []);
    });
  };

  return { get };
};
```
**File:** package.json (L25-25)
```json
    "axios": "^1.6.0",
```
**File:** package.json (L50-50)
```json
    "socket.io-client": "^4.7.5"
```
## Q2
create todo list how setup my app to work without backend with localfist store
what files changes for this functionalyty
get all files uses for backend
## Backend Dependencies for Local-First Migration
This codemap traces the complete backend dependency architecture of OpenCourier mobile, showing how data flows from UI through service layers to HTTP APIs and WebSocket connections. Key locations include the HTTP client factory [1a], order mutation flow [2a], authentication token handling [3c], real-time socket updates [4c], current local storage patterns [5a], and the existing demo data foundation [6a] that can be leveraged for local-first migration.
### 1. Service Initialization and HTTP Client Setup
Core service factory creates all backend services using Axios HTTP client with automatic token injection
### 1a. Axios HTTP client creation (`Client.ts:75`)
Creates base HTTP client with timeout and JSON headers
```text
const Axios = axios.create(options);
```
### 1b. Token interceptor injection (`Client.ts:77`)
Adds automatic Bearer token injection from AsyncStorage
```text
addInterseptor(Axios);
```
### 1c. Service factory instantiation (`Services.ts:14`)
Creates all backend services using the HTTP client
```text
const uService = userService(client);
```
### 1d. Typical API call pattern (`orderService.ts:39`)
Example of service making HTTP request to backend
```text
return client.post(`deliveries/${id}/accept`, {});
```
### 2. Order Management Data Flow
Complete flow from UI order actions through service layer to backend API endpoints
### 2a. UI triggers order acceptance (`useHomeOrders.ts:101`)
User action calls mutation hook
```text
acceptOrder(orderId);
```
### 2b. React Query mutation setup (`useHomeOrders.ts:73`)
Connects UI action to service layer
```text
mutationFn: services.orderService.acceptOrder,
```
### 2c. Fetch new orders from API (`orderService.ts:22`)
HTTP GET request for new delivery orders
```text
const { data } = await client.get('deliveries/new?page=1&perPage=10');
```
### 2d. Data refresh after mutation (`useHomeOrders.ts:75`)
Invalidates and refetches updated order list
```text
refetchNew();
```
### 3. User Authentication Flow
Login/signup process storing tokens and fetching user data from backend
### 3a. User submits login form (`LoginInstance.tsx:85`)
Login screen triggers authentication mutation
```text
loginUser({ email, password });
```
### 3b. Login mutation configuration (`LoginInstance.tsx:51`)
Connects form to user service login method
```text
mutationFn: services.userService.login,
```
### 3c. Backend authentication request (`userService.ts:31`)
HTTP POST to authenticate user
```text
const { data } = await client.post<LoginResponse>('auth/login', params);
```
### 3d. Token local storage (`userService.ts:34`)
Persists authentication token for future requests
```text
AsyncStorage.setItem('token', token);
```
### 3e. Fetch user profile (`userService.ts:47`)
Retrieves user data after authentication
```text
const { data } = await client.get<UserResponse>('auth/me');
```
### 4. Real-time WebSocket Updates
Socket.io connection for live order updates and notifications
### 4a. WebSocket client creation (`socket.ts:10`)
Establishes socket.io connection with auth
```text
const socket = io(url, {
```
### 4b. Socket authentication (`socket.ts:12`)
Uses same Bearer token as HTTP requests
```text
auth: { authorization: `Bearer ${token}` },
```
### 4c. Listen for new orders (`socket.ts:37`)
Real-time event handler for new delivery offers
```text
socket.on('NEW_DELIVERY_OFFER', _data => {
```
### 4d. Trigger data refresh (`socket.ts:38`)
Updates UI when new orders arrive
```text
queryClient.invalidateQueries({ queryKey: [QueryKeys.newOrders] });
```
### 5. Local Storage Infrastructure
Current AsyncStorage usage for tokens, settings, and organization data
### 5a. Store auto-accept setting (`storage.ts:12`)
Persists user preference locally
```text
await AsyncStorage.setItem(AUTO_ACCEPT_ORDERS_KEY, stringValue);
```
### 5b. Store auth token (`userService.ts:34`)
Critical for authenticated requests
```text
await AsyncStorage.setItem('token', token);
```
### 5c. Clear all stored data (`SideMenu.tsx:131`)
Logout removes all local authentication data
```text
await AsyncStorage.multiRemove(['token', 'BASE_URL', 'SOCKET_BASE_URL']);
```
### 5d. Retrieve stored token (`Client.ts:21`)
Automatic token injection for requests
```text
const token = await AsyncStorage.getItem('token');
```
### 6. Demo Data Foundation
Existing test data infrastructure that can be repurposed for local-first storage
### 6a. Demo client factory (`DemoClient.ts:12`)
Mock client returning test data instead of API calls
```text
export const DemoClient = (): DemoClientInterface => {
```
### 6b. Simulated API delay (`DemoClient.ts:16`)
Mimics network latency for realistic testing
```text
setTimeout(resolve, 500, {
```
### 6c. Test order data (`DemoClient.ts:17`)
Pre-defined order objects for local testing
```text
deliveries: [TEST_API_NEW_ORDER],
```
### 6d. Comprehensive test data (`testData.ts:1`)
Rich dataset for seeding local storage
```text
export const TEST_ORDERS_HISTORY: Order[] = [
```