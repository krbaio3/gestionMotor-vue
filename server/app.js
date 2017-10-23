const express = require('express');
const app = express();

const port = 9004;
const routes = {
  soliCancel: {
    url: '/api/1.0/xxx/yyyyy/soliCancel/ffff',
    file: './api/solicitar.mock.json',
  },
};

app.post(routes.soliCancel.url, (req, res) => {
  res.send(JSON.stringify(require(routes.soliCancel.file)));
});

app.listen(port, () => {
  console.log(`Mocks app listening on port ${port}!`);
});
