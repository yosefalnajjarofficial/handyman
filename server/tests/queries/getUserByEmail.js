const tape = require('tape');

const build = require('../../db/config/build');

const insertFakeData = require('../../db/config/insertFakeData');

const getUserByEmail = require('../../db/queries/getUserByEmail');

tape('search user by email', async (t) => {
  try {
    await build();
    await insertFakeData();
    const result = await getUserByEmail('mossa123@gmail.com');
    t.equals(result.rows[0].length, 5, 'should be 5 fields');
    t.end();
  } catch (e) {
    t.equal(e, null, 'error should be null');
    t.end();
  }
});
tape.onFinish(() => process.exit(0));
