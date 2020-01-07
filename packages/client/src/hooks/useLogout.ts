import { useContext, useCallback } from 'react';

import { SetUserContext } from './contexts/User';

export const useLogout = () => {
  const setUser = useContext(SetUserContext);

  const logout = useCallback(() => {
    if (setUser) setUser(null);
  }, [setUser]);

  return logout;
};
