import { useContext } from 'react';

import { SetUserContext } from './contexts/User';

export const useLogin = () => useContext(SetUserContext);
