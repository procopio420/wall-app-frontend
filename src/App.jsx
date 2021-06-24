import React from 'react';

import { AuthProvider } from './contexts/Auth';
import { PostsProvider } from './contexts/Posts';
import { ModalsProvider } from './contexts/Modals';

import WallPage from './WallPage';

export default function App() {
  return (
    <AuthProvider>
      <PostsProvider>
        <ModalsProvider>
          <WallPage />
        </ModalsProvider>
      </PostsProvider>
    </AuthProvider>
  );
}
