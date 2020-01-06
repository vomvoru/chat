import { useContext } from 'react';

import { RoomContext } from './contexts/Room';

export const useRoom = () => useContext(RoomContext);
