import React from 'react';

import { Container, PostList, CreatePostButton } from './styles';

import Header from '../Header';
import PostCard from '../PostCard';
import SorryMessage from '../SorryMessage';

import CreatePostBox from '../Boxes/CreatePostBox';
import LoginBox from '../Boxes/LoginBox';
import RegisterBox from '../Boxes/RegisterBox';

import useAuth from '../../hooks/useAuth';
import usePosts from '../../hooks/usePosts';
import useModals from '../../hooks/useModals';

export default function WallPage() {
  const { user } = useAuth();
  const { posts } = usePosts();
  const { toggleModal } = useModals();

  return (
    <Container>
      <Header />
      <PostList>
        {posts ? (posts.map(({ id, author, title, body, created_at: createdAt }) => (
          <PostCard
            key={id}
            id={id}
            author={author}
            title={title}
            body={body}
            createdAt={createdAt}
          />
        ))) : (
          <SorryMessage />
        )}
        {!!user && !!user.logedIn && (
          <CreatePostButton onClick={() => toggleModal('createPost')}>
            +
          </CreatePostButton>
        )}
      </PostList>
      <LoginBox />
      <RegisterBox />
      <CreatePostBox />
    </Container>
  );
}
