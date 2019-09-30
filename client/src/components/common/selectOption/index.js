import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const selectOption = ({ label, selectName, options }) => {
  return (
    <div className="select__container">
      <label htmlFor={selectName} className="select__label">
        {label}
        <select className="select__tag" id={selectName} name={selectName}>
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

selectOption.propTypes = {
  label: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default selectOption;
