import React from 'react';

import { Container, Logo, Button, ButtonGroup, Profile } from './styles';

import useAuth from '../../hooks/useAuth';
import useModals from '../../hooks/useModals';

import LogoImage from '../../assets/logo.png';
import LogoutIcon from '../../assets/logout.svg';
import LoginIcon from '../../assets/login.svg';
import RegisterIcon from '../../assets/register.svg';

export default function Header() {
  const { user, logout } = useAuth();
  const { toggleModal } = useModals();

  return (
    <Container>
      <Logo>
        <img src={LogoImage} alt="Wall App Logo" />
        <h1>Wall App</h1>
      </Logo>
      <ButtonGroup>
        {!!user && !!user.logedIn ? (
          <>
            <Profile>
              Hey, {user.firstName} {user.lastName}!
            </Profile>
            <Button onClick={() => logout()}>
              <img src={LogoutIcon} alt="Logout Icon" />
              <p>Logout</p>
            </Button>
          </>
        ) : (
          <>
            <Button onClick={() => toggleModal('login', true)}>
              <img src={LoginIcon} alt="Login Icon" />
              <p>Login</p>
            </Button>
            <Button onClick={() => toggleModal('register', true)}>
              <img src={RegisterIcon} alt="Register Icon" />
              <p>Register</p>
            </Button>
          </>
        )}
      </ButtonGroup>
    </Container>
  );
}
