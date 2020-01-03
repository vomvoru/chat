import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { LoginPage } from '../pages/LoginPage';
import { LoginPath } from '../constants/paths';

export const LoginRoute: FC = () => {
  const match = useRouteMatch(LoginPath);

  if (match && match.isExact) {
    return <LoginPage />;
  }

  return null;
};
