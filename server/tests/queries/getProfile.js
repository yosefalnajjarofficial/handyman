const test = require('tape');

const dbBuild = require('../../db/config/build.js');
const insertFakeData = require('../../db/config/insertFakeData');
const { getProfile } = require('../../db/queries/getProfile');

exports.getProfile = test('testing for getProfile query database', async (t) => {
  try {
    await dbBuild();
    await insertFakeData();
    const profile = await getProfile(1);
    const expectedKeys = 8;
    t.deepEqual(Object.keys(profile.rows[0]).length, expectedKeys, 'should be the same of length');
    t.end();
  } catch (err) {
    t.error(err);
    t.end();
  }
});
test.onFinish(() => process.exit(0));
