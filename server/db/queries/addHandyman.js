const connection = require('../config/connection');

exports.addHandyman = ({
  id,
  jobTitle,
  hourRate,
  description,
}) => {
  const sql = {
    text: 'INSERT INTO handyman (handyman_id, job_id, hour_rate, description) VALUES ($1, $2, $3, $4) returning *',
    values: [id, jobTitle, hourRate, description],
  };
  return connection.query(sql);
};
