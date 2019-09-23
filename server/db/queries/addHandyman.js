const connection = require('../config/connection');

const addHandyman = ({
  id,
  jobTitle,
  hourRate,
  description,
}) => {
  const sql = {
    text: 'INSERT INTO handyman (handyman_id,job_title,hour_rate,description) VALUES ($1,$2,$3,$4) returning *',
    values: [id, jobTitle, hourRate, description],
  };
  return connection.query(sql);
};

module.exports = addHandyman;
