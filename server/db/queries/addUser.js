const connection = require('../config/connection');

exports.addUser = ({
  username,
  email,
  phone,
  password,
  country,
  city,
  isHandyman,
}) => {
  const sql = {
    text: 'INSERT INTO users (username,email,phone,password,country,city,is_handyman) VALUES ($1,$2,$3,$4,$5,$6,$7) returning *',
    values: [
      username,
      email,
      phone,
      password,
      country,
      city,
      isHandyman,
    ],
  };
  return connection.query(sql);
};
