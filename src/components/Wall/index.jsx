import React from 'react';

import { Container, Main } from './styles';

import Header from '../Header';
import Loading from '../Loading';
import CreatePostButton from '../CreatePost';
import PostsList from '../PostsList';

import CreatePostBox from '../Boxes/CreatePostBox';
import LoginBox from '../Boxes/LoginBox';
import RegisterBox from '../Boxes/RegisterBox';

import useLoading from '../../hooks/useLoading';

export default function WallPage() {
  const { wallIsLoading } = useLoading();

  return (
    <Container>
      <Header />
      <Main>
        {wallIsLoading ? (
          <div style={{ marginTop: '20vh' }}>
            <Loading />
          </div>
        ) : (
          <PostsList />
        )}
        <CreatePostButton />
      </Main>
      <LoginBox />
      <RegisterBox />
      <CreatePostBox />
    </Container>
  );
}
