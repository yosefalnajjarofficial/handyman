import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import SearchInput from '../../common/SearchInput';
import HandymanCard from '../../common/HandymanCard';
import SliderCard from '../../common/sliderCard';

import './style.css';

class Services extends Component {
  state = {
    oneServicesData: [],
    redirect: false,
  };

  async componentDidMount() {
    try {
      const services = await axios.get(`api/v1/services`);
      const result = services.data.data;
      this.setState({ oneServicesData: result });
    } catch (err) {
      console.log(err);
    }
  }

  setRedirect = () => {
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return null;
  };

  render() {
    const { oneServicesData } = this.state;
    return (
      <section>
        {this.renderRedirect()}
        <SearchInput name="search" placeholder="Search" />
        <ul className="card-parent">
          {oneServicesData.map(element => (
            <span>
              <HandymanCard />
              <SliderCard />
            </span>
          ))}
        </ul>
      </section>
    );
  }
}

export default Services;
