const test = require('tape');
const supertest = require('supertest');

const app = require('../../server/app');
const dbBuild = require('../../server/db/config/build');
const insertFakeData = require('../../server/db/config/insertFakeData');

test('testing for route /profile at GET method', async (t) => {
  await dbBuild();
  await insertFakeData();
  supertest(app)
    .get('/api/v1/profile/1')
    .expect(200)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        const expectedKeys = 8;
        t.deepEqual(Object.keys(res.body.data).length, expectedKeys, 'should be the same of length');
        t.end();
      }
    });
});
