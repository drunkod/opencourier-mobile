import { Coordinates, User } from '@app/types/types';
import { createContext } from 'react';

interface Props {
  user?: User;
  setUser: (user: User) => void;
  location?: Coordinates;
  setLocation?: (coordinates: Coordinates) => void;
}

const defaultAuthProps: Props = {
  user: undefined,
  setUser: () => {},
  location: undefined,
  setLocation: () => {},
};

const UserContext = createContext<Props>(defaultAuthProps);

export default UserContext;
