const tape = require('tape');

const build = require('../../server/db/config/build');
const fakeData = require('../../server/db/config/insertFakeData');
const { addUser } = require('../../server/db/queries/addUser');
const { addHandyman } = require('../../server/db/queries/addHandyman');

tape('add a user to table users', async (t) => {
  await build();
  await fakeData();
  const user = await addUser({
    username: 'mossa1',
    email: 'mossa700@gmail.com',
    phone: 123123123,
    password: 'sss',
    country: 'palestine',
    city: 'gaza',
    isHandyman: false,
  });

  const handyman = await addHandyman({
    id: user.rows[0].id,
    jobTitle: 1,
    hourRate: 1,
    description: 'cooker',
  });
  t.equal(Object.keys(user.rows[0]).length, 8, 'should be 8');
  t.equal(Object.keys(handyman.rows[0]).length, 4, 'should be 4');
  t.end();
});
tape.onFinish(() => { process.exit(0); });
