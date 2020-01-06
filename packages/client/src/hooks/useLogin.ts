import { useContext } from 'react';

import { LoginContext } from './contexts/User';

export const useLogin = () => useContext(LoginContext);
