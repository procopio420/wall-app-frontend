import React, { useState } from 'react';

import { BigField, Field } from './styles';

import BaseBox from '../BaseBox';

import usePosts from '../../../hooks/usePosts';
import useModals from '../../../hooks/useModals';

export default function CreatePostBox() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { createPost } = usePosts();
  const { toggleModal, createPostIsOpen } = useModals();

  return (
    <BaseBox
      title="Create a new post!"
      toggle={() => toggleModal('createPost')}
      buttonAction={() => createPost(title, body)}
      buttonText="Post"
      isOpen={createPostIsOpen}
      height={400}
      width={500}
    >
      <Field
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Post's title"
      />

      <BigField
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Type here your message for Wall App's users"
      />
    </BaseBox>
  );
}
