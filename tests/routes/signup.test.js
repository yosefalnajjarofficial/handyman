const tape = require('tape');
const request = require('supertest');

const app = require('../../server/app');

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

tape.test('signup with a handyman fail', (t) => {
  const handyman = {
    username: 'fadi',
    password: '123456789',
    confirmPassword: '123456789',
    email: 'fadi1221212333@gmail.com',
    phone: 12121122,
    country: 'gaza',
    city: 'hhhhh',
    isHandyman: true,
  };
  request(app)
    .post('/api/v1/signup')
    .send(handyman)
    .expect('Content-Type', /json/)
    .expect(400)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.equals(Object.keys(res.body).length, 2, 'sohlud pass');
        t.end();
      }
    });
});


tape.test('signup with a handyman ', (t) => {
  const handyman = {
    username: 'fadi',
    password: '123456789',
    confirmPassword: '123456789',
    email: 'fadi1221212334@gmail.com',
    phone: 12121122,
    country: 'gaza',
    city: 'hhhhh',
    isHandyman: true,
    description: 'any description',
    hourRate: 5,
    jobTitle: 1,
  };
  request(app)
    .post('/api/v1/signup')
    .send(handyman)
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.equals(Object.keys(res.body.data).length, 10, 'sohlud pass');
        t.end();
      }
    });
});
