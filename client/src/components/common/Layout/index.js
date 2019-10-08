import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({
  onBackClick,
  isLoggedIn,
  children,
  location: { pathname },
}) =>
  pathname === '/' || pathname === '/login' ? (
    children
  ) : (
    <div>
      <Header onBackClick={onBackClick} isLoggedIn={isLoggedIn} />
      {children}
      <Footer />
    </div>
  );

export default Layout;
