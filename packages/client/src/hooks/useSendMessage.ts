import { useCallback } from 'react';
import { IClientMessage } from 'chat-common';

import { useUser } from './useUser';
import { useSocket } from './useSocket';

export const useSendMessage = () => {
  const socket = useSocket();
  const user = useUser();

  const sendMessage = useCallback(
    (type: IClientMessage['type'], text: string) => {
      if (!socket || !user) {
        return;
      }

      const message: IClientMessage = { text, name: user.id, type };
      socket.emit('message', message);
    },
    [socket, user]
  );

  return sendMessage;
};
