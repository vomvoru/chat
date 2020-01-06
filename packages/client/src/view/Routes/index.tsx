import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { LoginRoute } from './LoginRoute';
import { RoomListRoute } from './RoomListRoute';
import { RoomRoute } from './RoomRoute';

export const Routes: FC = () => (
  <BrowserRouter>
    <LoginRoute />
    <RoomListRoute />
    <RoomRoute />
  </BrowserRouter>
);
