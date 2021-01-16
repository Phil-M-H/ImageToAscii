const fs = require('fs');
const bodyParser = require("body-parser");
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use('./api/')
app.get('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})