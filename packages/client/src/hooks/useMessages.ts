import { useState } from 'react';

import { useSocketContext } from './useSocketContext';

export const useMessages = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const socket = useSocketContext();

  if (!socket) {
    return [];
  }

  socket.on('message', (message: IMessage) => setMessages([...messages, message]));

  return messages;
};
