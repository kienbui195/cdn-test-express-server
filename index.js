const express = require('express');
const cors = require('cors');

const app = express();
const post = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send("Ok")
})

app.listen(post, (req, res) => {
  console.log(`Server listening on ${post}`);
})