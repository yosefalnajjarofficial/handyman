import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const JobCard = props => {
  const { description, dead_line, price, status, message } = props;
  return (
    <React.Fragment>
      <h3></h3>
      <h4>Description: </h4>
      <h4>Time:</h4>
      <h4>price:</h4>
      <h4>Adress:</h4>
      <h4>Message:</h4>
      <h4>Status:</h4>
    </React.Fragment>
  );
};
