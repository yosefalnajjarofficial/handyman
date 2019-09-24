const { hashPassowrd } = require('../utils/password');
const { addUser } = require('../../db/queries/addUser');
const { addHandyman } = require('../../db/queries/addHandyman');
const { handymanSchema } = require('../validationSchemas/handymanSchema');
const { clientSchema } = require('../validationSchemas/clientSchema');
const { createToken } = require('../utils/cookie');

exports.signup = async (req, res, next) => {
  try {
    if (req.body.isHandyman === 'false') await clientSchema.validate(req.body);
    else await handymanSchema.validate(req.body);

    req.body.password = await hashPassowrd(req.body.password);

    let user = (await addUser(req.body)).rows[0];
    delete user.password;

    let handyman = '';
    if (req.body.isHandyman === 'true') {
      req.body.id = user.id;
      handyman = (await addHandyman(req.body)).rows[0];
      delete handyman.handyman_id;
    }

    const token = await createToken({
      id: user.id,
      email: user.email,
      username: user.username,
      isHandyman: user.is_handyman,
    });
    res.cookie('jwt', token);

    if (handyman.rows) user = { ...user, ...handyman };

    res.send({ data: user, statusCode: 200 });
  } catch (e) {
    if (e.name === 'ValidationError' || e.code === '23505') { // dublicate key error code
      res.send({
        message: e.message,
        statusCode: 400,
      });
    } else {
      next(e);
    }
  }
};
