import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const SelectOption = ({ label, selectName, options, onChange }) => {
  return (
    <div className="select__container">
      <label htmlFor={selectName} className="select__label">
        {label}
        <select
          className="select__tag"
          id={selectName}
          name={selectName}
          onChange={onChange}
        >
          {options.map(option => {
            const { id, name } = option;
            return (
              <option className="select__option" key={id} value={id}>
                {name}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

SelectOption.propTypes = {
  label: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectOption;
