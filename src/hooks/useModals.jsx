import { useCallback, useContext } from 'react';
import AuthContext from '../contexts/Auth';
import PostsContext from '../contexts/Posts';

export default function useModals() {
  const { createPostIsOpen, setCreatePostIsOpen } = useContext(PostsContext);
  const { loginIsOpen, setLoginOpen, registerIsOpen, setRegisterOpen } =
    useContext(AuthContext);

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
