import { useState, useEffect } from 'react';

import { USER } from '../constants/keys';

export const useLogin = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (user) {
      sessionStorage.setItem(USER, JSON.stringify(user));
    }
  }, [user]);

  return {
    login: setUser,
  };
};
