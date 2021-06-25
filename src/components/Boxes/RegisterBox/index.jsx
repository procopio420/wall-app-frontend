import React, { useState } from 'react';

import { Field, Row, Error } from './styles';

import BaseBox from '../BaseBox';
import Loading from '../../Loading';

import useAuth from '../../../hooks/useAuth';
import useModals from '../../../hooks/useModals';
import useLoading from '../../../hooks/useLoading';

export default function RegisterBox() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState({});

  const { register } = useAuth();
  const { registerIsOpen, toggleModal } = useModals();
  const { registerIsLoading } = useLoading();

  return (
    <BaseBox
      title="Register"
      toggle={() => toggleModal('register', false)}
      buttonAction={() =>
        register(
          { username, password, password2, email, first_name: firstName, last_name: lastName },
          (errors) => setErrors(errors),
        )
      }
      buttonText="Register"
      isOpen={registerIsOpen}
      footer={{
        action: () => {
          toggleModal('register', false);
          toggleModal('login', true);
        },
        link: 'Click here to login!',
        text: 'Already have an account? ',
      }}
    >
      {registerIsLoading ? (
        <Loading size={100} />
      ) : (
        <>
          <div>{!!errors.firstName && <Error>{errors.firstName}</Error>}</div>
          <div>{!!errors.lastName && <Error>{errors.lastName}</Error>}</div>
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
          <div>{!!errors.username && <Error>{errors.username}</Error>}</div>
          <div>{!!errors.email && <Error>{errors.email}</Error>}</div>
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
          <div>{!!errors.password && <Error>{errors.password}</Error>}</div>
          <div>{!!errors.password2 && <Error>{errors.password2}</Error>}</div>
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
        </>
      )}
    </BaseBox>
  );
}
