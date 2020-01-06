import React, { FC } from 'react';
import { useRouteMatch, useHistory } from 'react-router';

import { ChatPage } from '../../Pages/ChatPage';
import { CHAT_PATH, HOME_PATH } from '../../../constants/paths';
import { useUser } from '../../../hooks/useUser';
import { useRoom } from '../../../hooks/useRoom';

interface IParams {
  roomId: string;
}

export const ChatRoute: FC = () => {
  const match = useRouteMatch<IParams>(CHAT_PATH);
  const user = useUser();
  const room = useRoom();
  const history = useHistory();

  if (match && match.isExact) {
    if (user && room) {
      return <ChatPage />;
    }

    history.replace(HOME_PATH);
    return null;
  }

  return null;
};
