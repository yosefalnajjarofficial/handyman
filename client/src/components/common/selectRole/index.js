import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const SelectRole = ({ label, options }) => {
  return (
    <div className="selectRole">
      <label htmlFor="role" className="selectRole__label">
        {label}
        <select className="selectRole__select" id="role" name="isHandyman">
          {options.map(option => (
            <option
              className="selectRole__option"
              key={option.id}
              value={option.id}
            >
              {option.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

SelectRole.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default SelectRole;
