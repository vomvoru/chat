import React, { FC } from 'react';
import { useRouteMatch, useHistory } from 'react-router';

import { RoomListPage } from '../../Pages/RoomListPage';
import { ROOM_LIST_PATH, LOGIN_PATH, ROOM_PATH } from '../../../constants/paths';
import { useUser } from '../../../hooks/useUser';
import { useRoom } from '../../../hooks/useRoom';

export const RoomListRoute: FC = () => {
  const match = useRouteMatch(ROOM_LIST_PATH);
  const user = useUser();
  const room = useRoom();
  const history = useHistory();

  if (!match || !match.isExact) {
    return null;
  }

  if (!user) {
    history.replace(LOGIN_PATH);
    return null;
  }

  if (room) {
    history.replace(ROOM_PATH);
    return null;
  }

  return <RoomListPage />;
};
