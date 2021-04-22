// server.js
//
import path from 'path';
import express from 'express';
const mysql = require('mysql');

const db = mysql.createPool({
  host:      process.env.RDS_HOSTNAME,
  host:      process.env.RDS_HOSTNAME,
  user:      process.env.RDS_USERNAME,
  password:  process.env.RDS_PASSWORD,
  database:  process.env.RDS_HOSTNAME
});

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

db.getConnection(function(err, connection) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  // execute query
  // ...
  connnection.release();
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});