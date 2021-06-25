import { useCallback, useContext, useEffect } from 'react';
import jwdDecode from 'jwt-decode';

import api from '../services/api';

import AuthContext from '../contexts/Auth';

import useModals from './useModals';
import useLoading from './useLoading';

export default function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  const { toggleModal } = useModals();
  const { toggleLoading } = useLoading();

  useEffect(() => {
    if (user) {
      user.logedIn
        ? localStorage.setItem('user', JSON.stringify(user))
        : localStorage.removeItem('user');
    }
  }, [user]);

  const login = useCallback(
    async (username, password, onError) => {
      if (!username.length || !password.length) {
        return onError({
          username: !username.length && 'An username is required!',
          password: !password.length && 'A password is required!',
        });
      }

      toggleLoading('login', true);

      const response = await api.post('/auth/login/', {
        username,
        password,
      });

      toggleLoading('login', false);

      if (!response || !response.status === 200) {
        return onError({
          credentials: 'Invalid credentials! Please check your username and password',
        });
      }

      const { access, refresh } = response.data;
      const { username: name, firstName, lastName } = jwdDecode(access);

      const user = {
        username: name,
        firstName,
        lastName,
        logedIn: true,
      };

      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);

      setUser(user);
      toggleModal('login', false);
      onError({});
    },
    [setUser, toggleModal, toggleLoading],
  );

  const logout = useCallback(() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    setUser({ logedIn: false });
  }, [setUser]);

  const register = useCallback(
    async (userData, onError) => {
      const requiredFields = [
        'username',
        'password',
        'password2',
        'email',
        'first_name',
        'last_name',
      ];

      if (requiredFields.some((requiredField) => !userData[requiredField])) {
        return onError({
          username: !userData.username.length && 'An username is required!',
          password: !userData.password.length && 'A password is required!',
          password2: !userData.password2.length && 'A password confirmation is required!',
          email: !userData.email.length && 'An email is required!',
          firstName: !userData.first_name.length && 'A first name is required!',
          lastName: !userData.last_name.length && 'A last name is required!',
        });
      }

      toggleLoading('register', true);

      const response = await api.post('/auth/register/', userData);

      toggleLoading('register', false);

      if (!response || !response.status === 201) {
        return onError({
          password: userData.password !== userData.password2 && "Passwords didn't match",
          username: userData.password === userData.password2 && 'Username/email is probably in use',
        });
      }

      toggleModal('register', false);
      toggleModal('login', true);
      onError({});
    },
    [toggleModal, toggleLoading],
  );

  return {
    user,
    login,
    logout,
    register,
  };
}
