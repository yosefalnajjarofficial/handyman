import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

// typo
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
        // eslint err
        autoFocus={autoFocus ? true : ''}
        id={name}
        type={type}
        className="input-filed"
        placeholder={
          placeHolder // why
        }
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

LabeldInput.propTypes = {
  autoFocus: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

LabeldInput.defaultProps = {
  autoFocus: undefined,
};
export default LabeldInput;
