import React from 'react';

import PropTypes from 'prop-types';
import Button from '../Button';
import './style.css';

const SliderCard = ({
  imageSrc,
  onSliderCardClick,
  handymanName,
  handymanService,
  handymanBio,
  buttonFunction,
}) => {
  return (
    <div className="sliderCard" onClick={onSliderCardClick}>
      <div className="sliderCard-container">
        <img
          className="sliderCard-image"
          src={imageSrc}
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
            <Button
              className="sliderCard-btn sliderCard-message"
              buttonFunction={buttonFunction}
            >
              Message
            </Button>
            <Button
              className="sliderCard-btn sliderCard-hire"
              buttonFunction={buttonFunction}
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
  imageSrc: PropTypes.string.isRequired,
  onSliderCardClick: PropTypes.func.isRequired,
  handymanName: PropTypes.string.isRequired,
  handymanService: PropTypes.string.isRequired,
  handymanBio: PropTypes.string.isRequired,
  buttonFunction: PropTypes.func.isRequired,
};

export default SliderCard;
