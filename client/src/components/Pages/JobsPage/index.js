import React from 'react';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import PropTypes from 'prop-types';

import Loader from '../../common/Loader';
import JobCard from '../../common/JobCard';
import './style.css';

class JobPage extends React.Component {
  state = {
    jobsData: [],
    exsitJob: true,
  };

  async componentDidMount() {
    const { history } = this.props;
    try {
      const response = await axios.get('/api/v1/jobs');
      if (response.data.data[0]) {
        this.setState({
          jobsData: response.data.data,
        });
      } else {
        NotificationManager.info('There is No Jobs');
        this.setState({ exsitJob: false });
      }
    } catch (err) {
      history.push('/500');
    }
  }

  render() {
    const { jobsData, exsitJob } = this.state;
    return (
      <div className="layout">
        {!jobsData[0] && exsitJob && <Loader />}
        {!exsitJob && <h1 className="noJobs">No Jobs</h1>}
        {jobsData[0] &&
          jobsData.map(job => {
            const {
              id,
              username,
              description,
              deadline,
              price,
              status,
              message,
              street,
              building_number: buildingNumber,
              flat_number: flatNumber,
            } = job;
            return (
              <JobCard
                username={username}
                description={description}
                deadLine={deadline}
                price={price}
                status={status}
                message={message}
                street={street}
                buildingNumber={buildingNumber}
                flatNumber={flatNumber}
                rate={5}
                key={id}
              />
            );
          })}
      </div>
    );
  }
}
JobPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default JobPage;
