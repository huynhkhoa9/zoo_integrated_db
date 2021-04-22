"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _mysql$createConnecti;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mysql = require('mysql');

var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client', 'build'))); // Handles any requests that don't match the ones above

app.get('/', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, 'client', 'build'));
});
app.get('/', function (req, res) {
  res.send('just gonna send it');
});
app.get('/flower', function (req, res) {
  res.json({
    name: 'Dandelion',
    colour: 'Blue-ish'
  });
});
var connection = mysql.createConnection((_mysql$createConnecti = {
  host: process.env.RDS_HOSTNAME
}, _defineProperty(_mysql$createConnecti, "host", process.env.RDS_HOSTNAME), _defineProperty(_mysql$createConnecti, "user", process.env.RDS_USERNAME), _defineProperty(_mysql$createConnecti, "password", process.env.RDS_PASSWORD), _defineProperty(_mysql$createConnecti, "database", process.env.RDS_HOSTNAME), _mysql$createConnecti));
connection.connect();
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
connection.end();
