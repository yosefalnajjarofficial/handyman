const jwt = require('jsonwebtoken');

exports.createToken = (payloads) => new Promise((resolve, reject) => {
  jwt.sign(payloads, process.env.SECRET, (err, token) => {
    if (err) reject(err);
    else resolve(token);
  });
});
