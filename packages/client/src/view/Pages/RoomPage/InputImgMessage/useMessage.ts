import React, { useState, useCallback, useEffect } from 'react';

import { useSendMessage } from '../../../../hooks/useSendMessage';

export const useMessage = () => {
  const [img, setImg] = useState<string | null>(null);
  const sendMessage = useSendMessage();

  const changeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const reader = new FileReader();

      reader.onload = fileEvent => {
        if (fileEvent.target && typeof fileEvent.target.result === 'string') {
          setImg(fileEvent.target.result);
        }
      };

      reader.readAsDataURL(e.currentTarget.files[0]);
    }
  }, []);

  useEffect(() => {
    if (img) sendMessage('image', img);
  }, [img, sendMessage]);

  return { changeHandler };
};
