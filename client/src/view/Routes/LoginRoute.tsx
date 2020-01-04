import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { LoginPage } from '../pages/LoginPage';
import { LOGIN_PATH } from '../constants/paths';

export const LoginRoute: FC = () => {
  const match = useRouteMatch(LOGIN_PATH);

  if (match && match.isExact) {
    return <LoginPage />;
  }

  return null;
};
