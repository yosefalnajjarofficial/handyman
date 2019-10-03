import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ServiceCard = ({
  serviceId,
  serviceName,
  onServiceClick,
  serviceImage,
}) => {
  return (
    <div className="serviceCard" onClick={() => onServiceClick(serviceId)}>
      <div className="serviceCard-container">
        <img
          className="serviceCard-image"
          src={serviceImage}
          alt={`${serviceName} card`}
        />
      </div>
      <h1 className="serviceCard-title">{serviceName}</h1>
    </div>
  );
};

ServiceCard.propTypes = {
  serviceName: PropTypes.string.isRequired,
  onServiceClick: PropTypes.func.isRequired,
  serviceImage: PropTypes.string.isRequired,
};

export default ServiceCard;
