import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const DrawerToggleButton = ({ onClick, clicked }) => {
  return (
    <section
      className={clicked ? 'btnSide parent' : 'btnSide'}
      onClick={onClick}
    >
      <span className="btnSide__first"></span>
      <span className="btnSide__second"></span>
      <span className="btnSide__last"></span>
    </section>
  );
};

DrawerToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  clicked: PropTypes.bool.isRequired,
};

export default DrawerToggleButton;
