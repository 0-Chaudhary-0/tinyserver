const express = require('express')
const connectDb = require('./lib/connect')
const cors = require('cors')
const bodyParser = require("body-parser");
const port = 3000;
const app = express()

connectDb()

// create application/json parser
app.use(bodyParser.json());
app.use('*',cors());


app.use('/api/user', require('./routes/checkUser'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
