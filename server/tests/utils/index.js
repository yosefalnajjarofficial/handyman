const tape = require('tape');

const { hashPassowrd, comparePassword } = require('../../controllers/utils/password');

tape('Simple pass test', (t) => {
  t.equal(1, 1, 'one should equal one');
  t.end();
});

tape('type of algorithim used in hash passwords function', (t) => {
  hashPassowrd('mmm123')
    .then((hashed) => {
      t.equal(hashed.substring(1, 3), '2b', 'should be 2b');
      t.end();
    })
    .catch((err) => {
      t.equal(err, null, 'sholudn\'t be an error');
    });
});
