const jwt = require('jsonwebtoken');

exports.unlockCookie = (req, res, next) => {
  if (req.cookies.jwt) {
    jwt.verify(req.cookies.jwt, process.env.SECRET, (err, unlockedCookie) => {
      if (err) {
        res.clearCookie('jwt');
        res.status(401).send({ error: 'unauthorized', statusCode: 401 });
      } else {
        req.user = unlockedCookie;
        next();
      }
    });
  } else {
    res.status(401).send({ error: 'unauthorized', statusCode: 401 });
  }
};
