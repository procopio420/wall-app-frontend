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
    (modal, isOpen) => {
      const choices = {
        login: () => setLoginOpen(isOpen),
        register: () => setRegisterOpen(isOpen),
        createPost: () => setCreatePostIsOpen(isOpen),
      };
      return choices[modal]();
    },
    [setLoginOpen, setRegisterOpen, setCreatePostIsOpen],
  );

  return {
    loginIsOpen,
    registerIsOpen,
    createPostIsOpen,
    toggleModal,
  };
}
