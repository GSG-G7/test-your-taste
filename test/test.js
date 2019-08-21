const test = require('tape');
const { dbBuild } = require('../src/database/config/build');
const { getData } = require('../src/database/quieres/getData');

test('inital test', (t) => {
  t.equal(2, 2, 'must be equal');
  t.end();
});

test('test getData query', (t) => {
  // console.log(getData());
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

test.onFinish(() => process.exit(0));
