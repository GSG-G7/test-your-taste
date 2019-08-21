const app = require('./app');

const port = app.get('port');

app.listen(port, () => {
  console.log(`Access app by http://localhost:${port}`);
});
