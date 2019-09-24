const test = require('tape');
const supertest = require('supertest');

const app = require('../../app');
const dbBuild = require('../../db/config/build.js');
const insertFakeData = require('../../db/config/insertFakeData');

exports.getJob = test('testing for route /jobs at GET method', async (t) => {
  await dbBuild();
  await insertFakeData();
  supertest(app)
    .get('/api/v1/jobs')
    .set('Cookie', ['jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJmYWRpMTIzQGdtYWlsIiwidXNlcm5hbWUiOiJmYWRpIiwiaXNIYW5keW1hbiI6ZmFsc2UsImlhdCI6MTU2OTI2Nzg0OH0.wnVIwaHXQ6jpPmsx4FEnGgLRWanBINHvPpiaqBLA1YE'])
    .expect(200)
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        const jobObjectLength = Object.keys(res.body.data[0]).length;
        t.equal(jobObjectLength, 11, 'should be equal the length of object keys which in database');
        t.end();
      }
    });
});
