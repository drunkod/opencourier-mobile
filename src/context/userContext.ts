import { Coordinates, User } from '@app/types/types';
import { Point } from 'geojson';
import { createContext } from 'react';

interface Props {
  watchId?: number | undefined;
  setWatchId?: (watchId: number | undefined) => void;
}

const defaultAuthProps: Props = {
  watchId: undefined,
  setWatchId: () => {},
};

const UserContext = createContext<Props>(defaultAuthProps);

export default UserContext;
