/* eslint-disable react/jsx-max-depth */

import React, { FC } from 'react';

import { UserProvider } from '../../hooks/useUserContext';
import { SocketProvider } from '../../hooks/useSocketContext';
import { RoomProvider } from '../../hooks/useRoomContext';

export const Providers: FC = ({ children }) => {
  return (
    <UserProvider>
      <RoomProvider>
        <SocketProvider>{children}</SocketProvider>
      </RoomProvider>
    </UserProvider>
  );
};
