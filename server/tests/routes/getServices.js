const test = require('tape');
const supertest = require('supertest');

const app = require('./../../app');
const dbBuild = require('../../db/config/build.js');
const insertFakeData = require('../../db/config/insertFakeData');

test('Status Code equal 200', async (t) => {
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
        const actual = !!(res.body.data.length);
        t.deepEqual(actual, true, 'Number of items should not equal zero');
        t.end();
      }
    });
});

test.onFinish(() => process.exit(0));
