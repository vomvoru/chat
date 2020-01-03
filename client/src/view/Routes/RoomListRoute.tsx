import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { RoomListPage } from '../pages/RoomListPage';
import { RoomListPath } from '../constants/paths';

export const RoomListRoute: FC = () => {
  const match = useRouteMatch(RoomListPath);

  if (match && match.isExact) {
    return <RoomListPage />;
  }

  return null;
};
