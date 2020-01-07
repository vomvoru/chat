import React, { FC, Fragment } from 'react';

import { Room } from './Room';
import { useRoomList } from '../../../../hooks/useRoomList';

export const RoomList: FC = () => {
  const roomList = useRoomList();

  if (!roomList) return null;

  return (
    <>
      {roomList.map(room => (
        <Fragment key={room.id}>
          <Room room={room} />
          <br />
        </Fragment>
      ))}
    </>
  );
};
