import { User } from '@app/types/types';
import { UClient } from './Client';
import { TEST_USER } from '@app/utilities/testData';
import { LoginParams, SignupParams } from './types';

export interface UserService {
  login: (params: LoginParams) => Promise<User | undefined>;
  signup: (params: SignupParams) => Promise<User | undefined>;
  getUserDetails: () => Promise<User | undefined>;
}

const userService = (client: UClient): UserService => {
  const login = async (params: LoginParams): Promise<User> => {
    //TODO: API
    return new Promise(function (resolve) {
      setTimeout(resolve, 500, TEST_USER);
    });
  };

  const signup = async (params: SignupParams): Promise<User> => {
    //TODO: API
    return new Promise(function (resolve) {
      setTimeout(resolve, 500, TEST_USER);
    });
  };

  const getUserDetails = async (): Promise<User> => {
    //TODO: API
    // const data = await client.get<User>('user/user');
    // return data.data;
    return new Promise(function (resolve) {
      setTimeout(resolve, 500, TEST_USER);
    });
  };

  return {
    getUserDetails,
    login,
    signup,
  };
};

export default userService;
