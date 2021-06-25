import React from 'react';

import { CreatePostButton } from './styles';

import useAuth from '../../hooks/useAuth';
import useModals from '../../hooks/useModals';

export default function CreatePost() {
  const { user } = useAuth();
  const { toggleModal } = useModals();

  return (
    <>
      {!!user && !!user.logedIn && (
        <CreatePostButton onClick={() => toggleModal('createPost', true)}>+</CreatePostButton>
      )}
    </>
  );
}
