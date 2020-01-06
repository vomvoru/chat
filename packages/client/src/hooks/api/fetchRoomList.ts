import axios from 'axios';
import { constants, IRoom } from 'chat-common';

export const fetchRoomList = async () => {
  const res = await axios.get<IRoom[]>(constants.api.ROOM);

  return res.data;
};
