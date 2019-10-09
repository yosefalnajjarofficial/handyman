const tape = require('tape');

const build = require('../../server/db/config/build');
const insertFakeData = require('../../server/db/config/insertFakeData');
const { getUserByEmail } = require('../../server/db/queries/getUserByEmail');

tape('search user by email', async (t) => {
  try {
    await build();
    await insertFakeData();
    const result = await getUserByEmail('skdrow@gmail.com');
    t.equal(Object.keys(result.rows[0]).length, 5, 'should be 5 fields');
    t.end();
  } catch (e) {
    t.equal(e, null, 'error should be null');
    t.end();
  }
});
tape.onFinish(() => process.exit(0));
