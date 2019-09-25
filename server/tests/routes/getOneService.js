const test = require('tape');
const supertest = require('supertest');

const app = require('../../app');
const dbBuild = require('../../db/config/build.js');
const insertFakeData = require('../../db/config/insertFakeData');

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
        t.equal(Object.keys(res.body.data[0]).length, 5, 'should be equal the number of keys');
        t.end();
      }
    });
});
