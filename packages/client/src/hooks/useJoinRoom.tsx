import { useContext } from 'react';

import { JoinRoomContext } from './contexts/Room';

export const useJoinRoom = () => useContext(JoinRoomContext);
