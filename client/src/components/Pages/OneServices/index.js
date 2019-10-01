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
    id: 1,
    name: 'building',
  };

  async componentDidMount() {
    const { id } = this.state;
    try {
      const services = await axios.get(`api/v1/service/${id}`);
      this.setState({ oneServicesData: services.data.data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { oneServicesData, name } = this.state;
    return (
      <section>
        <SearchInput name="search" placeholder="Search" />

        <div className="top-rated-cards">
          {oneServicesData.map(element =>
            element.name === name ? (
              <SliderCard
                key={element}
                handymanName={element.username}
                handymanBio={element.description}
                handymanService={element.name}
                rate={3}
              />
            ) : null
          )}
        </div>

        <div className="handyman-cards">
          {oneServicesData.map(element =>
            element.name === name ? (
              <HandymanCard
                key={element}
                HandymanName={element.username}
                handymanBio={element.description}
                handymanService={element.name}
                rate={3}
              />
            ) : null
          )}
        </div>
      </section>
    );
  }
}

export default Services;
