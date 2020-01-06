import React, { useEffect, FC, useContext, useState } from 'react';

import { USER } from '../constants/keys';

interface IUserContext {
  user: IUser | null;
  setUser: (user: IUser) => void;
}

const UserContext = React.createContext<IUserContext | null>(null);

export const useUserContext = () => useContext(UserContext);

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState(localState);

  useEffect(() => {
    sessionStorage.setItem(USER, JSON.stringify(user));
  }, [user]);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

const localState = (() => {
  const userStr = sessionStorage.getItem(USER);
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
})();
