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
  handymanImg,
  buttonMessage,
  buttonHire,
}) => {
  return (
    <div className="card">
      <div className="card__header">
        <img
          className="card__header--img"
          src={handymanImg}
          alt={`${username} profile`}
        />
        <div className="card__header--info">
          <h3 className>{username}</h3>
          <h4>{service}</h4>
          <h4>
            {country}, {city}
          </h4>
          <h4>{hourRate}$/hr</h4>
          <div className="btn-container">
            <Button className="message" buttonFunction={buttonMessage}>
              {' '}
              massege{' '}
            </Button>
            <Button className="hire" buttonFunction={buttonHire}>
              {' '}
              hire{' '}
            </Button>
          </div>
        </div>
      </div>
      <h4 className="bio">{bio}</h4>
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
  handymanImg: PropTypes.string.isRequired,
  buttonMessage: PropTypes.func.isRequired,
  buttonHire: PropTypes.func.isRequired,
};

export default ProfileCard;
