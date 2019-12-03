webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_matchProps_ListNotes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/matchProps/ListNotes */ "./src/matchProps/ListNotes.js");
/* harmony import */ var _src_hooks_useListNote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/hooks/useListNote */ "./src/hooks/useListNote.js");
/* harmony import */ var _src_components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Loader */ "./src/components/Loader/index.jsx");
/* harmony import */ var _src_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/styles/css */ "./src/styles/css.js");
/* harmony import */ var _src_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/utils */ "./src/utils/index.js");
/* harmony import */ var _src_styles_index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _src_styles_index_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_styles_index_scss__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var ListNotes = function ListNotes(props) {
  var _useListNote = Object(_src_hooks_useListNote__WEBPACK_IMPORTED_MODULE_4__["default"])(props),
      isLoading = _useListNote.isLoading,
      data = _useListNote.data,
      DeleteNote = _useListNote.DeleteNote;

  return isLoading ? __jsx(_src_components_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], null) : data && data.length > 0 && data[0] !== null ? data.map(function (note) {
    return __jsx("div", {
      key: note.id,
      className: "card-hd"
    }, __jsx("div", {
      className: "card rumple ".concat(note.color, " h-full"),
      style: _src_styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.rumple
    }, __jsx("div", {
      className: "card-body",
      onClick: function onClick(_) {
        return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("".concat("", "/note/").concat(note.id));
      }
    }, __jsx("h4", {
      className: "card-title text-xl"
    }, note.title), __jsx("p", {
      className: "card-text text-sm font-montserrat",
      style: {
        marginBottom: "2rem"
      }
    }, Object(_src_utils__WEBPACK_IMPORTED_MODULE_7__["truncateText"])(note.body, 100))), __jsx("div", {
      className: "card-footer flex justify-between items-center",
      style: {
        border: "none",
        padding: "0 1rem",
        height: "3rem"
      }
    }, __jsx("span", {
      className: "text-sm"
    }, "2-4-18"), __jsx("button", {
      onClick: function onClick(_) {
        return DeleteNote(note.id);
      },
      className: "text-sm p-1 border-2"
    }, "Delete"))));
  }) : __jsx("div", {
    className: "emptyicon-hd"
  }, __jsx("div", {
    className: "emptyicon",
    style: _src_styles_css__WEBPACK_IMPORTED_MODULE_6___default.a.emptyicon
  }), __jsx("h3", {
    className: "my-4"
  }, "pen a thought"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(_src_matchProps_ListNotes__WEBPACK_IMPORTED_MODULE_3__["matchStateToProps"], _src_matchProps_ListNotes__WEBPACK_IMPORTED_MODULE_3__["matchDispatchToProps"])(ListNotes));

/***/ })

})
//# sourceMappingURL=index.js.55f314a6421368822b98.hot-update.js.map