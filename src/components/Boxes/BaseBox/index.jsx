import React from 'react';
import ReactModal from 'react-modal';

import { Button, Container, CloseButton, Image, Title, Text, Link } from './styles';

import logo from '../../../assets/logo.png';
import XIcon from '../../../assets/x.svg';

const customStyles = {
  content: {
    backgroundColor: 'transparent',
    border: 0,
  },
  overlay: {
    backgroundColor: 'rgba(68, 68, 68, 0.95)',
  },
};

export default function BaseBox({
  children,
  isOpen,
  toggle,
  title,
  buttonText,
  buttonAction,
  height,
  width,
  footer,
}) {
  return (
    <ReactModal appElement={document.getElementById('root')} style={customStyles} isOpen={isOpen}>
      <Container height={height} width={width}>
        <Image src={logo} alt="Wall App Logo" />
        <Title>{title}</Title>

        {children}

        <Button onClick={buttonAction}>{buttonText}</Button>
        <CloseButton onClick={toggle}>
          <img src={XIcon} alt="Close Icon" />
        </CloseButton>
        {footer && (
          <Text>
            {footer.text}
            <Link onClick={footer.action}>{footer.link}</Link>
          </Text>
        )}
      </Container>
    </ReactModal>
  );
}
