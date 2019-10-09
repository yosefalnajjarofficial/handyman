const test = require('tape');

const { getServices } = require('../../server/db/queries/getServices');

test('testing for getServices query database', async (t) => {
  const services = await getServices();
  const actual = Object.keys(services.rows[0]).length;
  t.equal(actual, 2, 'Number of Keys shoud be 2');
  t.end();
});

test.onFinish(() => process.exit(0));
