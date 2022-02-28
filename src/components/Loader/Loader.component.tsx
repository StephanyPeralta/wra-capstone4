import React from 'react';

import { LoaderContainer, LoaderIcon } from './Loader.styled';

function Loader() {
  return (
    <LoaderContainer data-testid="loader-icon2">
      <LoaderIcon size={60} />
    </LoaderContainer>
  );
}

export default Loader;
