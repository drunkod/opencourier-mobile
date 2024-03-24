import { User } from '@app/types/types';
import { UClient } from './Client';
import { LoginParams, SignupParams } from './types';
import { Point } from 'geojson';
import { TEST_USER } from '@app/utilities/testData';
import axios from 'axios';

export interface UserService {
  login: (params: LoginParams) => Promise<User | undefined>;
  signup: (params: SignupParams) => Promise<User | undefined>;
  getUserDetails: () => Promise<User | undefined>;
}

const userService = (client: UClient): UserService => {
  const login = async (params: LoginParams): Promise<User> => {
    //TODO: API

    return axios
      .post('https://10.0.0.187:3001/auth/login', {
        data: {
          email: params.email,
          password: params.password,
        },
      })
      .then(res => {
        const token = res.data.token;
        const courier = res.data.courier;
        const currentLocation = courier.currentLocation as Point;

        client.defaults.headers.common.Authorization = `Bearer ${token}`;
        client.defaults.params.id = courier.id;

        const user: User = {
          firstname: courier.firstName,
          lastname: courier.lastName,
          location: {
            lat: currentLocation.coordinates[0],
            lon: currentLocation.coordinates[1],
          },
        };

        return user;
      });
    // return client
    // .post('/auth/login', {
    //   data: {
    //     email: params.email,
    //     password: params.password,
    //   },
    // })
    // .then(res => {
    //   const token = res.data.token;
    //   const courier = res.data.courier;
    //   const currentLocation = courier.currentLocation as Point;

    //   client.defaults.headers.common.Authorization = `Bearer ${token}`;
    //   client.defaults.params.id = courier.id;

    //   const user: User = {
    //     firstname: courier.firstName,
    //     lastname: courier.lastName,
    //     location: {
    //       lat: currentLocation.coordinates[0],
    //       lon: currentLocation.coordinates[1],
    //     },
    //   };

    //   return user;
    // });
  };

  const signup = async (params: SignupParams): Promise<User> => {
    //TODO: API
    console.log('Signing up user with the follower params', params);
    return axios
      .post('http://10.0.0.187:3001/auth/signup', {
          firstName: params.firstname,
          lastName: params.lastname,
          email: params.email,
          password: params.password,
        })
      .then(res => {
        console.log('res', res);
        const courier = res.data.courier;

        //client.defaults.params.id = courier.id;

        const user: User = {
          firstname: courier.firstName,
          lastname: courier.lastName,
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
        return TEST_USER
      });;
  };

  const getUserDetails = async (): Promise<User> => {
    //TODO: API
    // const data = await client.get<User>('user/user');
    // return data.data;
    const id = client.defaults.params.id;

    return client.get(`/couriers/${id}`).then(res => {
      const courier = res.data.courier;
      const currentLocation = courier.currentLocation as Point;

      const user: User = {
        firstname: courier.firstName,
        lastname: courier.lastName,
        location: {
          lat: currentLocation.coordinates[0],
          lon: currentLocation.coordinates[1],
        },
      };

      return user;
    });
  };

  return {
    getUserDetails,
    login,
    signup,
  };
};

export default userService;
