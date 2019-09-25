import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import handymanImg from '../../../assets/handyman.png';
import Button from '../Button';

const ProfileCard = ({ username, service, country, city, hourRate, bio }) => {
  return (
    <div className="card">
      <div className="card__header">
        <img className="card__header--img" src={handymanImg} alt="handyman" />
        <div className="card__header--info">
          <h3 className>{username}</h3>
          <h4>{service}</h4>
          <h4>
            {country}, {city}
          </h4>
          <h4>{hourRate}$/hr</h4>
          <div className="btn-container">
            <Button
              className="message"
              children="massege"
              buttonFunction={undefined}
            />
            <Button
              className="hire"
              children="hire"
              buttonFunction={undefined}
            />
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
};

export default ProfileCard;
