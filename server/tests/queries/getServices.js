const test = require('tape');

const { getServices } = require('../../db/queries/getServices');

test('testing for getServices query database', async (t) => {
  const obj = await getServices();
  const actual = Object.keys(obj.rows[0]).length;
  t.equal(actual, 2, 'Number of Keys shoud be 2');
  t.end();
});

test.onFinish(() => process.exit(0));
