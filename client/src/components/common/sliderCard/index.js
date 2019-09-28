import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Star from '../Star';
import './style.css';

const SliderCard = ({
  onSliderCardClick,
  handymanName,
  handymanService,
  handymanBio,
  onMessageButtonClick,
  onHireButtonClick,
  rate,
}) => {
  const starNumber = Array(rate).fill(1);
  return (
    <div className="sliderCard" onClick={onSliderCardClick}>
      <div className="sliderCard-container">
        <img
          className="sliderCard-image"
          src="https://image.flaticon.com/icons/svg/307/307892.svg"
          alt="Slider Card for handyman details"
        />
      </div>
      <div className="sliderCard-content">
        <div className="sliderCard-info">
          <h1 className="sliderCard-title">{handymanName}</h1>
          <span className="sliderCard-service">{handymanService}</span>
          <p className="sliderCard-bio">{handymanBio}</p>
        </div>
        <div className="sliderCard-callToAction">
          <div>
            <div className="rating-container">
              {starNumber.map(() => (
                <Star />
              ))}
            </div>

            <Button
              className="sliderCard-btn sliderCard-message"
              onClick={onMessageButtonClick}
            >
              Message
            </Button>
            <Button
              className="sliderCard-btn sliderCard-hire"
              onClick={onHireButtonClick}
            >
              Hire
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

SliderCard.propTypes = {
  onSliderCardClick: PropTypes.func.isRequired,
  handymanName: PropTypes.string.isRequired,
  handymanService: PropTypes.string.isRequired,
  handymanBio: PropTypes.string.isRequired,
  onMessageButtonClick: PropTypes.func.isRequired,
  onHireButtonClick: PropTypes.func.isRequired,
  rate: PropTypes.number.isRequired,
};

export default SliderCard;
