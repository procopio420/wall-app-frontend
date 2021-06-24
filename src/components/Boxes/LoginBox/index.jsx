import React, { useState } from 'react';

import { Field } from './styles';

import BaseBox from '../BaseBox';

import useAuth from '../../../hooks/useAuth';
import useModals from '../../../hooks/useModals';

export default function LoginBox() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();
  const { loginIsOpen, toggleModal } = useModals();

  return (
    <BaseBox
      title="Login"
      toggle={() => toggleModal('login')}
      buttonAction={() => login(username, password)}
      buttonText="Login"
      isOpen={loginIsOpen}
      height={340}
      width={250}
      footer={{
        action: () => {
          toggleModal('login');
          toggleModal('register');
        },
        link: 'click here to register!',
        text: 'Or ',
      }}
    >
      <Field
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Your username"
      />
      <Field
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Your password"
      />
    </BaseBox>
  );
}
