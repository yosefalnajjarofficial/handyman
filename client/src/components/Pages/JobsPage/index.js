import React from 'react';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';

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
    if (!jobsData[0] && exsitJob) {
      return <h3>...Loading</h3>;
    }
    if (!exsitJob) {
      return <h1 className="noJobs">No Jobs</h1>;
    }
    return jobsData.map(job => {
      const {
        id,
        username,
        description,
        dead_line,
        price,
        status,
        message,
        street,
        building_number,
        flat_number,
      } = job;
      return (
        <JobCard
          username={username}
          description={description}
          deadLine={dead_line}
          price={price}
          status={status}
          message={message}
          street={street}
          buildingNumber={building_number}
          flatNumber={flat_number}
          rate={5}
          key={id}
        />
      );
    });
  }
}

export default JobPage;
