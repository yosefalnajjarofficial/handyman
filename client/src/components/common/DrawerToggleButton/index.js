import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const DrawerToggleButton = ({ onClick, className }) => {
  return (
    <article className={className} onClick={onClick}>
      <span className="first"></span>
      <span className="second"></span>
      <span className="last"></span>
    </article>
  );
};

DrawerToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default DrawerToggleButton;
