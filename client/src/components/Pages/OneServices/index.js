import React, { Component } from 'react';
import axios from 'axios';

import Layout from '../../common/Layout';
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
      const services = await axios.get(`/api/v1/service/${id}`);
      this.setState({ oneServicesData: services.data.data });
      if (!services.data.data[0]) {
        this.setState({ isExist: false });
      }
    } catch (err) {
      history.push('/500');
    }
  }

  handleClick = id => {
    const { history } = this.props;
    history.push(`/profile/${id}`);
  };

  handleHireClick = handymanId => {
    const { history } = this.props;
    history.push(`/hire`, { handymanId });
  };

  render() {
    const { oneServicesData, name, isExist } = this.state;
    return (
      <Layout>
        <section className="layout">
          {!oneServicesData[0] && isExist && <h3>...Loading</h3>}
          {!isExist && <h1>No handymans for this services at yet </h1>}
          {oneServicesData[0] && (
            <span>
              <SearchInput name="search" placeholder="Search" />
              <div className="top-rated-cards">
                {oneServicesData.map(element => (
                  <SliderCard
                    key={element}
                    handymanId={element.handyman_id}
                    handymanName={element.username}
                    handymanBio={element.description}
                    handymanService={element.name}
                    onSliderCardClick={this.handleClick}
                    onHireClick={this.handleHireClick}
                    rate={5}
                  />
                ))}
              </div>
              <div className="handyman-cards">
                {oneServicesData.map(element => (
                  <HandymanCard
                    key={element}
                    handymanId={element.handyman_id}
                    HandymanName={element.username}
                    handymanBio={element.description}
                    handymanService={element.name}
                    onCardClick={this.handleClick}
                    onHireClick={this.handleHireClick}
                    rate={3}
                  />
                ))}
              </div>
            </span>
          )}
        </section>
      </Layout>
    );
  }
}

export default Services;
