import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import SearchInput from '../../common/SearchInput';
import ServiceCard from '../../common/serviceCard';

class Services extends Component {
  state = {
    servicesData: [],
    resultAutoComplete: '',
  };

  async componentDidMount() {
    const { history } = this.props;

    try {
      const services = await axios.get('api/v1/services');
      const result = services.data.data;
      this.setState({ servicesData: result });
    } catch (err) {
      history.push('/500');
    }
  }

  autoComplete = e => {
    const enteredLetters = e.target.value;
    const result = enteredLetters.toLowerCase();
    this.setState({ resultAutoComplete: result });
  };

  render() {
    const { servicesData, resultAutoComplete } = this.state;
    return (
      <section>
        {!servicesData[0] && <h3>...Loading</h3>}
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

Services.propTypes = {
  history: PropTypes.objectOf().isRequired,
};

export default Services;
