const { comparePassword } = require('../utils/password');
const { loginSchema } = require('../validationSchemas/loginSchema');
const { getUserByEmail } = require('../../db/queries/getUserByEmail');
const { createToken } = require('../utils/cookie');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    await loginSchema.validate(req.body);
    const user = (await getUserByEmail(email)).rows[0];
    if (!user) {
      throw new Error('incorrect username or password');
    }

    const authed = await comparePassword(password, user.password);
    if (authed) {
      res.cookie('jwt', await createToken({
        id: user.id,
        email: user.email,
        username: user.username,
        isHandyman: user.is_handyman,
      }));
      res.send({ message: 'login successfuly', statusCode: 200 });
    } else {
      throw new Error('incorrect username or password');
    }
  } catch (e) {
    if (e.name === 'validationError' || e.message === 'incorrect username or password') {
      res.status(400).send({
        message: e.message,
        statusCode: 400,
      });
    } else {
      next(e);
    }
  }
};
