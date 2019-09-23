const test = require('tape');

const dbBuild = require('../../db/config/build.js');
const insertFakeData = require('../../db/config/insertFakeData');
const { getJobs } = require('../../db/queries/getJobs');

exports.getJobsQuery = test('testing for the length of jobs information from database', (t) => {
  const expected = 11;
  dbBuild()
    .then(() => insertFakeData())
    .then(() => getJobs(2))
    .then((jobs) => t.deepEqual(Object.keys(jobs.rows[0]).length, expected, 'should be the same value which shows the number of keys'))
    .then(() => t.end());
});
