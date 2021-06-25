import React from 'react';

import { Container, Link } from './styles';

import useAuth from '../../hooks/useAuth';
import useModals from '../../hooks/useModals';

import SadCloud from '../../assets/sad-cloud.png';

export default function SorryMessage() {
  const { user } = useAuth();
  const { toggleModal } = useModals();

  return (
    <Container>
      <img src={SadCloud} alt="Sad cloud" />
      <p>Sorry, we dont have any posts yet :(</p>
      {user && user.logedIn ? (
        <p>
          Please, create a new post using the button in the bottom right corner
          <br />
          or by <Link onClick={() => toggleModal('createPost', true)}>clicking here!</Link>
        </p>
      ) : (
        <p>
          You need be logged in to create a new post
          <br />
          <Link onClick={() => toggleModal('register', true)}>Click here to register</Link> or{' '}
          <Link onClick={() => toggleModal('login', true)}>here to login</Link>
        </p>
      )}
    </Container>
  );
}
