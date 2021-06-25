import React from 'react';
import ReactLoading from 'react-loading';

import { LoadingSection } from './styles';

export default function Loading({ size = 200 }) {
  return (
    <LoadingSection>
      <ReactLoading
        type="spin"
        color="#f50"
        height={`${size}px`}
        width={`${size}px`}
      />
      <p>Loading...</p>
    </LoadingSection>
  );
}
