const tape = require('tape');
const build = require('../../db/config/build');
const addUser = require('../../db/queries/addUser');

tape('Simple pass test', (t) => {
  t.equal(1, 1, 'one should equal one');
  t.end();
});

tape('add a user to table users', (t) => {
  build()
    .then((res) => {
      addUser('');
    })
    .catch((err) => console.log(err));
});
