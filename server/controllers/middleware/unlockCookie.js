const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.unlockCookie = (req, res, next) => {
  jwt.verify(req.cookies.handyman, process.env.PRIVATEKEY, (err, decoded) => {
    if (err) {
      res.clearCookie('handyman');
      res.status(401).send({ error: 'Please login again' });
    } else {
      req.user = decoded;
      next();
    }
  });
};
