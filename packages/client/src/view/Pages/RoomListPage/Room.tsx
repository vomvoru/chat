import React, { FC, useCallback } from 'react';

import { useHistory } from 'react-router';

import { CHAT_PATH } from '../../../constants/paths';
import { useJoinRoom } from '../../../hooks/useRoomContext';

interface IProps {
  room: IRoom;
}

export const Room: FC<IProps> = ({ room }) => {
  const joinRoom = useJoinRoom();
  const history = useHistory();

  const clickHandler = useCallback(() => {
    if (joinRoom) {
      joinRoom(room);
      history.replace(CHAT_PATH);
    }
  }, [history, joinRoom, room]);

  return <input type="button" value={room.name} onClick={clickHandler} />;
};
