import React from 'react';

import Header from '../Header';
import { LayoutWrapper, Container } from './Layout.styled';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <LayoutWrapper>
      <Header />
      <Container>{children}</Container>
    </LayoutWrapper>
  );
}

export default Layout;
