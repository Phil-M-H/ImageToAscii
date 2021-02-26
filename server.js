const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const ascii_router = require('./routers/ascii_router');
const authentication_router = require('./routers/authentication_router');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', ascii_router);
app.use('/jwt', authentication_router);

app.get('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World!');
});

const port = process.env.PORT || 3000;
// app.listen(port);

module.exports = app;