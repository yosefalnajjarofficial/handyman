import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const LabeldInput = ({ label, type, placeHolder, name, onChange, value }) => {
  return (
    <label htmlFor={name} className="input-label">
      {label}
      <input
        id={name}
        type={type}
        className="input-filed"
        placeholder={placeHolder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

LabeldInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default LabeldInput;
