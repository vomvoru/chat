import React, { FC } from 'react';

import { InputTextMessage } from './InputTextMessage';
import { InputImgMessage } from './InputImgMessage';
import { useRoom } from '../../../hooks/useRoom';
import { Messages } from './Messages';
import { LeaveButton } from './LeaveButton';
import { Logout } from '../../components/Logout';

export const RoomPage: FC = () => {
  const room = useRoom();

  if (!room) return null;

  return (
    <div>
      <h1>{room.name} Room</h1>
      <Messages />
      <InputTextMessage />
      <InputImgMessage />
      <LeaveButton />
      <Logout />
    </div>
  );
};
