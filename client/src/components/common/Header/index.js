import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Header = ({ pageName, onPreviousClick, onDrawerClick }) => {
  return (
    <nav className="main-nav">
      <i className="fas fa-arrow-left" onClick={onPreviousClick}></i>
      <h2 className="main-nav__heading">{pageName}</h2>
      <i className="fas fa-bars" onClick={onDrawerClick}></i>
    </nav>
  );
};

Header.propTypes = {
  pageName: PropTypes.string.isRequired,
  onPreviousClick: PropTypes.func.isRequired,
  onDrawerClick: PropTypes.func.isRequired,
};

export default Header;
