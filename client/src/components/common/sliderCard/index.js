import React from 'react';

// import Button from '../button';
import './style.css';

const SliderCard = ({
  imageSrc,
  onSliderCardClick,
  handymanName,
  handymanService,
  handymanBio,
}) => {
  return (
    <div className="slider-card" onClick={onSliderCardClick}>
      <div className="image-container">
        <img
          className="handyman-image"
          src={imageSrc}
          alt="Slider Card for handyman details"
        />
      </div>
      <div className="card-content">
        <div className="card-info">
          <h1 className="card-title">{handymanName}</h1>
          <span className="card-handyman-service">{handymanService}</span>
          <p className="card-bio">{handymanBio}</p>
        </div>
        <div className="call-to-action">
          <div>
            <button className="message">Message</button>
            <button>Hire</button>
          </div>
          {/* <Button />
          <Button /> */}
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
