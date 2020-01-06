import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { CHAT_PATH } from '../../../constants/paths';

interface IProps {
  roomId: string;
}

export const Room: FC<IProps> = ({ children, roomId }) => (
  <Link to={CHAT_PATH.replace(':roomId', roomId)}>{children}</Link>
);
