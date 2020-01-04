import React, { FC } from 'react';

interface IProps {
  roomId: string;
}

export const ChatPage: FC<IProps> = ({ roomId }) => (
  <div>
    <h1>ChatPage {roomId}</h1>
  </div>
);
