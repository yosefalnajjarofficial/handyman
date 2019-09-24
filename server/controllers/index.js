const express = require('express');

const router = express.Router();

const { unlockCookie } = require('./middleware/unlockCookie');
const {
  profile, logout, userJobs, getServices,
} = require('./routes');

router.get('/services', getServices);
router.use(unlockCookie);
router.get('/profile/:id', profile);
router.get('/jobs', userJobs);
router.get('/logout', logout);

module.exports = router;
