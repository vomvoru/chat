import { useUserContext } from './useUserContext';

export const useLogin = () => {
  const userContext = useUserContext();

  if (!userContext) return null;

  return userContext.setUser;
};
