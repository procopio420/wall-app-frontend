import { useCallback, useContext } from 'react';

import ModalsContext from '../contexts/Modals';

export default function useModals() {
  const {
    loginIsOpen,
    setLoginOpen,
    registerIsOpen,
    setRegisterOpen,
    createPostIsOpen,
    setCreatePostIsOpen,
  } = useContext(ModalsContext);

  const toggleModal = useCallback(
    (modal) => {
      const choices = {
        login: () => setLoginOpen(!loginIsOpen),
        register: () => setRegisterOpen(!registerIsOpen),
        createPost: () => setCreatePostIsOpen(!createPostIsOpen),
      };

      choices[modal]();
    },
    [
      loginIsOpen,
      setLoginOpen,
      registerIsOpen,
      setRegisterOpen,
      createPostIsOpen,
      setCreatePostIsOpen,
    ],
  );

  return {
    loginIsOpen,
    registerIsOpen,
    createPostIsOpen,
    toggleModal,
  };
}
