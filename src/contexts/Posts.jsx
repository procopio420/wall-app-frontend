import React, { useEffect, useState } from 'react';
import api from '../services/api';

const PostsContext = React.createContext({});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('/wall/');
      if (response && response.status === 200) {
        setPosts(response.data);
      }
    })();
  }, []);

  const contextValue = {
    posts,
    setPosts,
  };

  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
