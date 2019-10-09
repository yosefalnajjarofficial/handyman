const test = require('tape');
const supertest = require('supertest');

const app = require('../../server/app');
const dbBuild = require('../../server/db/config/build');
const insertFakeData = require('../../server/db/config/insertFakeData');

test('test get handyman by service-id | route', async (t) => {
  await dbBuild();
  await insertFakeData();
  supertest(app)
    .get('/api/v1/service/1')
    .expect(200)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.equal(Object.keys(res.body.data[0]).length, 6, 'should be equal the number of keys');
        t.end();
      }
    });
});
