import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const TextArea = ({ htmlFor, label, placeholder, rows, cols, name, id }) => {
  return (
    <label htmlFor={htmlFor} className="label">
      {label}
      <textarea
        className="textarea"
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        name={name}
        id={id}
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
  id: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default TextArea;
