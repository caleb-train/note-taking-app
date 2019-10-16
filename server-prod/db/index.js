"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _database = _interopRequireDefault(require("./database"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Db =
/*#__PURE__*/
function () {
  function Db() {
    (0, _classCallCheck2["default"])(this, Db);
  }

  (0, _createClass2["default"])(Db, null, [{
    key: "add",
    value: function add(note) {
      var id = _database["default"].notes.length;
      var date = new Date().toISOString().slice(0, 10);

      var newNote = _objectSpread({}, note, {
        id: id,
        date: date
      });

      _database["default"].notes.push(newNote);

      return newNote;
    }
  }, {
    key: "show",
    value: function show() {
      return _database["default"];
    }
  }]);
  return Db;
}();

var _default = Db;
exports["default"] = _default;