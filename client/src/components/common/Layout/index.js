import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({
  history: { goBack },
  isLoggedIn,
  children,
  location: { pathname },
}) =>
  pathname === '/' || pathname === '/login' || pathname === '/signup' ? (
    children
  ) : (
    <div>
      <Header onBackClick={goBack} isLoggedIn={isLoggedIn} />
      {children}
      <Footer />
    </div>
  );

Layout.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.objectOf({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.arrayOf().isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
export default Layout;
