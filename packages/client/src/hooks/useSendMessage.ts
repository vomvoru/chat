import { useCallback } from 'react';

import { useSocketContext } from './useSocketContext';
import { useUser } from './useUser';

export const useSendMessage = () => {
  const socket = useSocketContext();
  const user = useUser();

  const sendMessage = useCallback(
    (text: string) => {
      if (!socket || !user) {
        return;
      }

      const message: IClientMessage = { text, name: user.id };
      socket.emit('message', message);
    },
    [socket, user]
  );

  return sendMessage;
};
