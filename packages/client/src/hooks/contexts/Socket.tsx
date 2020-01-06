import React, { FC, useState, useEffect } from 'react';
import io from 'socket.io-client';

import { useRoom } from '../useRoom';

type ISocketContext = SocketIOClient.Socket | null;

export const SocketContext = React.createContext<ISocketContext>(null);

export const SocketProvider: FC = ({ children }) => {
  const [socket, setSocket] = useState<ISocketContext>(null);
  const room = useRoom();

  useEffect(() => {
    if (room) {
      const newSocket = io(room.namespace);

      setSocket(newSocket);
    }
  }, [room]);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
