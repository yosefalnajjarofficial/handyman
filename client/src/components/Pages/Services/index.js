import React, { Component } from 'react';
import axios from 'axios';

import SearchInput from '../../common/SearchInput';
import ServiceCard from '../../common/serviceCard';

class Services extends Component {
  state = {
    servicesData: [],
    resultAutoComplete: '',
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

  autoComplete = e => {
    const enteredLetters = e.target.value;
    const result = enteredLetters.toLowerCase();
    this.setState({ resultAutoComplete: result });
    console.log(result);
  };

  render() {
    const { servicesData, resultAutoComplete } = this.state;
    return (
      <section>
        <SearchInput
          name="search"
          placeholder="Search"
          onChange={this.autoComplete}
        />

        <ul className="card-parent">
          {servicesData.map(element =>
            element.name.toLowerCase().startsWith(resultAutoComplete) ? (
              <ServiceCard
                serviceName={element.name}
                serviceImage="https://static.wixstatic.com/media/496ffb_8b6064c94518461aaee56a4a17408300.jpg"
                key={element.name}
              />
            ) : null
          )}
        </ul>
      </section>
    );
  }
}

export default Services;
