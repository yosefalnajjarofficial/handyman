import React from 'react';
import { Link } from 'react-router-dom';

import error500 from '../../../assets/error500.png';

import './style.css';

const ServerError = () => {
  return (
    <div>
      <img src={error500} alt="Server Error 500" className="serverError__img" />
      <Link to="/" className="error500__goHome">
        Return to Home Page
      </Link>
    </div>
  );
};

export default ServerError;
