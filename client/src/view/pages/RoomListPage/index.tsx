import React, { FC, Fragment } from 'react';

import { useRoomList } from './useRoomList';
import { Room } from './Room';

export const RoomListPage: FC = () => {
  const roomList = useRoomList();

  return (
    <>
      {roomList.map(({ id, name }) => (
        <Fragment key={id}>
          <Room roomId={id}>{name}</Room>
          <br />
        </Fragment>
      ))}
    </>
  );
};
