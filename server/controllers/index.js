const express = require('express');

const { unlockCookie } = require('./middleware/unlockCookie');
const {
  profile, logout, userJobs, postJob,
} = require('./routes');

const router = express.Router();

router.use(unlockCookie);
router.post('/hire', postJob);
router.get('/jobs', userJobs);
router.get('/profile/:id', profile);
router.get('/logout', logout);

module.exports = router;
