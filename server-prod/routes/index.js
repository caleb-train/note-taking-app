"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var Validators = _interopRequireWildcard(require("../validators"));

var Controllers = _interopRequireWildcard(require("../controllers"));

var router = _express["default"].Router();

router.post('/', Validators.createNote, Controllers.createNote);
var _default = router;
exports["default"] = _default;