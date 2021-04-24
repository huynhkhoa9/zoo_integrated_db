"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// server.js
//
var app = (0, _express["default"])(); // parse requests of content-type - application/json

app.use(_express["default"].json()); // parse requests of content-type - application/x-www-form-urlencoded

app.use(_express["default"].urlencoded({
  extended: true
}));
app.use('/', _auth["default"]);
app.use('*', _auth["default"]);
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'client', 'build'))); // Handles any requests that don't match the ones above

app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname + '/client/build/index.html'));
});
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
