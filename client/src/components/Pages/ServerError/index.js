import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../common/Layout';
import error500 from '../../../assets/error500.png';
import './style.css';

const ServerError = () => {
  return (
    <Layout>
      <section className="layout">
        <img
          src={error500}
          alt="Internal Server Error 500"
          className="serverError__img"
        />
        <Link to="/" className="error500__goHome">
          Return to Home Page
        </Link>
      </section>
    </Layout>
  );
};

export default ServerError;
