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
      const expected = [
        { id: 1, name: 'Hashem', email: 'h123@gmail.com' },
        { id: 2, name: 'asmaa', email: 'asa@hotmail.com' },
      ];
      t.deepEqual(result, expected, 'should be the same result');
      t.end();
    })
    .catch((err) => {
      t.error(err);
      t.end();
    });
});

test.onFinish(() => process.exit(0));
