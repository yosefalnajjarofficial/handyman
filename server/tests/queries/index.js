const tape = require('tape');

const { getJobsQuery } = require('./getJobQuery');

tape('Simple pass test', (t) => {
  t.equal(1, 1, 'one should equal one');
  t.end();
});
