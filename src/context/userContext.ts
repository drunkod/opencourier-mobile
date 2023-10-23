import { User } from '@app/types/types';
import { createContext } from 'react';

interface Props {
  user?: User;
  setUser: (user: User) => void;
}

const defaultAuthProps: Props = {
  user: undefined,
  setUser: () => {},
};

const UserContext = createContext<Props>(defaultAuthProps);

export default UserContext;
