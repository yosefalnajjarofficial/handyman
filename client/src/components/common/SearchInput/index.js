import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const SearchInput = ({ onChange, placeholder, name }) => {
  return (
    <form className="searchForm">
      <input
        type="search"
        name={name}
        className="search-input"
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
      />
      <i className="fas fa-search search-btn"></i>
    </form>
  );
};

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SearchInput;
