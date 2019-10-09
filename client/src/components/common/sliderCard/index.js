import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Star from '../Star';
import './style.css';

const SliderCard = ({
  onSliderCardClick,
  handymanId,
  handymanName,
  handymanService,
  handymanBio,
  onMessageButtonClick,
  onHireClick,
  rate,
}) => {
  const starNumber = Array(rate).fill(1);
  return (
    <div className="sliderCard">
      <div
        role="button"
        className="sliderCard-container"
        onClick={() => onSliderCardClick(handymanId)}
      >
        <img
          className="sliderCard-image"
          src="https://image.flaticon.com/icons/svg/307/307892.svg"
          alt="Slider Card for handyman details"
        />
      </div>
      <div className="sliderCard-content">
        <div
          role="button"
          className="sliderCard-info"
          onClick={() => onSliderCardClick(handymanId)}
        >
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
              onClick={() => onHireClick(handymanId)}
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
  onHireClick: PropTypes.func.isRequired,
  rate: PropTypes.number.isRequired,
};

export default SliderCard;
