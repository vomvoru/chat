import React, { FC } from 'react';

import { Message } from './Message';
import { InputMessage } from './InputMessage';
import { useMessages } from '../../../hooks/useMessages';
import { useRoom } from '../../../hooks/useRoomContext';

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
      <InputMessage />
    </div>
  );
};
