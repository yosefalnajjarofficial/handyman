const tape = require('tape');
const request = require('supertest');
const app = require('../../app');

tape.test('signup with a client', (t) => {
  const user = {
    username: 'fadi',
    password: '123456789',
    confirmPassword: '123456789',
    email: 'fadi1221212333@gmail.com',
    phone: 12121122,
    country: 'gaza',
    city: 'hhhhh',
    isHandyman: false,
  };
  request(app)
    .post('/api/v1/signup')
    .send(user)
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.equals(Object.keys(res.body.data).length, 7, 'sohlud pass');
        t.end();
      }
    });
});
