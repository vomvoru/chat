import React, { FC } from 'react';

import { UserProvider } from '../../hooks/useUserContext';
import { SocketProvider } from '../../hooks/useSocketContext';

export const Providers: FC = ({ children }) => {
  return (
    <SocketProvider>
      <UserProvider>{children}</UserProvider>
    </SocketProvider>
  );
};
