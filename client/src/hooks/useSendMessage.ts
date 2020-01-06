import { useCallback } from 'react';

import { useSocketContext } from './useSocketContext';
import { useUserContext } from './useUserContext';

export const useSendMessage = () => {
  const socket = useSocketContext();
  const userContext = useUserContext();

  const sendMessage = useCallback(
    (text: string) => {
      if (!socket || !userContext || !userContext.user) {
        return;
      }

      const message: Omit<IMessage, 'id'> = { text, name: userContext.user.id };
      socket.emit('message', message);
    },
    [socket, userContext]
  );

  return sendMessage;
};
