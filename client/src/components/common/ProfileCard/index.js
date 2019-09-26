import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import './style.css';

const ProfileCard = ({
  username,
  service,
  country,
  city,
  hourRate,
  bio,
  onClickMessage,
  onClickHire,
}) => {
  return (
    <div className="card">
      <div className="card__header">
        <div className="imageContainer">
          <img
            className="card__header--img"
            src="https://image.flaticon.com/icons/svg/307/307892.svg"
            alt={`${username} profile`}
          />
        </div>
        <div className="card__header--info">
          <h4 className="card_name">{username}</h4>
          <h5 className="card_service">{service}</h5>
          <h5 className="card_service">
            {country}, {city}
          </h5>
        </div>
      </div>
      <div className="card-btnContainer">
        <Button className="card-rate" buttonFunction={onClickHire}>
          rate
        </Button>
        <Button className="card-btn message" buttonFunction={onClickMessage}>
          Massege
        </Button>
        <Button className="card-btn hire" buttonFunction={onClickHire}>
          Hire
        </Button>
      </div>
      <div className="middle">
        <div className="middle-container">
          <span className="hour-rate">{hourRate}$/hr</span>
        </div>
      </div>
      <div className="bio-container">
        <h4>Bio: </h4>
        <p className="bio">{bio}</p>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  username: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  hourRate: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
  onClickMessage: PropTypes.func.isRequired,
  onClickHire: PropTypes.func.isRequired,
};

export default ProfileCard;
