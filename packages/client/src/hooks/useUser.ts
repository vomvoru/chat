import { useUserContext } from './useUserContext';

export const useUser = () => {
  const userContext = useUserContext();

  if (!userContext) return null;

  return userContext.user;
};
