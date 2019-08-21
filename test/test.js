const test = require('tape');
const supertest = require('supertest');
const app = require('../src/app');
const { dbBuild } = require('../src/database/config/build');
const { getData } = require('../src/database/quieres/getData');
const { saveData } = require('../src/database/quieres/postData');

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

test('test postData query', (t) => {
  const actual = {
    name: 'Testing',
    address: 'Gaza',
    image: 'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg',
    rate: '20',
    user: 'rana',
    user_email: 'ra@gmail.com',
    add: 'Send',
  };
  saveData(actual)
    .then((result) => {
      t.equal(result.command, 'INSERT', 'Insert failed');
      t.end();
    }).catch((err) => {
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


test('test for add route', (t) => {
  supertest(app)
    .post('/add')
    .send(
      {
        name: 'abdallah',
        address: 'gaza',
        image: 'image',
        rate: 2,
        user_email: 'ra@gmail.com',
      },
    )
    .expect(302)
    .expect('Content-Type', /text/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.header.location, '/', 'Should redirect to / route');
      t.end();
    });
});
test.onFinish(() => process.exit(0));
