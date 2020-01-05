import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { ChatPage } from '../../Pages/ChatPage';
import { CHAT_PATH } from '../../../constants/paths';

interface IParams {
  roomId: string;
}

export const ChatRoute: FC = () => {
  const match = useRouteMatch<IParams>(CHAT_PATH);

  if (match && match.isExact) {
    return <ChatPage roomId={match.params.roomId} />;
  }

  return null;
};
