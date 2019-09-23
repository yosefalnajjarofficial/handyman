const jwt = require('jsonwebtoken');

exports.unlockCookie = (req, res, next) => {
  jwt.verify(req.cookies.jwt, process.env.PRIVATEKEY, (err, unlockedCookie) => {
    if (err) {
      res.clearCookie('jwt');
      res.status(401).send({ error: 'unauthorized', statusCode: 401 });
    } else {
      req.user = unlockedCookie;
      next();
    }
  });
};
