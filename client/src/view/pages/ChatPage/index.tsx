import React, { FC } from 'react';

import { Message } from './Message';
import { InputMessage } from './InputMessage';
import { useMessages } from '../../../hooks/useMessages';

interface IProps {
  roomId: string;
}

export const ChatPage: FC<IProps> = ({ roomId }) => {
  const messages = useMessages();

  return (
    <div>
      <h1>ChatPage {roomId}</h1>
      {messages.map(({ text, name, id }) => (
        <Message text={text} name={name} key={id} />
      ))}
      <InputMessage />
    </div>
  );
};
