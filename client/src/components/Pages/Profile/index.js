import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';

import ProfileCard from '../../common/ProfileCard';
import Loader from '../../common/Loader';

class Profile extends React.Component {
  state = {
    profileData: {},
  };

  isMount = false;

  async componentDidMount() {
    this.isMount = true;
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    try {
      const response = await axios.get(`/api/v1/profile/${id}`);
      if (response.data.data && this.isMount) {
        this.setState({
          profileData: response.data.data,
        });
      } else {
        NotificationManager.error('Error', 'User Not Found');
        push('/404');
      }
    } catch (e) {
      push('/500');
    }
  }

  componentWillUnmount() {
    this.isMount = false;
  }

  handleHire = () => {
    const { history } = this.props;
    history.push('/hire', { handymanId: 1 });
  };

  handleMessage = () => {
    return undefined;
  };

  render() {
    const { profileData } = this.state;
    if (!profileData.username) {
      return <Loader />;
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
      <div className="layout">
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
      </div>
    );
  }
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;
