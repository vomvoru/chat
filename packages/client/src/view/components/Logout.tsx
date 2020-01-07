import React, { FC } from 'react';

import { useLogout } from '../../hooks/useLogout';

export const Logout: FC = () => {
  const logout = useLogout();

  return <input type="button" value="Logout" onClick={logout} />;
};
