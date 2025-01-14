const test = require('tape');
const supertest = require('supertest');

const app = require('../../server/app');
const dbBuild = require('../../server/db/config/build');
const insertFakeData = require('../../server/db/config/insertFakeData');

test('Test for services route', async (t) => {
  await dbBuild();
  await insertFakeData();
  supertest(app)
    .get('/api/v1/services')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        const actual = Object.keys(res.body.data[0]).length;
        t.equal(actual, 2, 'Number of keys should be 2');
        t.end();
      }
    });
});

test.onFinish(() => process.exit(0));
