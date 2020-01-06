import { useContext } from 'react';

import { SetRoomContext } from './contexts/Room';

export const useJoinRoom = () => useContext(SetRoomContext);
