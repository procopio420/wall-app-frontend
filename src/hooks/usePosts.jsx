import { useCallback, useContext } from 'react';

import api from '../services/api';

import PostsContext from '../contexts/Posts';

import useModals from './useModals';
import useLoading from './useLoading';

export default function usePosts() {
  const { posts, setPosts } = useContext(PostsContext);
  const { toggleModal } = useModals();
  const { toggleLoading } = useLoading();

  const createPost = useCallback(
    async (title, body, onError) => {
      if (!title.length || !body.length) {
        return onError({
          title: !title.length && 'A title is required!',
          body: !body.length && 'A message body is required!',
        });
      }

      toggleLoading('createPost', true);

      const response = await api.post('/wall/', { title, body });

      toggleLoading('createPost', false);

      if (!response || !response.status === 201) {
        return onError({ apiError: 'Ops! Something bad happened' });
      }

      setPosts([response.data, ...posts]);
      toggleModal('createPost', false);
      onError({});
    },
    [posts, setPosts, toggleModal, toggleLoading],
  );

  const removePost = useCallback(
    async (id) => {
      const response = await api.delete(`/wall/${id}`);

      if (response && response.status === 204) {
        const newPosts = posts.filter((post) => post.id !== id);
        setPosts(newPosts);
      }
    },
    [posts, setPosts],
  );

  return {
    posts,
    createPost,
    removePost,
  };
}
