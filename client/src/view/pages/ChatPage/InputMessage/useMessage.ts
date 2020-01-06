import React, { useState, useCallback } from 'react';

import { sendMessage } from '../../../../hooks/api/sendMessage';

export const useMessage = () => {
  const [message, setMessage] = useState<string>('');

  const changeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value);
  }, []);

  const clear = useCallback(() => {
    setMessage('');
  }, []);

  const send = useCallback(() => {
    sendMessage(message);
    clear();
  }, [clear, message]);

  return { message, changeHandler, send };
};
