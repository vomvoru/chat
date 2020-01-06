import { useState } from 'react';

import { useSocketContext } from './useSocketContext';

export const useMessages = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const socketContext = useSocketContext();

  if (!socketContext) {
    return [];
  }

  socketContext.on('message', (message: IMessage) => setMessages([...messages, message]));

  return messages;
};
