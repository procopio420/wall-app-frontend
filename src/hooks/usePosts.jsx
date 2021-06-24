import { useCallback, useContext } from 'react';
import PostsContext from '../contexts/Posts';
import api from '../services/api';
import useModals from './useModals';

export default function usePosts() {
  const { posts, setPosts } = useContext(PostsContext);
  const { toggleModal } = useModals();

  const createPost = useCallback(
    async (title, body, onError) => {
      if (title.length && body.length) {
        const response = await api.post('/wall/', { title, body });

        if (response && response.status === 201) {
          const newPost = response && response.data;
          setPosts([newPost, ...posts]);
          toggleModal('createPost');
          onError({});
        } else {
          onError({ apiError: 'Ops! Something bad happened' });
        }
      } else {
        onError({
          title: !title.length && 'A title is required!',
          body: !body.length && 'A message body is required!',
        });
      }
    },
    [posts, setPosts, toggleModal],
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
