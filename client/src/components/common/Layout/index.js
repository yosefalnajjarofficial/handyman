import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ onBackClick, isAuth, children, location: { pathname } }) =>
  pathname === '/' || pathname === '/login' || pathname === '/signup' ? (
    children
  ) : (
    <div>
      <Header onBackClick={onBackClick} isAuth={isAuth} />
      {children}
      <Footer />
    </div>
  );

export default Layout;
