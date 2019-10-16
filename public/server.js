"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var app = (0, _express["default"])();
var PORT = process.env.PORT;
app.use('/', [_express["default"]["static"]("".concat(__dirname)), _express["default"]["static"](_path["default"].join(__dirname, '../assets'))]);
app.listen(PORT || 3000, function () {
  app.get('*', function (req, res) {
    res.sendFile(_path["default"].resolve(__dirname, 'index.html'));
  });
});
