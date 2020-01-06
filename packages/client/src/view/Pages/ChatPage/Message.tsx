import React, { FC } from 'react';

interface IProps extends Pick<IMessage, 'name' | 'text'> {}

export const Message: FC<IProps> = ({ name, text }) => (
  <div>
    <p>
      {name}: {text}
    </p>
  </div>
);
