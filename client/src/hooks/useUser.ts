import { useState, useEffect } from 'react';

import { USER } from '../constants/keys';

export const useLogin = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const savedUser = sessionStorage.getItem(USER);
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return user;
};
