import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router';
import { IRoom } from 'chat-common';

// TODO ../../../ 와 같은 경로 제거를 위해 alias path 적용
import { ROOM_PATH } from '../../../constants/paths';
import { useJoinRoom } from '../../../hooks/useJoinRoom';

interface IProps {
  room: IRoom;
}

export const Room: FC<IProps> = ({ room }) => {
  const joinRoom = useJoinRoom();
  const history = useHistory();

  const clickHandler = useCallback(() => {
    if (joinRoom) {
      joinRoom(room);
      history.replace(ROOM_PATH);
    }
  }, [history, joinRoom, room]);

  return <input type="button" value={room.name} onClick={clickHandler} />;
};
