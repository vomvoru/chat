import io from 'socket.io-client';

import React, { FC, useContext } from 'react';

const NAMESPACE = '/socket/chat';

const SocketContext = React.createContext<SocketIOClient.Socket | null>(null);

export const useSocketContext = () => useContext(SocketContext);

export const SocketProvider: FC = ({ children }) => {
  const socket = io(NAMESPACE);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
