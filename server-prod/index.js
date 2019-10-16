"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _webpack = _interopRequireDefault(require("webpack"));

var _webpackDevMiddleware = _interopRequireDefault(require("webpack-dev-middleware"));

var _webpackHotMiddleware = _interopRequireDefault(require("webpack-hot-middleware"));

var _webpack2 = _interopRequireDefault(require("../webpack.config"));

var _routes = _interopRequireDefault(require("./routes"));

_dotenv["default"].config();

var app = (0, _express["default"])();
var _process$env = process.env,
    PORT = _process$env.PORT,
    NODE_ENV = _process$env.NODE_ENV;

if (NODE_ENV == 'development') {
  var compiler = (0, _webpack["default"])(_webpack2["default"]);
  app.use((0, _webpackDevMiddleware["default"])(compiler, {
    hot: true,
    publicPath: _webpack2["default"].output.publicPath
  }));
  app.use((0, _webpackHotMiddleware["default"])(compiler));
}

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use('/api/v1/notes', _routes["default"]);
app.use('/', [_express["default"]["static"](_path["default"].join(__dirname, '../client-prod')), _express["default"]["static"](_path["default"].join(__dirname, '../assets'))]);
app.listen(PORT || 3000, function () {
  app.get('*', function (req, res) {
    res.sendFile(_path["default"].join(__dirname, '../client-prod/index.html'));
  });
});