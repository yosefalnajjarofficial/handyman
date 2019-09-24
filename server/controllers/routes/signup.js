const { hashPassowrd } = require('../utils/password');
const addUser = require('../../db/queries/addUser');
const addHandyman = require('../../db/queries/addHandyman');
const { handymanSchema } = require('../validationSchemas/handymanSchema');
const { clientSchema } = require('../validationSchemas/clientSchema');
const { createToken } = require('../utils/cookie');

exports.signup = async (req, res, next) => {
  try {
    req.body.password = await hashPassowrd(req.body.password);

    if (req.body.isHandyman === 'false') await clientSchema.validate(req.body);
    else await handymanSchema.validate(req.body);

    let user = await addUser(req.body);
    delete user.rows[0].password;

    let handyman = '';
    if (req.body.isHandyman === 'true') {
      req.body.id = user.rows[0].id;
      handyman = await addHandyman(req.body);
      delete handyman.rows[0].handyman_id;
    }

    const token = await createToken({
      id: user.rows[0].id,
      email: user.rows[0].email,
      username: user.rows[0].username,
      isHandyman: user.rows[0].is_handyman,
    });
    res.cookie('jwt', token);

    if (handyman.rows) user = { ...user.rows[0], ...handyman.rows[0] };
    else user = user.rows[0];
    res.send({ data: user, statusCode: 200 });
  } catch (e) {
    if (e.name === 'ValidationError') {
      res.send({
        message: e.message,
        statusCode: 400,
      });
    } else next(e);
  }
};
