import axios from 'axios';
import { constants, IRoom } from 'kakaopay-test-common';

export const fetchRoomList = async () => {
  const res = await axios.get<IRoom[]>(constants.api.ROOM);

  return res.data;
};
