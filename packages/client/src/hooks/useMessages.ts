import { useState, useEffect, useCallback } from 'react';
import { IMessage } from 'chat-common';

import { useSocket } from './useSocket';

export const useMessages = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const socket = useSocket();

  const addMessages = useCallback(
    (message: IMessage) => {
      setMessages([...messages, message]);
    },
    [messages]
  );

  useEffect(() => {
    if (socket) socket.on('message', addMessages);

    return () => {
      if (socket) socket.off('message', addMessages);
    };
  }, [addMessages, socket]);

  return messages;
};
