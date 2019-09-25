import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, buttonFunction, value }) => {
  return (
    <button className={className} onClick={buttonFunction} type="button">
      {value}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  buttonFunction: PropTypes.func.isRequired,
};

export default Button;
