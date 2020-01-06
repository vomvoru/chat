import { useState, useCallback } from 'react';

import { sendMessage } from './api/sendMessage';

export const useMessage = () => {
  const [message, setMessage] = useState<string>('');

  const send = useCallback(() => {
    sendMessage(message);
  }, [message]);

  return { message, setMessage, send };
};
