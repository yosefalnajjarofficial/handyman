import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Star from '../Star';
import './style.css';

const HandymanCard = ({
  imageSrc,
  imageAlt,
  handymanId,
  HandymanName,
  handymanService,
  handymanBio,
  messageHandler,
  onHireClick,
  onCardClick,
  rate,
}) => {
  const starsNo = Array(rate).fill();

  return (
    <div className="card">
      <div
        className="card__image-container"
        onClick={() => onCardClick(handymanId)}
      >
        <img
          className="card_image"
          src={
            'https://image.flaticon.com/icons/svg/307/307892.svg' || imageSrc
          }
          alt={imageAlt || 'handyman'}
        />
      </div>
      <div className="card__content">
        <div className="card__header" onClick={() => onCardClick(handymanId)}>
          <div>
            <h2 className="card--name">{HandymanName}</h2>
            <span className="card--service">{handymanService}</span>
          </div>
          <div className="card--stars">
            {starsNo.map(number => (
              <Star key={number} />
            ))}
          </div>
        </div>
        <p className="card--bio" onClick={() => onCardClick(handymanId)}>
          {handymanBio}
        </p>
        <div className="card__button-container">
          <Button className="hire--btn" onClick={() => onHireClick(handymanId)}>
            Hire
          </Button>
          <Button className="message--btn" onClick={messageHandler}>
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};
HandymanCard.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  HandymanName: PropTypes.string.isRequired,
  handymanService: PropTypes.string.isRequired,
  handymanBio: PropTypes.string.isRequired,
  hireHandler: PropTypes.func.isRequired,
  messageHandler: PropTypes.func.isRequired,
  rate: PropTypes.number.isRequired,
};

HandymanCard.defaultProps = {
  imageAlt: null,
  imageSrc: null,
};

export default HandymanCard;
