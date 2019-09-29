import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import ProfileCard from '../../common/ProfileCard';

class Profile extends React.Component {
  state = {
    profileData: {},
    statusCode: '',
    redirectHire: false,
  };

  async componentDidMount() {
    const { id } = this.props;
    const response = await axios.get(`/api/v1/profile/${id}`);
    this.setState({
      profileData: response.data.data,
      statusCode: response.data.statusCode,
    });
  }

  setRedirect = () => {
    this.setState({
      redirectHire: true,
    });
  };

  handleHire = () => {
    const { redirectHire } = this.state;
    if (redirectHire) {
      return <Redirect to="/hire" />;
    }
    return null;
  };

  render() {
    const { profileData, statusCode } = this.state;
    const {
      username,
      service,
      country,
      city,
      hour_rate,
      description,
    } = profileData;
    return (
      <React.Fragment>
        {this.handleHire()}
        <ProfileCard
          username={username}
          service={service}
          country={country}
          city={city}
          hourRate={hour_rate}
          bio={description}
          onClickMessage={undefined}
          onClickHire={this.setRedirect}
          rate={5}
        />
      </React.Fragment>
    );
  }
}

Profile.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Profile;
