/* eslint-disable react/jsx-max-depth */

import React, { FC } from 'react';
import { IMessage } from 'chat-common';

interface IProps extends Pick<IMessage, 'name' | 'text'> {}

export const ImgMessage: FC<IProps> = ({ name, text }) => (
  <div>
    <p>
      {name}: <img src={text} alt="uploaded img" width="300px" />
    </p>
  </div>
);
