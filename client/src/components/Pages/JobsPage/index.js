import React from 'react';
import axios from 'axios';

import JobCard from '../../common/JobCard';

class JobPage extends React.Component {
  state = {
    jobsData: [],
  };

  async componentDidMount() {
    const response = await axios.get('/api/v1/jobs');
    this.setState({
      jobsData: response.data.data,
    });
  }

  render() {
    const { jobsData } = this.state;
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
