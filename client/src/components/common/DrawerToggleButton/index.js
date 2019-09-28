import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const DrawerToggleButton = ({ onClick, className }) => {
  return (
    <section className={className} onClick={onClick}>
      <span className="btnSide__first"></span>
      <span className="btnSide__second"></span>
      <span className="btnSide__last"></span>
    </section>
  );
};

DrawerToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default DrawerToggleButton;
