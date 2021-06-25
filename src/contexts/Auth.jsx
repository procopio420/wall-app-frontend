import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginIsOpen, setLoginOpen] = useState(false);
  const [registerIsOpen, setRegisterOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');

    user ? setUser(JSON.parse(user)) : setUser({ logedIn: false });
  }, []);

  const contextValue = {
    user,
    setUser,
    loginIsOpen,
    setLoginOpen,
    registerIsOpen,
    setRegisterOpen,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthContext;
