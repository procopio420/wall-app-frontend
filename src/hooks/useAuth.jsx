import { useCallback, useContext, useEffect } from 'react';
import AuthContext from '../contexts/Auth';
import api from '../services/api';
import jwdDecode from 'jwt-decode';
import useModals from './useModals';

export default function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  const { toggleModal } = useModals();

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
    async (username, password, onError) => {
      if (username.length && password.length) {
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
          toggleModal('login');
        } else {
          onError({
            credentials:
              'Invalid credentials!\n\n Please check your username/password',
          });
        }
      } else {
        onError({
          username: !username.length && 'An username is required!',
          password: !password.length && 'A password is required!',
        });
      }
    },
    [setUser, toggleModal],
  );

  const logout = useCallback(() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    setUser({ logedIn: false });
  }, [setUser]);

  const register = useCallback(
    async (
      username,
      password,
      password2,
      email,
      first_name,
      last_name,
      onError,
    ) => {
      if (
        username &&
        password &&
        password2 &&
        email &&
        first_name &&
        last_name
      ) {
        const response = await api.post('/auth/register/', {
          username,
          password,
          password2,
          email,
          first_name,
          last_name,
        });

        if (response && response.status === 201) {
          toggleModal('register');
          toggleModal('login');
        } else {
          onError({
            password: password !== password2 && "Passwords didn't match",
            username: password === password2 && 'Username is probably in use',
          });
        }
      } else {
        onError({
          username: !username.length && 'An username is required!',
          password: !password.length && 'A password is required!',
          password2:
            !password2.length && 'A password confirmation is required!',
          email: !email.length && 'An email is required!',
          firstName: !first_name.length && 'A first name is required!',
          lastName: !last_name.length && 'A last name is required!',
        });
      }
    },
    [toggleModal],
  );

  return {
    user,
    login,
    logout,
    register,
  };
}
