import React, { useState } from 'react';

import { Field, Error } from './styles';

import BaseBox from '../BaseBox';
import Loading from '../../Loading';

import useAuth from '../../../hooks/useAuth';
import useModals from '../../../hooks/useModals';
import useLoading from '../../../hooks/useLoading';

export default function LoginBox() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const { login } = useAuth();
  const { loginIsOpen, toggleModal } = useModals();
  const { loginIsLoading } = useLoading();

  return (
    <BaseBox
      title="Login"
      toggle={() => toggleModal('login', false)}
      buttonAction={() => login(username, password, (errors) => setErrors(errors))}
      buttonText="Login"
      isOpen={loginIsOpen}
      footer={{
        action: () => {
          toggleModal('login', false);
          toggleModal('register', true);
        },
        link: 'click here to register!',
        text: 'Or ',
      }}
    >
      {loginIsLoading ? (
        <Loading size={100} />
      ) : (
        <>
          <div>{!!errors.credentials && <Error>{errors.credentials}</Error>}</div>
          <div>{!!errors.username && <Error>{errors.username}</Error>}</div>
          <Field
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Your username"
          />
          <div>{!!errors.password && <Error>{errors.password}</Error>}</div>
          <Field
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Your password"
          />
        </>
      )}
    </BaseBox>
  );
}
