import React, { useEffect, FC, useState, Dispatch, SetStateAction } from 'react';
import { IRoom } from 'kakaopay-test-common';

import { ROOM } from '../../constants/keys';

export const RoomContext = React.createContext<IRoom | null>(null);
export const JoinRoomContext = React.createContext<Dispatch<SetStateAction<IRoom>> | null>(null);

export const RoomProvider: FC = ({ children }) => {
  const [room, joinRoom] = useState<IRoom>(localState);

  useEffect(() => {
    sessionStorage.setItem(ROOM, JSON.stringify(room));
  }, [room]);

  return (
    <RoomContext.Provider value={room}>
      <JoinRoomContext.Provider value={joinRoom}>{children}</JoinRoomContext.Provider>
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
