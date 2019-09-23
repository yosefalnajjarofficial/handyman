const tape = require('tape');
const dbBuild = require('../../db/config/build');
const insertFakeData = require('../../db/config/insertFakeData');
const { postJob } = require('../../db/queries/postJob');

tape('test adding the job contract', async (t) => {
  const fakeData = {
    clientId: 2,
    handymanId: 1,
    deadline: new Date(),
    price: 6,
    description: 'build a house',
    street: 'Tal Elhawa',
    status: 'pending',
    buildingNumber: '111',
    flatNumber: '222',
  };
  const expected = 2;
  try {
    await dbBuild();
    await insertFakeData();
    const result = await postJob(fakeData);
    t.equals(result.rows[0].client_id, expected, 'client id should be 2');
    t.end();
  } catch (err) {
    t.error(err);
    t.end();
  }
});

tape.onFinish(() => process.exit(0));
