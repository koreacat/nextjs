webpackHotUpdate_N_E("pages/dotChart",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ }),

/***/ "./src/components/charts/dotChart/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/charts/dotChart/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dotChart_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dotChart.module.scss */ "./src/components/charts/dotChart/dotChart.module.scss");
/* harmony import */ var _dotChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dotChart_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\components\\charts\\dotChart\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




var cx = classnames_bind__WEBPACK_IMPORTED_MODULE_3___default.a.bind(_dotChart_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a);

var Arrow = function Arrow() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
      className: cx('arrow', 'top')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
      className: cx('arrow', 'right')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_c = Arrow;

var Line = function Line() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
      className: cx('line', 'horizontal')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
      className: cx('line', 'vertical')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_c2 = Line;

var Category = function Category() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: cx('category', 'leftTop'),
      children: "\uC5ED\uB7C9\uC5D0 \uC798\uB9DE\uC544\uC694"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: cx('category', 'leftBottom'),
      children: "\uC5ED\uB7C9\uC5D0 \uC548\uB9DE\uC544\uC694"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: cx('category', 'bottomLeft'),
      children: "\uC720\uD615\uC5D0 \uC548\uB9DE\uC544\uC694"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: cx('category', 'bottomRight'),
      children: "\uC720\uD615\uC5D0 \uC798\uB9DE\uC544\uC694"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_c3 = Category;

var Preference = function Preference() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: cx('preference', 'topLeft', 'gray'),
      children: "\uBCF4\uD1B5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: cx('preference', 'topRight', 'green'),
      children: "\uCD94\uCC9C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: cx('preference', 'bottomLeft', 'red'),
      children: "\uBE44\uCD94\uCC9C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: cx('preference', 'bottomRight', 'gray'),
      children: "\uBCF4\uD1B5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_c4 = Preference;

var Item = function Item(_ref) {
  var title = _ref.title,
      position = _ref.position;
  var x = position.x < 0 ? 0 : position.x > 10 ? 10 : position.x;
  var y = position.y < 0 ? 0 : position.y > 12 ? 12 : position.y;
  var alignItems = x <= 1 ? 'flex-start' : x >= 10 ? 'flex-end' : 'center';
  var color = x <= 5 && y <= 6 ? 'red' : x >= 6 && y >= 7 ? 'green' : 'gray';

  var getLeft = function getLeft(x) {
    if (x <= 6) {
      return 16 + x * 50;
    } else {
      return 16 + 6 * 50 + (x - 6) * 60;
    }
  };

  var getBottom = function getBottom(y) {
    if (y <= 6) {
      return 40 + (y - 1) * 25;
    } else {
      return 40 + 5 * 25 + (y - 6) * 30;
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: cx('item', color),
    style: {
      bottom: "".concat(getBottom(y), "px"),
      left: "".concat(getLeft(x), "px"),
      alignItems: alignItems
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
      className: cx('point')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: cx('title'),
      style: {
        justifyContent: alignItems
      },
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 3
  }, _this);
};

_c5 = Item;

var Items = function Items(_ref2) {
  Object(C_Users_jgm0531_MIDASIT_jgmProjects_cna_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2);

  var data = [{
    x: 2,
    y: 11,
    title: '서비스/고객지원'
  }, {
    x: 10,
    y: 10,
    title: '홍보/마케팅'
  }, {
    x: 0,
    y: 9,
    title: '경영 기획/지원'
  }, {
    x: 5,
    y: 8,
    title: '금융/보험'
  }, {
    x: 9,
    y: 7,
    title: '영업'
  }, {
    x: 2,
    y: 6,
    title: '연구/개발'
  }, {
    x: 4,
    y: 5,
    title: '의료/보건'
  }, {
    x: 3,
    y: 4,
    title: '건설/엔지니어'
  }, {
    x: 2,
    y: 3,
    title: '생산/유통/품질'
  }, {
    x: 7,
    y: 2,
    title: '디자인'
  }, {
    x: 10,
    y: 1,
    title: 'IT 서비스'
  }];
  var items = data.map(function (data) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Item, {
      title: data.title,
      position: {
        x: data.x,
        y: data.y
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 10
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: items
  }, void 0, false);
};

_c6 = Items;

var DotChart = function DotChart() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      active = _useState[0],
      setActive = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: cx('wrap'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: cx('dotChart'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Arrow, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Category, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Preference, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Items, {
        active: active
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 3
  }, _this);
};

_s(DotChart, "1cfVChV6gA1Fk8+xDnwTj3gmgZo=");

_c7 = DotChart;
/* harmony default export */ __webpack_exports__["default"] = (DotChart);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Arrow");
$RefreshReg$(_c2, "Line");
$RefreshReg$(_c3, "Category");
$RefreshReg$(_c4, "Preference");
$RefreshReg$(_c5, "Item");
$RefreshReg$(_c6, "Items");
$RefreshReg$(_c7, "DotChart");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdERlc3RydWN0dXJpbmdFbXB0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2hhcnRzL2RvdENoYXJ0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJjeCIsImNsYXNzbmFtZXMiLCJiaW5kIiwic3R5bGVzIiwiQXJyb3ciLCJMaW5lIiwiQ2F0ZWdvcnkiLCJQcmVmZXJlbmNlIiwiSXRlbSIsInRpdGxlIiwicG9zaXRpb24iLCJ4IiwieSIsImFsaWduSXRlbXMiLCJjb2xvciIsImdldExlZnQiLCJnZXRCb3R0b20iLCJib3R0b20iLCJsZWZ0IiwianVzdGlmeUNvbnRlbnQiLCJJdGVtcyIsImRhdGEiLCJpdGVtcyIsIm1hcCIsIkRvdENoYXJ0IiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEVBQUUsR0FBR0Msc0RBQVUsQ0FBQ0MsSUFBWCxDQUFnQkMsNERBQWhCLENBQVg7O0FBR0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNuQixzQkFDQztBQUFBLDRCQUNDO0FBQUcsZUFBUyxFQUFFSixFQUFFLENBQUMsT0FBRCxFQUFVLEtBQVY7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBRUM7QUFBRyxlQUFTLEVBQUVBLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQ7QUFBQSxrQkFERDtBQU1BLENBUEQ7O0tBQU1JLEs7O0FBU04sSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNsQixzQkFDQztBQUFBLDRCQUNDO0FBQUcsZUFBUyxF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QyxFQUFFUyxJQUFJLENBQUNUO0FBQXBCO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNBLEdBRmEsQ0FBZDtBQUlBLHNCQUFPO0FBQUEsY0FBR1U7QUFBSCxtQkFBUDtBQUNBLENBcEJEOztNQUFNRixLOztBQXNCTixJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsS0FBRCxDQURkO0FBQUEsTUFDZkMsTUFEZTtBQUFBLE1BQ1BDLFNBRE87O0FBR3RCLHNCQUNDO0FBQUssYUFBUyxFQUFFM0IsRUFBRSxDQUFDLE1BQUQsQ0FBbEI7QUFBQSwyQkFFQztBQUFLLGVBQVMsRUFBRUEsRUFBRSxDQUFDLFVBQUQsQ0FBbEI7QUFBQSw4QkFDQyxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDLHFFQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZELGVBR0MscUVBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEQsZUFJQyxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRCxlQUtDLHFFQUFDLEtBQUQ7QUFBTyxjQUFNLEVBQUUwQjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFZQSxDQWZEOztHQUFNRixROztNQUFBQSxRO0FBaUJTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb3RDaGFydC4zMzVhZWQwYjI4MGE3YTYyYjcxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdERlc3RydWN0dXJpbmdFbXB0eShvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGRlc3RydWN0dXJlIHVuZGVmaW5lZFwiKTtcbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vZG90Q2hhcnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzL2JpbmQnO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGN4ID0gY2xhc3NuYW1lcy5iaW5kKHN0eWxlcyk7XHJcblxyXG5cclxuY29uc3QgQXJyb3cgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxpIGNsYXNzTmFtZT17Y3goJ2Fycm93JywgJ3RvcCcpfS8+XHJcblx0XHRcdDxpIGNsYXNzTmFtZT17Y3goJ2Fycm93JywgJ3JpZ2h0Jyl9Lz5cclxuXHRcdDwvPlxyXG5cdClcclxufTtcclxuXHJcbmNvbnN0IExpbmUgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxpIGNsYXNzTmFtZT17Y3goJ2xpbmUnLCAnaG9yaXpvbnRhbCcpfS8+XHJcblx0XHRcdDxpIGNsYXNzTmFtZT17Y3goJ2xpbmUnLCAndmVydGljYWwnKX0vPlxyXG5cdFx0PC8+XHJcblx0KVxyXG59O1xyXG5cclxuY29uc3QgQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y3goJ2NhdGVnb3J5JywgJ2xlZnRUb3AnKX0+7Jet65+J7JeQIOyemOunnuyVhOyalDwvc3Bhbj5cclxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjeCgnY2F0ZWdvcnknLCAnbGVmdEJvdHRvbScpfT7sl63rn4nsl5Ag7JWI66ee7JWE7JqUPC9zcGFuPlxyXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2N4KCdjYXRlZ29yeScsICdib3R0b21MZWZ0Jyl9PuycoO2YleyXkCDslYjrp57slYTsmpQ8L3NwYW4+XHJcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y3goJ2NhdGVnb3J5JywgJ2JvdHRvbVJpZ2h0Jyl9PuycoO2YleyXkCDsnpjrp57slYTsmpQ8L3NwYW4+XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn07XHJcblxyXG5jb25zdCBQcmVmZXJlbmNlID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3ByZWZlcmVuY2UnLCAndG9wTGVmdCcsICdncmF5Jyl9PuuztO2GtTwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3ByZWZlcmVuY2UnLCAndG9wUmlnaHQnLCAnZ3JlZW4nKX0+7LaU7LKcPC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjeCgncHJlZmVyZW5jZScsICdib3R0b21MZWZ0JywgJ3JlZCcpfT7ruYTstpTsspw8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2N4KCdwcmVmZXJlbmNlJywgJ2JvdHRvbVJpZ2h0JywgJ2dyYXknKX0+67O07Ya1PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn07XHJcblxyXG5cclxuaW50ZXJmYWNlIEl0ZW0ge1xyXG5cdHRpdGxlPzogc3RyaW5nO1xyXG5cdHBvc2l0aW9uPzogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xyXG59XHJcblxyXG5jb25zdCBJdGVtID0gKHt0aXRsZSwgcG9zaXRpb259OiBJdGVtKSA9PiB7XHJcblx0Y29uc3QgeCA9IHBvc2l0aW9uLnggPCAwID8gMCA6IHBvc2l0aW9uLnggPiAxMCA/IDEwIDogcG9zaXRpb24ueDtcclxuXHRjb25zdCB5ID0gcG9zaXRpb24ueSA8IDAgPyAwIDogcG9zaXRpb24ueSA+IDEyID8gMTIgOiBwb3NpdGlvbi55O1xyXG5cdGNvbnN0IGFsaWduSXRlbXMgPSB4IDw9IDEgPyAnZmxleC1zdGFydCcgOiB4ID49IDEwID8gJ2ZsZXgtZW5kJyA6ICdjZW50ZXInO1xyXG5cdGNvbnN0IGNvbG9yID0gKHggPD0gNSAmJiB5IDw9IDYpID8gJ3JlZCcgOiAoeCA+PSA2ICYmIHkgPj0gNykgPyAnZ3JlZW4nIDogJ2dyYXknO1xyXG5cclxuXHRjb25zdCBnZXRMZWZ0ID0gKHg6IG51bWJlcikgPT4ge1xyXG5cdFx0aWYgKHggPD0gNikge1xyXG5cdFx0XHRyZXR1cm4gMTYgKyB4ICogNTA7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gMTYgKyAoNiAqIDUwKSArICgoeCAtIDYpICogNjApO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGdldEJvdHRvbSA9ICh5OiBudW1iZXIpID0+IHtcclxuXHRcdGlmICh5IDw9IDYpIHtcclxuXHRcdFx0cmV0dXJuIDQwICsgKHkgLSAxKSAqIDI1O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIDQwICsgKDUgKiAyNSkgKyAoKHkgLSA2KSAqIDMwKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2N4KCdpdGVtJywgY29sb3IpfVxyXG5cdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdGJvdHRvbTogYCR7Z2V0Qm90dG9tKHkpfXB4YCxcclxuXHRcdFx0XHRsZWZ0OiBgJHtnZXRMZWZ0KHgpfXB4YCxcclxuXHRcdFx0XHRhbGlnbkl0ZW1zOiBhbGlnbkl0ZW1zXHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxpIGNsYXNzTmFtZT17Y3goJ3BvaW50Jyl9Lz5cclxuXHRcdFx0PHNwYW5cclxuXHRcdFx0XHRjbGFzc05hbWU9e2N4KCd0aXRsZScpfVxyXG5cdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogYWxpZ25JdGVtc1xyXG5cdFx0XHRcdH19XHJcblx0XHRcdD57dGl0bGV9PC9zcGFuPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuaW50ZXJmYWNlIEl0ZW1zIHtcclxuXHRhY3RpdmU6IGJvb2xlYW47XHJcblx0c2V0QWN0aXZlOiAoYWN0aXZlOiBib29sZWFuKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBJdGVtcyA9ICh7fTogSXRlbXMpID0+IHtcclxuXHRjb25zdCBkYXRhID0gW1xyXG5cdFx0e3g6IDIsIHk6IDExLCB0aXRsZTogJ+yEnOu5hOyKpC/qs6DqsJ3sp4Dsm5AnfSxcclxuXHRcdHt4OiAxMCwgeTogMTAsIHRpdGxlOiAn7ZmN67O0L+uniOy8gO2MhSd9LFxyXG5cdFx0e3g6IDAsIHk6IDksIHRpdGxlOiAn6rK97JiBIOq4sO2ajS/sp4Dsm5AnfSxcclxuXHRcdHt4OiA1LCB5OiA4LCB0aXRsZTogJ+q4iOyctS/rs7Ttl5gnfSxcclxuXHRcdHt4OiA5LCB5OiA3LCB0aXRsZTogJ+yYgeyXhSd9LFxyXG5cdFx0e3g6IDIsIHk6IDYsIHRpdGxlOiAn7Jew6rWsL+qwnOuwnCd9LFxyXG5cdFx0e3g6IDQsIHk6IDUsIHRpdGxlOiAn7J2Y66OML+uztOqxtCd9LFxyXG5cdFx0e3g6IDMsIHk6IDQsIHRpdGxlOiAn6rG07ISkL+yXlOyngOuLiOyWtCd9LFxyXG5cdFx0e3g6IDIsIHk6IDMsIHRpdGxlOiAn7IOd7IKwL+ycoO2GtS/tkojsp4gnfSxcclxuXHRcdHt4OiA3LCB5OiAyLCB0aXRsZTogJ+uUlOyekOyduCd9LFxyXG5cdFx0e3g6IDEwLCB5OiAxLCB0aXRsZTogJ0lUIOyEnOu5hOyKpCd9LFxyXG5cdF07XHJcblxyXG5cdGNvbnN0IGl0ZW1zID0gZGF0YS5tYXAoKGRhdGEpID0+IHtcclxuXHRcdHJldHVybiA8SXRlbSB0aXRsZT17ZGF0YS50aXRsZX0gcG9zaXRpb249e3t4OiBkYXRhLngsIHk6IGRhdGEueX19Lz5cclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIDw+e2l0ZW1zfTwvPjtcclxufTtcclxuXHJcbmNvbnN0IERvdENoYXJ0ID0gKCkgPT4ge1xyXG5cdGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ3dyYXAnKX0+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3goJ2RvdENoYXJ0Jyl9PlxyXG5cdFx0XHRcdDxBcnJvdy8+XHJcblx0XHRcdFx0PExpbmUvPlxyXG5cdFx0XHRcdDxDYXRlZ29yeS8+XHJcblx0XHRcdFx0PFByZWZlcmVuY2UvPlxyXG5cdFx0XHRcdDxJdGVtcyBhY3RpdmU9e2FjdGl2ZX0vPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvdENoYXJ0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9