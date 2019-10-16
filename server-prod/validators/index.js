"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNote = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var createNote =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, title, body;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, body = _req$body.body;

            if (title) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: 'title is required'
            }));

          case 5:
            if (body) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: 'body is required'
            }));

          case 7:
            req.data = {
              title: title,
              body: body
            };
            next();

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createNote(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.createNote = createNote;