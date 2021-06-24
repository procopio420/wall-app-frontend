import { useCallback, useContext, useEffect } from 'react';
import AuthContext from '../contexts/Auth';
import api from '../services/api';
import jwdDecode from 'jwt-decode';

export default function useAuth() {
  const { user, setUser, setLoginOpen, setRegisterOpen } =
    useContext(AuthContext);

  useEffect(() => {
    if (user) {
      if (user.logedIn) {
        localStorage.setItem('username', user.username);
        localStorage.setItem('firstName', user.firstName);
        localStorage.setItem('lastName', user.lastName);
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
      }
    }
  }, [user]);

  const login = useCallback(
    async (username, password) => {
      const response = await api.post('/auth/login/', {
        username,
        password,
      });

      if (response && response.status === 200) {
        const { access, refresh } = response.data;
        const { username, firstName, lastName } = jwdDecode(access);

        const user = {
          username,
          firstName,
          lastName,
          logedIn: true,
        };

        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);

        setUser(user);
        setLoginOpen(false);
      }
    },
    [setUser, setLoginOpen],
  );

  const logout = useCallback(() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    setUser({ logedIn: false });
  }, [setUser]);

  const register = useCallback(
    async (username, password, password2, email, first_name, last_name) => {
      const response = await api.post('/auth/register/', {
        username,
        password,
        password2,
        email,
        first_name,
        last_name,
      });

      if (response && response.status === 201) {
        setRegisterOpen(false);
        setLoginOpen(true);
      }
    },
    [setRegisterOpen, setLoginOpen],
  );

  return {
    user,
    login,
    logout,
    register,
  };
}
