const tape = require('tape');

const { hashPassowrd } = require('../../controllers/utils/password');

tape('Simple pass test', (t) => {
  t.equal(1, 1, 'one should equal one');
  t.end();
});

tape('type of algorithim used in hash passwords function', async (t) => {
  try {
    const hashed = await hashPassowrd('mmm123');

    t.equal(hashed.substring(1, 3), '2b', 'should be 2b');
    t.end();
  } catch (err) {
    t.equal(err, null, 'sholudn\'t be an error');
    t.end();
  }
});
