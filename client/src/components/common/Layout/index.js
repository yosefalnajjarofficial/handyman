import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({
  onBackClick,
  isLoggedIn,
  children,
  location: { pathname },
}) =>
  pathname === '/' || pathname === '/login' || pathname === '/signup' ? (
    children
  ) : (
    <div>
      <Header onBackClick={onBackClick} isLoggedIn={isLoggedIn} />
      {children}
      <Footer />
    </div>
  );

Layout.propTypes = {
  onBackClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Layout;
