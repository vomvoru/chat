/* eslint-disable react/jsx-max-depth */

import React, { FC } from 'react';

import { UserProvider } from '../../hooks/contexts/User';
import { RoomProvider } from '../../hooks/contexts/Room';
import { SocketProvider } from '../../hooks/contexts/Socket';

export const Providers: FC = ({ children }) => {
  return (
    <UserProvider>
      <RoomProvider>
        <SocketProvider>{children}</SocketProvider>
      </RoomProvider>
    </UserProvider>
  );
};
