import React, { FC } from 'react';

import { Routes } from '../Routes';
import { Providers } from './Providers';

export const App: FC = () => {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
};
