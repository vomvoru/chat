import React, { FC } from 'react';
import { useRouteMatch, useHistory } from 'react-router';

import { ChatPage } from '../../Pages/ChatPage';
import { CHAT_PATH, LOGIN_PATH } from '../../../constants/paths';
import { useUserContext } from '../../../hooks/useUserContext';

interface IParams {
  roomId: string;
}

export const ChatRoute: FC = () => {
  const match = useRouteMatch<IParams>(CHAT_PATH);
  const userContext = useUserContext();
  const history = useHistory();

  if (match && match.isExact) {
    if (userContext && userContext.user) {
      return <ChatPage roomId={match.params.roomId} />;
    }

    history.replace(LOGIN_PATH);
    return null;
  }

  return null;
};
