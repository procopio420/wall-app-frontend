import React, { useState } from 'react';

const LoadingContext = React.createContext({});

export const LoadingProvider = ({ children }) => {
  const [wallIsLoading, setWallLoading] = useState(false);
  const [loginIsLoading, setLoginIsLoading] = useState(false);
  const [registerIsLoading, setRegisterIsLoading] = useState(false);
  const [createPostIsLoading, setCreatePostIsLoading] = useState(false);

  const contextValue = {
    wallIsLoading,
    setWallLoading,
    loginIsLoading,
    setLoginIsLoading,
    registerIsLoading,
    setRegisterIsLoading,
    createPostIsLoading,
    setCreatePostIsLoading,
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;
