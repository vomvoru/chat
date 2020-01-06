import React, { useEffect, FC, useState, Dispatch, SetStateAction } from 'react';

import { USER } from '../../constants/keys';

export const UserContext = React.createContext<IUser | null>(null);
export const LoginContext = React.createContext<Dispatch<SetStateAction<IUser>> | null>(null);

export const UserProvider: FC = ({ children }) => {
  const [user, login] = useState<IUser>(localState);

  useEffect(() => {
    sessionStorage.setItem(USER, JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={user}>
      <LoginContext.Provider value={login}>{children}</LoginContext.Provider>
    </UserContext.Provider>
  );
};

const localState = (() => {
  const userStr = sessionStorage.getItem(USER);
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
})();
