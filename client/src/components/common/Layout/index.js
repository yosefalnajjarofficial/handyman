import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({
  history: { goBack },
  isAuth,
  children,
  location: { pathname },
}) =>
  pathname === '/' || pathname === '/login' || pathname === '/signup' ? (
    children
  ) : (
    <div>
      <Header
        onBackClick={goBack}
        isAuth={isAuth}
        home={pathname === '/services'}
      />
      {children}
      <Footer />
    </div>
  );
Layout.defaultProps = {
  isAuth: null,
};
Layout.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  isAuth: PropTypes.oneOf([true, false, null]),
};
export default Layout;
