import { Setting, User } from '@app/types/types';
import { UClient } from './Client';
import {
  UserParams,
  LoginParams,
  SignupParams,
  SettingsParams,
  UserServiceResponse,
} from './types';
import { Point } from 'geojson';
import { OrderSetting } from '@app/types/enums';
import { parseUser } from './utils';

export interface UserService {
  login: (params: LoginParams) => Promise<UserServiceResponse>;
  signup: (params: SignupParams) => Promise<UserServiceResponse>;
  getUserSettings: (params: SettingsParams) => Promise<UserServiceResponse>;
  updateUserSettings: (params: SettingsParams) => Promise<UserServiceResponse>;
  updateUser: (params: UserParams) => Promise<UserServiceResponse>;
  // updateOrderSetting: (params: UserParams) => Promise<UserServiceResponse>;
  // updateUserStatus: (params: UserParams) => Promise<UserServiceResponse>;
  // updateCurrentLocation: (params: UserParams) => Promise<UserServiceResponse>;
}

const userService = (client: UClient): UserService => {
  const login = async (params: LoginParams): Promise<UserServiceResponse> => {
    return client
      .post('/auth/login', {
        email: params.email,
        password: params.password,
      })
      .then(res => {
        const token = res.data.token;
        const courier = res.data.courier;

        client.defaults.headers.common.Authorization = `Bearer ${token}`;

        console.log(courier);
        const user: User = parseUser(courier);

        return { data: user, error: null };
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        throw { data: error?.response?.data, error };
      });
  };

  const signup = async (params: SignupParams): Promise<UserServiceResponse> => {
    // TODO: USE ENV VARIABLE
    return client
      .post('/auth/signup', {
        firstName: params.firstname,
        lastName: params.lastname,
        email: params.email,
        password: params.password,
      })
      .then(res => {
        const token = res.data.token;
        const courier = res.data.courier;

        client.defaults.headers.common.Authorization = `Bearer ${token}`;

        const user: User = parseUser(courier);

        return { data: user, error: null };
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        return { data: null, error };
      });
  };

  const getUserSettings = async (
    params: SettingsParams,
  ): Promise<UserServiceResponse> => {
    //TODO: API
    // const data = await client.get<User>('user/user');
    // return data.data;
    console.log(`Getting settings for user with id ${params.id}`);
    const { id } = params;
    return client
      .get(`/couriers/full-settings/${id}`)
      .then(res => {
        const settingsObj = res.data.settings;
        console.log('Settings object', settingsObj);

        const settings: Setting = {
          deliveryPolygon: settingsObj.deliveryPolygon,
          vehicleType: settingsObj.vehicleType,
          preferredAreas: settingsObj.preferredAreas,
          shiftAvailability: settingsObj.shiftAvailability,
          orderPreferences: settingsObj.orderPreferences,
          foodPreferences: settingsObj.foodPreferences,
          earningGoals: settingsObj.earningGoals,
          deliverySpeed: settingsObj.deliverySpeed,
          restaurantTypes: settingsObj.restaurantTypes,
          cuisineTypes: settingsObj.cuisineTypes,
          preferredRestaurantPartners: settingsObj.preferredRestaurantPartners,
          dietaryRestrictions: settingsObj.dietaryRestrictions,
          payRate: settingsObj.payRate,
        };

        return { data: settings, error: null };
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        return { data: null, error };
      });
  };

  const updateUserSettings = async (
    params: SettingsParams,
  ): Promise<UserServiceResponse> => {
    //TODO: API
    // const data = await client.get<User>('user/user');
    // return data.data;
    const { id, settings } = params;
    return client
      .patch(`/couriers/full-settings/${id}`, settings)
      .then(res => {
        const settingsObj = res.data.settings;
        console.log('Settings object', settingsObj);

        const settings: Setting = {
          deliveryPolygon: settingsObj.deliveryPolygon,
          vehicleType: settingsObj.vehicleType,
          preferredAreas: settingsObj.preferredAreas,
          shiftAvailability: settingsObj.shiftAvailability,
          orderPreferences: settingsObj.orderPreferences,
          foodPreferences: settingsObj.foodPreferences,
          earningGoals: settingsObj.earningGoals,
          deliverySpeed: settingsObj.deliverySpeed,
          restaurantTypes: settingsObj.restaurantTypes,
          cuisineTypes: settingsObj.cuisineTypes,
          preferredRestaurantPartners: settingsObj.preferredRestaurantPartners,
          dietaryRestrictions: settingsObj.dietaryRestrictions,
          payRate: settingsObj.payRate,
        };

        return { data: settings, error: null };
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        return { data: null, error };
      });
  };

  const updateUser = async (
    params: UserParams,
  ): Promise<UserServiceResponse> => {
    //TODO: API
    // const data = await client.get<User>('user/user');
    // return data.data;
    const { id, data } = params;
    console.log('Updating user with params', params);
    return client
      .patch(`/couriers/${id}`, data)
      .then(res => {
        const courier = res.data.courier;
        console.log('Update user ', courier);

        const user: User = parseUser(courier);

        return { data: user, error: null };
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        return { data: null, error };
      });
  };

  return {
    login,
    signup,
    getUserSettings,
    updateUserSettings,
    updateUser,
  };
};

export default userService;
