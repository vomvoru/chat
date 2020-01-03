import React, { FC, useState, useCallback } from 'react';

export const LoginPage: FC = () => {
  const [userId, setUserId] = useState('');
  const changeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.currentTarget.value);
  }, []);

  return (
    <div>
      <input type="text" placeholder="user id" onChange={changeHandler} value={userId} />
      <button>connect</button>
    </div>
  );
};
