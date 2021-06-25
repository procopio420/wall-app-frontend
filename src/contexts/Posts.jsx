import React, { useEffect, useState } from 'react';
import useLoading from '../hooks/useLoading';
import api from '../services/api';

const PostsContext = React.createContext({});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const { toggleLoading } = useLoading();

  useEffect(() => {
    (async () => {
      toggleLoading('wall', true);
      const response = await api.get('/wall/');
      if (response && response.status === 200) {
        setPosts(response.data);
        toggleLoading('wall', false);
      }
    })();
  }, [toggleLoading]);

  const contextValue = {
    posts,
    setPosts,
  };

  return <PostsContext.Provider value={contextValue}>{children}</PostsContext.Provider>;
};

export default PostsContext;
