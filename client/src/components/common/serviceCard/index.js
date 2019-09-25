import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

const ServiceCard = ({ serviceName, onServiceClick }) => {
  return (
    <div role="button" className="card service-card" onClick={onServiceClick}>
      <div className="image-container">
        <img
          className="card-image"
          src="https://image.flaticon.com/icons/svg/307/307892.svg"
          alt={`${serviceName} card`}
        />
      </div>
      <div className="tilte-container">
        <h1 className="service-title">{serviceName}</h1>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  serviceName: PropTypes.string.isRequired,
  onServiceClick: PropTypes.func.isRequired,
};

export default ServiceCard;
