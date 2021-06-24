import React, { useEffect, useState } from 'react';
import api from '../services/api';

const PostsContext = React.createContext({});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [createPostIsOpen, setCreatePostIsOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await api.get('/wall/');
      if (response && response.status === 200 && setPosts) {
        setPosts(response.data);
      }
    })();
  }, []);

  const contextValue = {
    posts,
    setPosts,
    createPostIsOpen,
    setCreatePostIsOpen,
  };

  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
