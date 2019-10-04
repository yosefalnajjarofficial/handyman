import React from 'react';
import { Link } from 'react-router-dom';

import pageNotFound from '../../../assets/404.png';
import './style.css';

const NotFound = () => {
  return (
    <section className="layout">
      <img
        src={pageNotFound}
        alt="Page Not Found 404"
        className="notFound__img"
      />
      <Link to="/" className="error404__goHome">
        Return to Home Page
      </Link>
    </section>
  );
};

export default NotFound;
