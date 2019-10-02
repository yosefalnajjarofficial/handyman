import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import SearchInput from '../../common/SearchInput';
import HandymanCard from '../../common/HandymanCard';
import SliderCard from '../../common/sliderCard';

import './style.css';

class Services extends Component {
  state = {
    oneServicesData: [],
    name: 'building',
  };

  async componentDidMount() {
    try {
      const services = await axios.get(`api/v1/service/1`);
      this.setState({ oneServicesData: services.data.data });
    } catch (err) {
      console.log(err);
    }
  }

  clgData = () => {
    const { oneServicesData } = this.state;
    console.log(oneServicesData);
  };

  render() {
    const { oneServicesData, name } = this.state;
    return (
      <section>
        <SearchInput name="search" placeholder="Search" />

        <div className="top-rated-cards">
          {oneServicesData.map(element =>
            element.name === name ? (
              <Link
                to={`profile/${element.handyman_id}`}
                className="topRated-link"
              >
                <SliderCard
                  key={element}
                  handymanName={element.username}
                  handymanBio={element.description}
                  handymanService={element.name}
                  rate={3}
                  onSliderCardClick={this.clgData}
                />
              </Link>
            ) : null
          )}
        </div>

        <div className="handyman-cards">
          {oneServicesData.map(element =>
            element.name === name ? (
              <Link to={`profile/${element.handyman_id}`} className="card-link">
                <HandymanCard
                  key={element}
                  HandymanName={element.username}
                  handymanBio={element.description}
                  handymanService={element.name}
                  rate={3}
                />
              </Link>
            ) : null
          )}
        </div>
      </section>
    );
  }
}

export default Services;
