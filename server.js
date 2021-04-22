// server.js
//
import path from 'path';
import express from 'express';
const mysql = require('mysql');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/', (req, res) => {
  res.send('just gonna send it');
});

app.get('/flower', (req, res) => {
  res.json({
    name: 'Dandelion',
    colour: 'Blue-ish'
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});