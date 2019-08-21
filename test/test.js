const test = require('tape');
const supertest = require('supertest');
const app = require('../src/app');
const { dbBuild } = require('../src/database/config/build');
const { getData } = require('../src/database/quieres/getData');

// Test for Database
test('test getData query', (t) => {
  dbBuild()
    .then(() => getData())
    .then((result) => {
      const expected = {
        id: 1,
        name: 'abdallah',
        address: 'gaza',
        image: 'image',
        rate: 2,
        user_email: 'ra@gmail.com',
      };
      t.deepEqual(result[0], expected, 'should be the same result');
      t.end();
    })
    .catch((err) => {
      t.error(err);
      t.end();
    });
});

// Test for Routes
test('test for home route', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        const actual = res.text.includes('Test your taste © 2019 All Rights Reserved');
        t.equal(actual, true, 'must be true');
        t.end();
      }
    });
});

test('test for 404 error route', (t) => {
  supertest(app)
    .get('/test')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        const actual = res.text.includes('Client Error 404');
        t.equal(actual, true, 'must be Client Error 404');
        t.end();
      }
    });
});


test('test for add Form route', (t) => {
  supertest(app)
    .get('/getform')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        const actual = res.text.includes('Test you Taste');
        t.equal(actual, true, 'must be title [Test your Taste]');
        t.end();
      }
    });
});

test.onFinish(() => process.exit(0));
