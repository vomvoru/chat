import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { LoginRoute } from './LoginRoute';
import { RoomListRoute } from './RoomListRoute';
import { ChatRoute } from './ChatRoute';

export const Routes: FC = () => (
  <BrowserRouter>
    <LoginRoute />
    <RoomListRoute />
    <ChatRoute />
  </BrowserRouter>
);
