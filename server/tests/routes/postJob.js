const tape = require('tape');
const request = require('supertest');

const app = require('../../app');

tape('Test Hire route', async (t) => {
  const jobContract = {
    handymanId: 1,
    deadline: new Date(),
    price: 6,
    description: 'build a house',
    street: 'Tal Elhawa',
    status: 'pending',
    buildingNumber: '111',
    flatNumber: '222',
  };
  request(app)
    .post('/api/v1/hire')
    .send(jobContract)
    .set('Cookie', ['jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJmYWRpMTIzQGdtYWlsIiwidXNlcm5hbWUiOiJmYWRpIiwiaXNIYW5keW1hbiI6ZmFsc2UsImlhdCI6MTU2OTI2Nzg0OH0.wnVIwaHXQ6jpPmsx4FEnGgLRWanBINHvPpiaqBLA1YE'])
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.equals(Object.keys(res.body.data).length, 11, 'Keys number shuld be 11');
        t.end();
      }
    });
});

tape.onFinish(() => process.exit(0));
