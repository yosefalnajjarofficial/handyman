const { verfiyToken } = require('../utils/cookie');

exports.unlockCookie = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const unlockedCookie = await verfiyToken(req.cookies.jwt);
      req.user = unlockedCookie;
      next();
    } catch (e) {
      res.clearCookie('jwt');
      res.status(401).send({ error: 'unauthorized', statusCode: 401 });
    }
  } else {
    res.status(401).send({ error: 'unauthorized', statusCode: 401 });
  }
};
