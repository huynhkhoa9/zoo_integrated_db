"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _mysql$createPool;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mysql = require('mysql');

var db = mysql.createPool((_mysql$createPool = {
  host: process.env.RDS_HOSTNAME
}, _defineProperty(_mysql$createPool, "host", process.env.RDS_HOSTNAME), _defineProperty(_mysql$createPool, "user", process.env.RDS_USERNAME), _defineProperty(_mysql$createPool, "password", process.env.RDS_PASSWORD), _defineProperty(_mysql$createPool, "database", process.env.RDS_HOSTNAME), _mysql$createPool));
var PORT = process.env.PORT || 8080;
var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client', 'build')));
app.get('/', function (req, res) {
  res.send('just gonna send it');
});
app.get('/flower', function (req, res) {
  res.json({
    name: 'Dandelion',
    colour: 'Blue-ish'
  });
});
db.getConnection(function (err, connection) {
  if (err) {
    return console.error('error: ' + err.message);
  } // execute query
  // ...


  connnection.release();
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
