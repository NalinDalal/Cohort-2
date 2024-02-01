const express = require('express');
const app = express();
const port = 3000;

app.post('/', (req, res) => {
  res.send('Hello World! we made a server,<b>Hello There</b>');
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

server.on('error', (err) => {
  console.error('Server error:', err.message);
});
