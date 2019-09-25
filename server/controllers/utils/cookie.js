const jwt = require('jsonwebtoken');

exports.createToken = (payloads) => new Promise((resolve, reject) => {
  jwt.sign(payloads, process.env.SECRET, (err, token) => {
    if (err) reject(err);
    else resolve(token);
  });
});

exports.verfiyToken = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) reject(err);
    else resolve(decoded);
  });
});
