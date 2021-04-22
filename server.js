// server.js
//
import path from 'path';
import express from 'express';
import router from './routes/auth.routes';
const mysql = require('mysql');
const app = express();

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.use(express.static(path.join(__dirname, 'client', 'build')));
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});