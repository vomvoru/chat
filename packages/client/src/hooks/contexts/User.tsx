import React, { useEffect, FC, useState, Dispatch, SetStateAction } from 'react';

import { USER } from '../../constants/keys';

export const UserContext = React.createContext<IUser | null>(null);
export const SetUserContext = React.createContext<Dispatch<SetStateAction<IUser | null>> | null>(
  null
);

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(localState);

  useEffect(() => {
    sessionStorage.setItem(USER, JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>{children}</SetUserContext.Provider>
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
