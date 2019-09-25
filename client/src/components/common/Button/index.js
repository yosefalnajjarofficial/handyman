import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Button = ({ className, buttonFunction, children }) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={buttonFunction}
      type="button"
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  buttonFunction: PropTypes.func.isRequired,
};

export default Button;
