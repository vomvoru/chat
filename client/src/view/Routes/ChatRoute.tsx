import React, { FC } from 'react';
import { useRouteMatch } from 'react-router';

import { ChatPage } from '../pages/ChatPage';
import { ChatPath } from '../constants/paths';

export const ChatRoute: FC = () => {
  const match = useRouteMatch(ChatPath);

  if (match && match.isExact) {
    return <ChatPage />;
  }

  return null;
};
