const tape = require('tape');
const request = require('supertest');
const app = require('../../server/app');

tape('login route', (t) => {
  const user = {
    email: 'skdrow@gmail.com',
    password: '123123123',
  };
  request(app)
    .post('/api/v1/login')
    .send(user)
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.equal(Object.keys(res.body).length, 2, 'should be a message');
        t.end();
      }
    });
});

tape('login route wrong email', (t) => {
  const user = {
    email: 'sk12drow@gmail.com',
    password: '123123123',
  };
  request(app)
    .post('/api/v1/login')
    .send(user)
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.equal(Object.keys(res.body).length, 2, 'should be a message');
        t.end();
      }
    });
});

tape('login route wrong password', (t) => {
  const user = {
    email: 'skdrow@gmail.com',
    password: '12123123123',
  };
  request(app)
    .post('/api/v1/login')
    .send(user)
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.equal(Object.keys(res.body).length, 2, 'should be a message');
        t.end();
      }
    });
});
