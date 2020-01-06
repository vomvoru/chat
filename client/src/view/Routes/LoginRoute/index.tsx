import React, { FC } from 'react';
import { useRouteMatch, useHistory } from 'react-router';

import { LoginPage } from '../../Pages/LoginPage';
import { LOGIN_PATH, HOME_PATH, ROOM_LIST_PATH } from '../../../constants/paths';
import { useUserContext } from '../../../hooks/useUserContext';

export const LoginRoute: FC = () => {
  const match = useRouteMatch([LOGIN_PATH, HOME_PATH]);
  const userContext = useUserContext();
  const history = useHistory();

  if (match && match.isExact) {
    if (userContext && userContext.user) {
      history.replace(ROOM_LIST_PATH);
      return null;
    }

    return <LoginPage />;
  }

  return null;
};
