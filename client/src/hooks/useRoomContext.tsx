import React, { useEffect, FC, useContext, useState, Dispatch, SetStateAction } from 'react';

import { ROOM } from '../constants/keys';

const RoomContext = React.createContext<IRoom | null>(null);
const JoinRoomContext = React.createContext<Dispatch<SetStateAction<IRoom>> | null>(null);

export const useRoom = () => useContext(RoomContext);
export const useJoinRoom = () => useContext(JoinRoomContext);

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
