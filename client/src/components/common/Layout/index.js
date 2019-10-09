import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({
  onBackClick,
  isLoggedIn,
  children,
  location: { pathname },
  handleLogout,
}) =>
  pathname === '/' || pathname === '/login' || pathname === '/signup' ? (
    children
  ) : (
    <div>
      <Header
        handleLogout={handleLogout}
        onBackClick={onBackClick}
        isLoggedIn={isLoggedIn}
      />
      {children}
      <Footer />
    </div>
  );

export default Layout;
