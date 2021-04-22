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

var connection = mysql.createConnection({
  host     : 'aajohs9larexbk.chdju4zwao3b.us-east-2.rds.amazonaws.com', //process.env.RDS_HOSTNAME,
  user     : 'admin', //process.env.RDS_USERNAME,
  password : 'UHCougarsCS2021$',//process.env.RDS_PASSWORD,
  port     : '3306'//process.env.RDS_PORT
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});