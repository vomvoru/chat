import React, { FC } from 'react';
import { useRouteMatch, useHistory } from 'react-router';

import { RoomListPage } from '../../Pages/RoomListPage';
import { ROOM_LIST_PATH, LOGIN_PATH } from '../../../constants/paths';
import { useUser } from '../../../hooks/useUser';

export const RoomListRoute: FC = () => {
  const match = useRouteMatch(ROOM_LIST_PATH);
  const user = useUser();
  const history = useHistory();

  if (match && match.isExact) {
    if (user) {
      return <RoomListPage />;
    }

    history.replace(LOGIN_PATH);
    return null;
  }

  return null;
};