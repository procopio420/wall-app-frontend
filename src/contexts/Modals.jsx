import React, { useState } from 'react';

const ModalsContext = React.createContext({});

export const ModalsProvider = ({ children }) => {
  const [loginIsOpen, setLoginOpen] = useState(false);
  const [registerIsOpen, setRegisterOpen] = useState(false);
  const [createPostIsOpen, setCreatePostIsOpen] = useState(false);

  const contextValue = {
    loginIsOpen,
    setLoginOpen,
    registerIsOpen,
    setRegisterOpen,
    createPostIsOpen,
    setCreatePostIsOpen,
  };

  return <ModalsContext.Provider value={contextValue}>{children}</ModalsContext.Provider>;
};

export default ModalsContext;
