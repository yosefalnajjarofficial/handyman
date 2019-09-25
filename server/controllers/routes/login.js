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
      throw new Error('email dosen\'t exsists');
    }
    console.log(password);
    console.log(user.password);
    const authed = await comparePassword(password, user.passowrd);
    if (authed) {
      res.cookie('jwt', await createToken({
        id: user.id,
        email: user.email,
        username: user.username,
        isHandyman: user.is_handyman,
      }));
    } else {
      throw new Error('incorrect password');
    }
  } catch (e) {
    if (e.name === 'validationError') {
      res.status(400).send({
        message: e.message,
        statusCode: 400,
      });
    }
    next(e);
  }
};
