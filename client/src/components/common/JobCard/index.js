import React from 'react';
import PropTypes from 'prop-types';

import Star from '../Star';
import handymanImg from '../../../assets/handyman.png';
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
  rate,
}) => {
  const starNumber = Array(rate).fill(1);
  return (
    <section className="parent-card">
      <div className="card">
        <section className="card__img">
          <img className src={handymanImg} alt="handyman" />
        </section>

        <section className="card__header">
          <h3 className="card__header--username">{username}</h3>
          <div className="rating__container">
            {starNumber.map(() => (
              <Star />
            ))}
          </div>
        </section>

        <div className="card__body">
          <h4>
            <span>Description:</span> {description}
          </h4>
          <h4>
            <span>Time:</span> {deadLine}
          </h4>
          <h4>
            <span>price:</span> {price}$
          </h4>
          <h4>
            <span>Adress:</span>
            {street} / {buildingNumber} / {flatNumber}
          </h4>
          {message ? <h4>Message :{message}</h4> : null}
          <h4 className="card__status">
            <h4>
              <span>Status:</span>
            </h4>
            <h4 className={`status ${status}`}> {status}</h4>
          </h4>
        </div>
      </div>
    </section>
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
  rate: PropTypes.number.isRequired,
};
JobCard.defaultProps = {
  message: null,
};

export default JobCard;
