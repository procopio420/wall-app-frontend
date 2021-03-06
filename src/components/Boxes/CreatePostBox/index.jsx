import React, { useState } from 'react';

import { BigField, Field, Error } from './styles';

import BaseBox from '../BaseBox';
import Loading from '../../Loading';

import usePosts from '../../../hooks/usePosts';
import useModals from '../../../hooks/useModals';
import useLoading from '../../../hooks/useLoading';

export default function CreatePostBox() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState({});

  const { createPost } = usePosts();
  const { toggleModal, createPostIsOpen } = useModals();
  const { createPostIsLoading } = useLoading();

  return (
    <BaseBox
      title="Create a new post!"
      toggle={() => toggleModal('createPost', false)}
      buttonAction={() => createPost(title, body, (error) => setErrors(error))}
      buttonText="Post"
      isOpen={createPostIsOpen}
    >
      {createPostIsLoading ? (
        <Loading size={100} />
      ) : (
        <>
          <div>{!!errors.apiError && <Error>{errors.apiError}</Error>}</div>
          <div>{!!errors.title && <Error>{errors.title}</Error>}</div>
          <Field
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Post's title"
          />

          {!!errors.body && <Error>{errors.body}</Error>}
          <BigField
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Type here your message for Wall App's users"
          />
        </>
      )}
    </BaseBox>
  );
}
