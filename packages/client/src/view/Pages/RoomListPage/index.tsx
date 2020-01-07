import React, { FC } from 'react';

import { RoomList } from './RoomList/index';
import { Logout } from '../../components/Logout';

export const RoomListPage: FC = () => {
  return (
    <>
      <RoomList />
      <Logout />
    </>
  );
};
