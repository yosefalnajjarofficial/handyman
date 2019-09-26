import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import image from '../../../assets/handyman.png';
import './style.css';

const HandymanCard = ({
  imageSrc,
  imageAlt,
  HandymanName,
  handymanService,
  handymanBio,
  messageHandler,
  hireHandler,
}) => {
  return (
    <div className="card">
      <div className="card__image-container">
        <img src={image || imageSrc} alt={imageAlt || 'handyman'} />
      </div>
      <div className="card__content">
        <h2 className="card--name">{HandymanName}</h2>
        <p classsName="card-service">{handymanService}</p>
        <p className="card--bio">{handymanBio}</p>
        <div className="card__button-container"></div>
        <Button className="message" butttonFunction={messageHandler}>
          Message
        </Button>
        <Button className="hire" butttonFunction={hireHandler}>
          Hire
        </Button>
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
};

HandymanCard.defaultProps = {
  imageAlt: null,
  imageSrc: null,
};

export default HandymanCard;
