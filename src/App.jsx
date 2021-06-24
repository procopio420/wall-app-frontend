import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';

import LoginBox from '../../components/Boxes/LoginBox';
import RegisterBox from '../../components/Boxes/RegisterBox';

import useAuth from '../../hooks/useAuth';
import usePosts from '../../hooks/usePosts';
import useModals from '../../hooks/useModals';

import { AuthProvider } from './contexts/Auth';
import { PostsProvider } from './contexts/Posts';

export default function App() {
  const { user } = useAuth();
  const { posts } = usePosts();
  const { toggleModal } = useModals();


  return (
    <AuthProvider>
      <PostsProvider>
        <Container>
        <Header />
        
        <LoginBox />
        <RegisterBox />
      </Container>
      </PostsProvider>
    </AuthProvider>
  );
}
