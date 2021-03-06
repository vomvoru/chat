import { useEffect, useState } from 'react';
import { IRoom } from 'chat-common';

import { fetchRoomList } from './api/fetchRoomList';

export const useRoomList = () => {
  const [roomList, setRoomList] = useState<IRoom[] | null>(null);

  useEffect(() => {
    fetchRoomList().then(resRoomList => setRoomList(resRoomList));
  }, []);

  return roomList;
};
