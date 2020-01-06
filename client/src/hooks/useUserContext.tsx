import React, { useEffect, FC, useContext, useState, useCallback } from 'react';

import { USER } from '../constants/keys';

interface IUserContet {
  user: IUser | null;
  login: (user: IUser) => void;
  logout: () => void;
}

const UserContext = React.createContext<IUserContet | null>(null);

export const useUserContext = () => useContext(UserContext);

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState(localState);

  useEffect(() => {
    sessionStorage.setItem(USER, JSON.stringify(user));
  }, [user]);

  const login = useCallback(setUser, []);
  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};

const localState = (() => {
  const userStr = sessionStorage.getItem(USER);
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
})();
