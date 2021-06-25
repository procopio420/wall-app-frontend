import { useCallback, useContext } from 'react';

import LoadingContext from '../contexts/Loading';

export default function useLoading() {
  const {
    wallIsLoading,
    setWallLoading,
    loginIsLoading,
    setLoginIsLoading,
    registerIsLoading,
    setRegisterIsLoading,
    createPostIsLoading,
    setCreatePostIsLoading,
  } = useContext(LoadingContext);

  const toggleLoading = useCallback(
    (modal, isOn) => {
      const choices = {
        wall: () => setWallLoading(isOn),
        login: () => setLoginIsLoading(isOn),
        register: () => setRegisterIsLoading(isOn),
        createPost: () => setCreatePostIsLoading(isOn),
      };
      return choices[modal]();
    },
    [setWallLoading, setLoginIsLoading, setRegisterIsLoading, setCreatePostIsLoading],
  );

  return {
    wallIsLoading,
    loginIsLoading,
    registerIsLoading,
    createPostIsLoading,
    toggleLoading,
  };
}
