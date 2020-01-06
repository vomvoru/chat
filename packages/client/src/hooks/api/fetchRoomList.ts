import axios from 'axios';

export const fetchRoomList = async () => {
  const res = await axios.get<IRoom[]>('/api/room');

  return res.data;
};
