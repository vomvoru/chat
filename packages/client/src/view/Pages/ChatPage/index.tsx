import React, { FC } from 'react';

import { InputTextMessage } from './InputTextMessage';
import { InputImgMessage } from './InputImgMessage';
import { useRoom } from '../../../hooks/useRoom';
import { Messages } from './Messages/index';

export const ChatPage: FC = () => {
  const room = useRoom();

  if (!room) return null;

  return (
    <div>
      <h1>ChatPage {room.name}</h1>
      <Messages />
      <InputTextMessage />
      <InputImgMessage />
    </div>
  );
};
