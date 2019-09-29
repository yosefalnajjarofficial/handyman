import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const selectOption = ({ htmlFor, label, selectName, options }) => {
  const { id, name } = options;
  return (
    <div className="select__container">
      <label htmlFor={htmlFor} className="select__label">
        {label}
        <select className="select__tag" id={htmlFor} name={selectName}>
          {options.map(option => (
            <option className="select__option" key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

selectOption.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default selectOption;
