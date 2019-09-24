const express = require('express');

const { signup } = require('./routes/signup');

const logout = require('../controllers/routes/getLogout');

const router = express.Router();
router.post('/signup', signup);

const { getUserJobs } = require('./routes');
const { unlockCookie } = require('./middleware/unlockCookie');

router.use(unlockCookie);
router.get('/jobs', getUserJobs);
router.get('/logout', logout);

module.exports = router;
