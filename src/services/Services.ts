import { Client } from './Client';
import userService, { UserService } from './userService';

export type Services = {
  userService: UserService;
};

const Services = (): Services => {
  const client = Client();
  const uService = userService(client);

  return {
    userService: uService,
  };
};

export default Services;
