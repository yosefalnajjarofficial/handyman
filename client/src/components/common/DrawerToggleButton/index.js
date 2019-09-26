import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const DrawerToggleButton = ({ clicked, className }) => {
  return (
    <article className={className} onClick={clicked}>
      <span className="first"></span>
      <span className="second"></span>
      <span className="last"></span>
    </article>
  );
};

DrawerToggleButton.propTypes = { clicked: PropTypes.func.isRequired };

export default DrawerToggleButton;
