import { useContext, useCallback } from 'react';

import { SetUserContext } from './contexts/User';
import { useLeaveRoom } from './useLeaveRoom';

export const useLogout = () => {
  const setUser = useContext(SetUserContext);
  const leave = useLeaveRoom();

  const logout = useCallback(() => {
    if (setUser) {
      setUser(null);
      leave();
    }
  }, [leave, setUser]);

  return logout;
};
