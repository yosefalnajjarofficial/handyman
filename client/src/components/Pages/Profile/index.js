import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';

import Layout from '../../common/Layout';
import ProfileCard from '../../common/ProfileCard';

class Profile extends React.Component {
  state = {
    profileData: {},
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history,
    } = this.props;
    try {
      const response = await axios.get(`/api/v1/profile/${id}`);
      if (response.data.data) {
        this.setState({
          profileData: response.data.data,
        });
      } else {
        NotificationManager.error('Error', 'User Not Found');
        history.push('/404');
      }
    } catch (e) {
      history.push('/500');
    }
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
      <Layout>
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
      </Layout>
    );
  }
}

Profile.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Profile;
