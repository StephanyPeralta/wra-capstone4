import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import { LayoutWrapper } from './Layout.styled';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <LayoutWrapper>
      <Header />
      <div className="layout-container">{children}</div>
      <Footer />
    </LayoutWrapper>
  );
}

export default Layout;
