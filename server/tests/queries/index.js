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
      addUser({
        username: 'mossa1',
        email: 'mossa700@gmail.com',
        phone: 123123123,
        password: 'sss',
        country: 'palestine',
        city: 'gaza',
        isHandyman: false,
      }).then((res) => {
        console.log(res.rows[0]);
        t.deepEqual(res.rows[0], {
          id: 1,
          username: 'mossa1',
          email: 'mossa700@gmail.com',
          phone: 123123123,
          password: 'sss',
          country: 'palestine',
          city: 'gaza',
          is_handyman: false,
        }, 'should pass');
        t.end();
      });
    })
    .catch((err) => console.log(err));
});
tape.onFinish(() => { process.exit(0); });
