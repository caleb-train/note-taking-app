webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/Nav/index.jsx":
/*!**************************************!*\
  !*** ./src/components/Nav/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_noteActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/noteActions */ "./src/store/actions/noteActions.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/css */ "./src/styles/css.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/components/Nav/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Nav = function Nav(props) {
  var saveNote = props.saveNote,
      editNote = props.editNote,
      makeNote = props.makeNote,
      CreateNoteAsync = props.CreateNoteAsync,
      UpdateNoteAsync = props.UpdateNoteAsync;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      navBackground = _useState[0],
      setNavBackground = _useState[1];

  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  navRef.current = navBackground;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var elem = document.querySelector("main");
    var nextDiv = document.querySelector("body");

    var handleScroll = function handleScroll() {
      var bounding = elem.getBoundingClientRect();
      var show = bounding.y < 50;

      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };

    nextDiv.addEventListener("scroll", handleScroll);
    return function () {
      nextDiv.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return __jsx("nav", {
    className: "mainNav px-2 sm:px-8  justify-between ".concat(navBackground ? "scroll" : "")
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("div", {
    className: "Logo flex items-center ".concat(navBackground ? "scale" : "")
  }, __jsx("div", {
    className: "border-0 logo",
    style: _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.logo
  }), __jsx("h3", null, "ScrapBook"))), __jsx("div", {
    className: "actions w-32 flex flex-row flex-grow-0 justify-end ".concat(navBackground ? "scale" : "")
  }, makeNote ? __jsx("button", {
    className: "btn p-1 px-2 text-white bg-green-600",
    onClick: function onClick(_) {
      return CreateNoteAsync(editNote);
    }
  }, "Create") : __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "".concat("", "/note")
  }, __jsx("button", {
    className: "btn p-1 px-2"
  }, "Add")), saveNote ? __jsx("button", {
    className: "btn p-1 px-2 text-white bg-gray-800",
    onClick: function onClick(_) {
      return UpdateNoteAsync(editNote);
    }
  }, "Save") : null));
};

var matchStateToProps = function matchStateToProps(_ref) {
  var state = _ref.note;
  return {
    saveNote: state.saveNote,
    editNote: state.editNote,
    makeNote: state.makeNote
  };
};

var matchDispatchToProps = {
  UpdateNoteAsync: _store_actions_noteActions__WEBPACK_IMPORTED_MODULE_3__["UpdateNoteAsync"],
  CreateNoteAsync: _store_actions_noteActions__WEBPACK_IMPORTED_MODULE_3__["CreateNoteAsync"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(matchStateToProps, matchDispatchToProps)(Nav));

/***/ })

})
//# sourceMappingURL=_app.js.ef4422c550a938361719.hot-update.js.map