// server.js
//
import path from 'path';
import express from 'express';
const mysql = require('mysql');

const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

// Handles any requests that don't match the ones above
app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname, 'client', 'build'));
});

app.get('/', (req, res) => {
  res.send('just gonna send it');
});

app.get('/flower', (req, res) => {
  res.json({
    name: 'Dandelion',
    colour: 'Blue-ish'
  });
});

const connection = mysql.createConnection({
  host:      process.env.RDS_HOSTNAME,
  host:      process.env.RDS_HOSTNAME,
  user:      process.env.RDS_USERNAME,
  password:  process.env.RDS_PASSWORD,
  database:  process.env.RDS_HOSTNAME
});

connection.connect();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});

connection.end();