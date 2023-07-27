

const express = require('express')   // Express ia a npm module it will create web server locally
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Sangamesh how are you?')
})

app.listen(process.env.PORT || 3000)

console.log("Server is running on http://localhost:3000")
