import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../common/Button';
import electrician from '../../../assets/electrician (1).png';
import './style.css';

const Home = () => {
  return (
    <section className="home-page">
      <div className="home-page__container">
        <div className="home-page__image">
          <img src={electrician} alt="Logo" />
        </div>

        <article className="home-page__article">
          <h1 className="home-page__head">Handyman</h1>
          <p className="home-page__pargraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </article>

        <section className="home-page__buttons">
          <Link to="/">
            <Button className="first-btn" children="Let's Start" />
          </Link>
          <Link to="/login">
            <Button className="second-btn" children="Login" />
          </Link>
          <Link to="/signup">
            <Button className="last-btn" children="Sign Up" />
          </Link>
        </section>
      </div>
      <span className="home-page__layer-one"></span>
      <span className="home-page__layer-tow"></span>
    </section>
  );
};

export default Home;
