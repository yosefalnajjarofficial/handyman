const express = require('express');

const { postJob } = require('./routes/postJob');
const logout = require('../controllers/routes/getLogout');
const { unlockCookie } = require('./middleware/unlockCookie');

const router = express.Router();

router.use(unlockCookie);
router.post('/hire', postJob);
router.get('/logout', logout);

module.exports = router;
