import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const TextArea = ({
  label,
  placeholder,
  rows,
  cols,
  name,
  onChange,
  value,
}) => {
  return (
    <label htmlFor={name} className="label">
      {label}
      <textarea
        className="textarea"
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
      ></textarea>
    </label>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextArea;
