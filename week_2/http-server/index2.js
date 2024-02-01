const express = require('express')
const app = express()
const port = 3000

app.post('/conversations', (req, res) => {
  res.send('Hello World! we made a server,<b>Hello There</b>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.listen(port)