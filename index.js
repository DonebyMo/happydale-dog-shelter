const express = require('express');
const app = express();
const port = 3400; // Change this to the desired port number

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});