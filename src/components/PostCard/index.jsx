import React from 'react';
import moment from 'moment';

import { Card, Button } from './styles';

import useAuth from '../../hooks/useAuth';
import usePosts from '../../hooks/usePosts';

import XIcon from '../../assets/x.svg';

export default function PostCard({ id, author, body, title, createdAt }) {
  const { user } = useAuth();
  const { removePost } = usePosts();
  return (
    <Card>
      <div>
        <div className="row">
          <h2>{title}</h2>
          {user && user.username === author && (
            <Button onClick={() => removePost(id)}>
              <img src={XIcon} alt="Remove Icon" />
            </Button>
          )}
        </div>
        <p>{body}</p>
        <div className="row">
          <strong>{author}</strong>
          <p>{moment(createdAt).fromNow()}</p>
        </div>
      </div>
    </Card>
  );
}
