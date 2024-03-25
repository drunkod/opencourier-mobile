import { Setting, User } from '@app/types/types';
import { UClient } from './Client';
import { UserParams, LoginParams, SignupParams } from './types';
import { Point } from 'geojson';
import { OrderSetting } from '@app/types/enums';

export interface UserService {
  login: (
    params: LoginParams,
  ) => Promise<User | undefined>;
  signup: (
    params: SignupParams,
  ) => Promise<User | undefined>;
  getUserSettings: (params: UserParams) => Promise<Setting | undefined>;
  updateUserSettings: (params: UserParams) => Promise<Setting | undefined>;
  updateOrderSetting: (params: UserParams) => Promise<User | undefined>;
  updateUserStatus: (params: UserParams) => Promise<User | undefined>;
}

const userService = (client: UClient): UserService => {
  const login = async (
    params: LoginParams,
  ): Promise<User> => {
    return client
      .post('http://10.0.0.187:3001/auth/login', {
        email: params.email,
        password: params.password,
      })
      .then(res => {
        const token = res.data.token;
        const courier = res.data.courier;

        client.defaults.headers.common.Authorization = `Bearer ${token}`;

        console.log(courier);
        const user: User = {
          id: courier.id,
          firstname: courier.firstName,
          lastname: courier.lastName,
          location: courier.currentLocation,
          status: courier.status,
          orderSetting: courier.orderSetting as OrderSetting,
        };

        return user;
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
        return error;
      });
  };

  const signup = async (
    params: SignupParams,
  ): Promise<User> => {
    // TODO: USE ENV VARIABLE
    return client
      .post('http://10.0.0.187:3001/auth/signup', {
        firstName: params.firstname,
        lastName: params.lastname,
        email: params.email,
        password: params.password,
      })
      .then(res => {
        const token = res.data.token;
        const courier = res.data.courier;

        client.defaults.headers.common.Authorization = `Bearer ${token}`;

        const user: User = {
          id: courier.id,
          firstname: courier.firstName,
          lastname: courier.lastName,
          status: courier.status,
          orderSetting: courier.orderSetting as OrderSetting,
        };

        return user;
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
        return error;
      });
  };

  const getUserSettings = async (params: UserParams): Promise<Setting> => {
    //TODO: API
    // const data = await client.get<User>('user/user');
    // return data.data;
    console.log(`Getting settings for user with id ${params.id}`);
    const { id } = params;
    return client
      .get(`http://10.0.0.187:3001/couriers/full-settings/${id}`)
      .then(res => {
        const settingsObj = res.data.settings;
        console.log("Settings object", settingsObj);

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

        return settings;
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
        return error;
      });
  };

  const updateUserSettings = async (params: UserParams): Promise<Setting> => {
    //TODO: API
    // const data = await client.get<User>('user/user');
    // return data.data;
    const { id } = params;
    return client
      .patch(`http://10.0.0.187:3001/couriers/full-settings/${id}`)
      .then(res => {
        const courier = res.data.courier;

        const user: User = {
          id: courier.id,
          firstname: courier.firstName,
          lastname: courier.lastName,
          location: courier.currentLocation,
          status: courier.status,
          orderSetting: courier.orderSetting as OrderSetting,
        };

        return user;
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
        return error;
      });
  };
  const updateOrderSetting = async (params: UserParams): Promise<User> => {
    //TODO: API
    // const data = await client.get<User>('user/user');
    // return data.data;
    const { id } = params;
    return client
      .patch(`http://10.0.0.187:3001/couriers/order-setting/${id}`)
      .then(res => {
        const courier = res.data.courier;
        const currentLocation: Point | null = courier.currentLocation;

        const user: User = {
          id: courier.id,
          firstname: courier.firstName,
          lastname: courier.lastName,
          location: courier.currentLocation,
          status: courier.status,
          orderSetting: courier.orderSetting as OrderSetting,
        };

        return user;
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
        return error;
      });
  };
  const updateUserStatus = async (params: UserParams): Promise<User> => {
    //TODO: API
    // const data = await client.get<User>('user/user');
    // return data.data;
    const { id } = params;
    return client
      .get(`http://10.0.0.187:3001/couriers/${id}`)
      .then(res => {
        const courier = res.data.courier;

        const user: User = {
          id: courier.id,
          firstname: courier.firstName,
          lastname: courier.lastName,
          location: courier.currentLocation,
          status: courier.status,
          orderSetting: courier.orderSetting as OrderSetting,
        };

        return user;
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
        return error;
      });
  };

  return {
    login,
    signup,
    getUserSettings,
    updateUserSettings,
    updateOrderSetting,
    updateUserStatus,
  };
};

export default userService;
