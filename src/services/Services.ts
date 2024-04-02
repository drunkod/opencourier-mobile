import { Client, UClient } from './Client';
import { DemoClient } from './DemoClient';
import commentService, { CommentService } from './commentService';
import orderService, { OrderService } from './orderService';
import userService, { UserService } from './userService';

export type Services = {
  userService: UserService;
  orderService: OrderService;
  commentService: CommentService;
};

const Services = (): Services => {
  const client = Client();
  const uService = userService(client);
  const oService = orderService(client);
  const cService = commentService(client);

  return {
    userService: uService,
    orderService: oService,
    commentService: cService,
  };
};

export default Services;
