import React, { FC } from 'react';

import { useLeaveRoom } from '../../../../hooks/useLeaveRoom';

export const LeaveButton: FC = () => {
  const leave = useLeaveRoom();

  return <input type="button" value="leave" onClick={leave} />;
};
