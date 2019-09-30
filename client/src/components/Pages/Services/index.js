import React, { Component } from 'react';
import axios from 'axios';

import SearchInput from '../../common/SearchInput';
import ServiceCard from '../../common/serviceCard';
import './style.css';

class Services extends Component {
  state = {
    servicesData: [],
  };

  async componentDidMount() {
    try {
      const services = await axios.get('api/v1/services');
      const result = services.data.data;
      this.setState({ servicesData: result });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { servicesData } = this.state;
    return (
      <section>
        <SearchInput name="search" placeholder="Search" />
        <ul className="card-parent">
          {servicesData.map(element => (
            <ServiceCard
              serviceName={element.name}
              serviceImage="https://static.wixstatic.com/media/496ffb_8b6064c94518461aaee56a4a17408300.jpg"
              key={element.name}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default Services;
