import io from 'socket.io-client';

import React, { FC, useContext, useState, useEffect } from 'react';

import { useRoom } from './useRoomContext';

const SocketContext = React.createContext<SocketIOClient.Socket | null>(null);

export const useSocketContext = () => useContext(SocketContext);

export const SocketProvider: FC = ({ children }) => {
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);
  const room = useRoom();

  useEffect(() => {
    if (room) {
      const newSocket = io(room.namespace);

      setSocket(newSocket);
    }
  }, [room]);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
