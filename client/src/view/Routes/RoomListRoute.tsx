import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { RoomListPage } from '../pages/RoomListPage';
import { ROOM_LIST_PATH } from '../constants/paths';

export const RoomListRoute: FC = () => {
  const match = useRouteMatch(ROOM_LIST_PATH);

  if (match && match.isExact) {
    return <RoomListPage />;
  }

  return null;
};
