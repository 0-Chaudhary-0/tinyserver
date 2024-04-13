const express = require('express')
const connectDb = require('./lib/connect')
const cors = require('cors')
const bodyParser = require("body-parser");
const port = 3000;
const app = express()

// create application/json parser
app.use(bodyParser.json());
app.use(cors())

connectDb()

app.use('/api/auth', require('./routes/auth'))
app.use('/api/student', require('./routes/enroll'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})