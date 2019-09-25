import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const JobCard = ({
  username,
  description,
  deadLine,
  price,
  status,
  message,
  street,
  buildingNumber,
  flatNumber,
}) => {
  return (
    <div className="card">
      <h3 className="card__username">{username}</h3>
      <h4 className="card__body">Description: {description} </h4>
      <h4 className="card__body">Time: {deadLine}</h4>
      <h4 className="card__body">price: {price}$</h4>
      <h4 className="card__body">
        Adress:{street} / {buildingNumber} / {flatNumber}
      </h4>
      {message ? <h4 className="card__body">Message :{message}</h4> : ''}
      <h4 className="card__status">
        <h4>Status: </h4>
        <h4 className={status}> {status}</h4>
      </h4>
    </div>
  );
};

JobCard.propTypes = {
  username: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deadLine: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  message: PropTypes.string,
  street: PropTypes.string.isRequired,
  buildingNumber: PropTypes.number.isRequired,
  flatNumber: PropTypes.string.isRequired,
};
JobCard.defaultProps = {
  message: null,
};

export default JobCard;
