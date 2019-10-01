import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const LabeldInput = ({
  autoFocus,
  label,
  type,
  placeHolder,
  name,
  value,
  onChange,
}) => {
  return (
    <label htmlFor={name} className="input-label">
      {label}
      <input
        autoFocus={autoFocus ? true : ''}
        id={name}
        type={type}
        className="input-filed"
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

LabeldInput.propTypes = {
  autoFocus: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LabeldInput;
