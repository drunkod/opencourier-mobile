import { Client, UClient } from './Client';
import { DemoClient } from './DemoClient';
import orderService, { OrderService } from './orderService';
import userService, { UserService } from './userService';

export type Services = {
  userService: UserService;
  orderService: OrderService;
};

const Services = (): Services => {
  const client = DemoClient();
  const uService = userService(client);
  const oService = orderService(client);

  return {
    userService: uService,
    orderService: oService,
  };
};

export default Services;
