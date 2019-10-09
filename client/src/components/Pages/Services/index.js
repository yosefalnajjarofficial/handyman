import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import SearchInput from '../../common/SearchInput';
import ServiceCard from '../../common/serviceCard';
import Loader from '../../common/Loader';

import servicePic from '../../utils/servicesPics';

class Services extends Component {
  state = {
    servicesData: [],
    resultAutoComplete: '',
  };

  isMount = false;

  cancel = null;

  async componentDidMount() {
    const { history } = this.props;
    this.isMount = true;
    try {
      const {
        data: { data },
      } = await axios.get('api/v1/services');
      if (this.isMount) this.setState({ servicesData: data });
    } catch (err) {
      history.push('/500');
    }
  }

  async componentWillUnmount() {
    this.isMount = false;
  }

  autoComplete = e => {
    const enteredLetters = e.target.value;
    const result = enteredLetters.toLowerCase();
    this.setState({ resultAutoComplete: result });
  };

  handleClick = id => {
    const { history } = this.props;
    history.push(`/service/${id}`);
  };

  render() {
    const { servicesData, resultAutoComplete } = this.state;
    return (
      <section className="layout">
        {!servicesData[0] && <Loader />}
        <SearchInput
          name="search"
          placeholder="Search"
          onChange={this.autoComplete}
        />
        <ul className="card-parent">
          {servicesData.map(element =>
            element.name.toLowerCase().startsWith(resultAutoComplete) ? (
              <ServiceCard
                onServiceClick={this.handleClick}
                serviceId={element.id}
                serviceName={element.name}
                serviceImage={servicePic(element.name)}
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Services;
