import React, { FC, useState, useCallback } from 'react';

import { useLogin } from '../../../hooks/useLogin';

export const LoginPage: FC = () => {
  const [ID, setID] = useState('');
  const login = useLogin();

  const changeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setID(e.currentTarget.value);
  }, []);

  const clickConnect = useCallback(() => {
    if (login) login({ id: ID });
  }, [login, ID]);

  return (
    <div>
      <input type="text" placeholder="user id" onChange={changeHandler} value={ID} />
      <input type="button" value="connect" onClick={clickConnect} />
    </div>
  );
};
