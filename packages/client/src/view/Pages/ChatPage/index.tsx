import React, { FC } from 'react';

import { Message } from './Message';
import { InputTextMessage } from './InputTextMessage';
import { InputImgMessage } from './InputImgMessage';
import { useMessages } from '../../../hooks/useMessages';
import { useRoom } from '../../../hooks/useRoom';

export const ChatPage: FC = () => {
  const messages = useMessages();
  const room = useRoom();

  if (!room) return null;

  return (
    <div>
      <h1>ChatPage {room.name}</h1>
      {messages.map(({ text, name, id }) => (
        <Message text={text} name={name} key={id} />
      ))}
      <InputTextMessage />
      <InputImgMessage />
    </div>
  );
};