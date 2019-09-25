const test = require('tape');

const dbBuild = require('../../db/config/build.js');
const insertFakeData = require('../../db/config/insertFakeData');
const { getJobs } = require('../../db/queries/getJobs');

exports.getJobsQuery = test('testing for the length of jobs information from database', async (t) => {
  try {
    const expectedKeys = 11;
    await dbBuild();
    await insertFakeData();
    const jobs = await getJobs(2);
    t.deepEqual(Object.keys(jobs.rows[0]).length, expectedKeys, 'should be the same value which shows the number of keys');
    t.end();
  } catch (err) {
    t.error(err);
    t.end();
  }
});
test.onFinish(() => process.exit(0));
