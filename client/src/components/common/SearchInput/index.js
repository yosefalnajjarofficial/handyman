import React from 'react';
import Button from '../Button';

import './style.css';

const test = () => {
  console.log(true);
  return true;
};

const SerchInput = () => {
  return (
    <form className="form">
      <input
        type="search"
        name="search"
        className="search-input"
        placeholder="Search"
      />
      <Button className="search-btn" buttonFunction={test}>
        <i className="fas fa-search"></i>
      </Button>
    </form>
  );
};

export default SerchInput;
