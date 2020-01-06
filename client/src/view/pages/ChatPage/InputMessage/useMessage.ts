import React, { useState, useCallback } from 'react';

import { useSendMessage } from '../../../../hooks/useSendMessage';

export const useMessage = () => {
  const [message, setMessage] = useState<string>('');
  const sendMessage = useSendMessage();

  const changeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value);
  }, []);

  const clear = useCallback(() => {
    setMessage('');
  }, []);

  const send = useCallback(() => {
    sendMessage(message);
    clear();
  }, [clear, message, sendMessage]);

  return { message, changeHandler, send };
};
