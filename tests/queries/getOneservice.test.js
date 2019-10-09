const test = require('tape');

const dbBuild = require('../../server/db/config/build');
const insertFakeData = require('../../server/db/config/insertFakeData');
const { getOneService } = require('../../server/db/queries/getOneService');

test('testing for oneService query', async (t) => {
  try {
    await dbBuild();
    await insertFakeData();
    const oneService = await getOneService(1);
    t.equal(Object.keys(oneService.rows[0]).length, 6, 'should be equal 6');
    t.end();
  } catch (err) {
    t.error(err);
    t.end();
  }
});
