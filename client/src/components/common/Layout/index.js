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
      <Header onBackClick={goBack} isAuth={isAuth} />
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
  isAuth: PropTypes.bool.isRequired,
};
export default Layout;
