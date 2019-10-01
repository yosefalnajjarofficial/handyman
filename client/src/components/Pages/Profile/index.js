import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';

import ProfileCard from '../../common/ProfileCard';

class Profile extends React.Component {
  state = {
    profileData: {},
  };

  async componentDidMount() {
    const { id, history } = this.props;
    try {
      const response = await axios.get(`/api/v1/profile/${id}`);
      if (response.data.data) {
        this.setState({
          profileData: response.data.data,
        });
      } else {
        NotificationManager.error('Error', 'Page Not Found');
        history.push('/404');
      }
    } catch (e) {
      history.push('/500');
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
    const { profileData } = this.state;
    if (!profileData.username) {
      return <h3>...Loading</h3>;
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
