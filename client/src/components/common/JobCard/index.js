import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import handymanImg from '../../../assets/handyman.png';

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
      <div className="card__header">
        <img className src={handymanImg} alt="handyman" />
        <h3 className="card__header--username">{username}</h3>
      </div>
      <div className="card__body">
        <h4>Description: {description} </h4>
        <h4>Time: {deadLine}</h4>
        <h4>price: {price}$</h4>
        <h4>
          Adress:{street} / {buildingNumber} / {flatNumber}
        </h4>
        {message ? <h4>Message :{message}</h4> : null}
        <h4 className="card__status">
          <h4>Status: </h4>
          <h4 className={`status ${status}`}> {status}</h4>
        </h4>
      </div>
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
