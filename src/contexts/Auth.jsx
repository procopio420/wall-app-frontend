import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginIsOpen, setLoginOpen] = useState(false);
  const [registerIsOpen, setRegisterOpen] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem('username');
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');

    if (username && firstName && lastName) {
      setUser({
        username,
        firstName,
        lastName,
        logedIn: true,
      });
    } else {
      setUser({ logedIn: false });
    }
  }, []);

  const contextValue = {
    user,
    setUser,
    loginIsOpen,
    setLoginOpen,
    registerIsOpen,
    setRegisterOpen,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
