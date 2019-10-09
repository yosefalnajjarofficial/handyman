const connection = require('../config/connection');

exports.postJob = ({
  clientId,
  handymanId,
  description,
  deadline,
  price,
  street,
  status,
  buildingNumber,
  flatNumber,
}) => {
  const sql = {
    text:
      'INSERT INTO jobs( client_id, handyman_id, description, deadline, price, street, status, building_number, flat_number ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *',
    values: [
      clientId,
      handymanId,
      description,
      deadline,
      price,
      street,
      status,
      buildingNumber,
      flatNumber,
    ],
  };

  return connection.query(sql);
};
