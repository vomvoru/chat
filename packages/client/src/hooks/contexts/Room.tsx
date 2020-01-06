import React, { useEffect, FC, useState, Dispatch, SetStateAction } from 'react';
import { IRoom } from 'kakaopay-test-common';

import { ROOM } from '../../constants/keys';

export const RoomContext = React.createContext<IRoom | null>(null);
export const SetRoomContext = React.createContext<Dispatch<SetStateAction<IRoom | null>> | null>(
  null
);

export const RoomProvider: FC = ({ children }) => {
  const [room, joinRoom] = useState<IRoom | null>(localState);

  useEffect(() => {
    sessionStorage.setItem(ROOM, JSON.stringify(room));
  }, [room]);

  return (
    <RoomContext.Provider value={room}>
      <SetRoomContext.Provider value={joinRoom}>{children}</SetRoomContext.Provider>
    </RoomContext.Provider>
  );
};

const localState = (() => {
  const roomStr = sessionStorage.getItem(ROOM);
  if (roomStr) {
    return JSON.parse(roomStr);
  }
  return null;
})();
