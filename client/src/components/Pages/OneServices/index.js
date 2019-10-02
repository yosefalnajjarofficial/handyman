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
    name: '',
    isExist: true,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history,
    } = this.props;

    try {
      const services = await axios.get(`api/v1/service/${id}`);
      this.setState({ oneServicesData: services.data.data });
      if (!services.data.data[0]) {
        this.setState({ isExist: false });
      }
    } catch (err) {
      history.push('/500');
    }
  }

  render() {
    const { oneServicesData, name, isExist } = this.state;
    return (
      <section>
        {!oneServicesData[0] && isExist && <h3>...Loading</h3>}
        {!isExist && <h1>No handymans for this services at yet </h1>}
        {oneServicesData[0] && (
          <span>
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
                    />
                  </Link>
                ) : null
              )}
            </div>
            <div className="handyman-cards">
              {oneServicesData.map(element =>
                element.name === name ? (
                  <Link
                    to={`profile/${element.handyman_id}`}
                    className="card-link"
                  >
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
          </span>
        )}
      </section>
    );
  }
}

export default Services;
