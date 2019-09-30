import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ProfileCard from '../../common/ProfileCard';

class Profile extends React.Component {
  state = {
    profileData: {},
    statusCode: '',
  };

  async componentDidMount() {
    try {
      const { id } = this.props;
      const response = await axios.get(`/api/v1/profile/${id}`);
      if (response.data.statusCode === 200) {
        this.setState({
          profileData: response.data.data,
          statusCode: response.data.statusCode,
        });
      } else {
        this.setState({ statusCode: response.data.statusCode });
      }
    } catch (e) {
      this.setState({ statusCode: 500 });
    }
  }

  handleHire = () => {
    const { history } = this.props;
    history.push('/hire');
  };

  handleMessage = () => {
    return undefined;
  };

  render() {
    const { profileData, statusCode } = this.state;
    if (!statusCode) {
      return <h3>...Loading</h3>;
    }
    if (statusCode === 404) {
      return <h1>Page Not Found</h1>;
    }
    if (statusCode === 500) {
      return <h1>Server Error</h1>;
    }
    const {
      username,
      service,
      country,
      city,
      hour_rate,
      description,
    } = profileData;
    return (
      <ProfileCard
        username={username}
        service={service}
        country={country}
        city={city}
        hourRate={hour_rate}
        bio={description}
        onClickMessage={this.handleMessage}
        onClickHire={this.handleHire}
        rate={5}
      />
    );
  }
}

Profile.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Profile;
