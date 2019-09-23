const tape = require('tape');
const supertest = require('supertest');
const app = require('../../app');

tape('Test Hire route', (t) => {
  supertest(app)
    .post('/hire')
    .send({
      handymanId: 2222,
      deadline: new Date(),
      price: 6,
      description: 'build a house',
      street: 'Tal Elhawa',
      buildingNumber: '111',
      flatNumber: '222',
    })
    .set('Cookie', ['clientId=9999'])
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) t.error(err);
      else {
        t.ok(res);
        t.end();
      }
    });
});
