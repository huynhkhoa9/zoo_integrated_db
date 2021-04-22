"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// server.js
//
var mysql = require('mysql');

var app = (0, _express["default"])();
app.use(cors()); // parse requests of content-type - application/json

app.use(_express["default"].json()); // parse requests of content-type - application/x-www-form-urlencoded

app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client', 'build')));
app.use("/", _auth["default"]); // Handles any requests that don't match the ones above

app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname + '/client/build/index.html'));
});
var connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT
});
connection.connect(function (err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});
connection.end();
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
