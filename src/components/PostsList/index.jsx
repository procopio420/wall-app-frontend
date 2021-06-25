import React from 'react';

import PostCard from '../PostCard';
import SorryMessage from '../SorryMessage';

import usePosts from '../../hooks/usePosts';

export default function PostsList() {
  const { posts } = usePosts();

  return (
    <>
      {posts && posts.length ? (
        posts.map(({ id, author, title, body, created_at }) => (
          <PostCard
            key={id}
            id={id}
            author={author}
            title={title}
            body={body}
            createdAt={created_at}
          />
        ))
      ) : (
        <SorryMessage />
      )}
    </>
  );
}
