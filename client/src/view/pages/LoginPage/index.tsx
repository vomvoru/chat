import React, { FC, useState, useCallback } from 'react';

import { useUserContext } from '../../../hooks/useUserContext';

export const LoginPage: FC = () => {
  const [ID, setID] = useState('');
  const userContext = useUserContext();

  const changeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setID(e.currentTarget.value);
  }, []);

  const clickConnect = useCallback(() => {
    if (userContext) userContext.login({ id: ID });
  }, [userContext, ID]);

  return (
    <div>
      <input type="text" placeholder="user id" onChange={changeHandler} value={ID} />
      <input type="button" value="connect" onClick={clickConnect} />
    </div>
  );
};
