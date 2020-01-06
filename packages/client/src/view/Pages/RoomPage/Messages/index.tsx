import React, { FC } from 'react';

import { TextMessage } from './TextMessage';
import { ImgMessage } from './ImgMessage';
import { useMessages } from '../../../../hooks/useMessages';
import { useRoom } from '../../../../hooks/useRoom';

export const Messages: FC = () => {
  const messages = useMessages();
  const room = useRoom();

  if (!room) return null;

  return (
    <>
      {messages.map(({ text, name, id, type }) => {
        if (type === 'text') return <TextMessage text={text} name={name} key={id} />;
        if (type === 'image') return <ImgMessage text={text} name={name} key={id} />;
        return null;
      })}
    </>
  );
};
