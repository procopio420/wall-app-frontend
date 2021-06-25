import React from 'react';

import { AuthProvider } from './contexts/Auth';
import { PostsProvider } from './contexts/Posts';
import { ModalsProvider } from './contexts/Modals';
import { LoadingProvider } from './contexts/Loading';

import WallPage from './components/Wall';

export default function App() {
  return (
    <LoadingProvider>
      <ModalsProvider>
        <AuthProvider>
          <PostsProvider>
            <WallPage />
          </PostsProvider>
        </AuthProvider>
      </ModalsProvider>
    </LoadingProvider>
  );
}
