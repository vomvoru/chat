import React from 'react';

import { Routes } from '../Routes';
import { UserProvider } from '../../hooks/useUserContext';

export const App = () => {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
};
