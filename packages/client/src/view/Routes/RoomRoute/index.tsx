import React, { FC } from 'react';
import { useRouteMatch, useHistory } from 'react-router';

import { RoomPage } from '../../Pages/RoomPage';
import { ROOM_PATH, HOME_PATH } from '../../../constants/paths';
import { useUser } from '../../../hooks/useUser';
import { useRoom } from '../../../hooks/useRoom';

interface IParams {
  roomId: string;
}

export const RoomRoute: FC = () => {
  const match = useRouteMatch<IParams>(ROOM_PATH);
  const user = useUser();
  const room = useRoom();
  const history = useHistory();

  if (!match || !match.isExact) {
    return null;
  }

  if (!user || !room) {
    history.replace(HOME_PATH);
    return null;
  }

  return <RoomPage />;
};
