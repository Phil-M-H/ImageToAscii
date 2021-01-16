const fs = require('fs');
const bodyParser = require("body-parser");
const express = require('express');
const ascii_router = require('./routers/ascii_router');
const app = express();
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', ascii_router);
app.use('/jwt', ascii_router);

app.get('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});