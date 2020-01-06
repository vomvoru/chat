import { useState } from 'react';
import { IMessage } from 'kakaopay-test-common';

import { useSocket } from './useSocket';

export const useMessages = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const socket = useSocket();

  if (!socket) {
    return [];
  }

  socket.on('message', (message: IMessage) => setMessages([...messages, message]));

  return messages;
};
