import React from 'react';
import axios from 'axios';

import JobCard from '../../common/JobCard';

class JobPage extends React.Component {
  state = {
    jobsData: [],
    statusCode: '',
  };

  async componentDidMount() {
    const response = await axios.get('/api/v1/jobs');
    console.log(response.data.data);
    this.setState({
      jobsData: response.data.data,
      statusCode: response.data.statusCode,
    });
  }

  render() {
    // return <h1>hiiiiiiiiiiiiiiii</h1>;
    return this.state.jobsData.map(job => (
      <JobCard
        username={job.username}
        description={job.description}
        deadLine={job.dead_line}
        price={job.price}
        status={job.status}
        message={job.message}
        street={job.street}
        buildingNumber={job.building_number}
        flatNumber={job.flat_number}
        rate={5}
      />
    ));
  }
}

export default JobPage;
