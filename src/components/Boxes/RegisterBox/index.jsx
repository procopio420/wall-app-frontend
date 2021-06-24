import React, { useState } from 'react';

import { Field, Row } from './styles';

import BaseBox from '../BaseBox';

import useAuth from '../../../hooks/useAuth';
import useModals from '../../../hooks/useModals';

export default function RegisterBox() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const { register } = useAuth();
  const { registerIsOpen, toggleModal } = useModals();

  return (
    <BaseBox
      title="Register"
      toggle={() => toggleModal('register')}
      buttonAction={() =>
        register(username, password, password2, email, firstName, lastName)
      }
      buttonText="Register"
      isOpen={registerIsOpen}
      height={400}
      width={450}
      footer={{
        action: () => {
          toggleModal('login');
          toggleModal('register');
        },
        link: 'Click here to login!',
        text: 'Already have an account? ',
      }}
    >
      <Row>
        <Field
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="Your first name"
        />
        <Field
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Your last name"
        />
      </Row>
      <Row>
        <Field
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Your username"
        />
        <Field
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your email"
        />
      </Row>
      <Row>
        <Field
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Your password"
        />
        <Field
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          type="password"
          placeholder="Confirm your password"
        />
      </Row>
    </BaseBox>
  );
}
