import React, { FC } from 'react';
import { IMessage } from 'chat-common';

interface IProps extends Pick<IMessage, 'name' | 'text'> {}

export const TextMessage: FC<IProps> = ({ name, text }) => (
  <div>
    <p>
      {name}: {text}
    </p>
  </div>
);
