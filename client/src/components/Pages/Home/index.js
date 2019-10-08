import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../common/Button';
import electrician from '../../../assets/electrician (1).png';
import './style.css';

const Home = () => {
  return (
    <section className="home-page">
      <div className="home-page__container">
        <div className="home-page__parentImg">
          <img
            src={electrician}
            alt="Logo"
            className="home-page__parentImg__img"
          />
        </div>
        <article className="home-page__article">
          <h1 className="home-page__head">Handyman</h1>
          <p className="home-page__pargraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </article>
        <section className="home-page__buttons">
          <Link to="/services" className="first-btn">
            <Button className="first-btn">Let&apos;s Start</Button>
          </Link>
          <Link to="/login" className="link">
            <Button className="second-btn">Login</Button>
          </Link>
          <Link to="/signup" className="link">
            <Button className="last-btn">Sign Up</Button>
          </Link>
        </section>
      </div>
      <span className="home-page__layer-one"></span>
      <span className="home-page__layer-tow"></span>
    </section>
  );
};

export default Home;
