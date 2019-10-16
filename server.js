"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jsonServer = _interopRequireDefault(require("json-server"));

var _path = _interopRequireDefault(require("path"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var router = _jsonServer["default"].router('../db.json');

var middlewares = _jsonServer["default"].defaults();

var app = _jsonServer["default"].create();

app.use(middlewares);
app.use(router);
app.listen(process.env.PORT || 3000, function () {
  app.get('/', function (req, res) {
    res.sendFile(_path["default"].resolve(__dirname, 'public/index.html'));
  });
});
