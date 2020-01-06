import { useContext, useCallback } from 'react';

import { SetRoomContext } from './contexts/Room';

export const useLeaveRoom = () => {
  const setRoom = useContext(SetRoomContext);

  const leaveRoom = useCallback(() => {
    if (setRoom) setRoom(null);
  }, [setRoom]);

  return leaveRoom;
};
