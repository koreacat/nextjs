webpackHotUpdate_N_E("pages/path",{

/***/ "./src/pages/path.tsx":
/*!****************************!*\
  !*** ./src/pages/path.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\pages\\path.tsx",
    _this = undefined,
    _s = $RefreshSig$();


var starLine = [50, 60, 55, 80, 70, 80, 60, 90, 65, 105, 50, 95, 35, 105, 40, 90, 30, 80, 45, 80];
var starLine2 = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50];

var Path = function Path() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      ran = _useState[0],
      setRan = _useState[1];

  var count = 0;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var interval = setInterval(function () {
      setRan((count + 1) % (starLine.length + 2));
      starLine2[count] = starLine[count];
      count++;
    }, 250);
    return function () {
      clearInterval(interval);
    };
  }, [count]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      width: "800",
      height: "800",
      viewBox: "0 0 400 400",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("polygon", {
        points: starLine2.join(' '),
        stroke: "green",
        fill: "transparent",
        strokeWidth: "5",
        style: {
          transition: 'all 1s'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }, _this);
};

_s(Path, "Sj840W+EMS8dyt+6UZvVfcUp3qw=");

_c = Path;
/* harmony default export */ __webpack_exports__["default"] = (Path);

var _c;

$RefreshReg$(_c, "Path");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BhdGgudHN4Il0sIm5hbWVzIjpbInN0YXJMaW5lIiwic3RhckxpbmUyIiwiUGF0aCIsInVzZVN0YXRlIiwicmFuIiwic2V0UmFuIiwiY291bnQiLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsImpvaW4iLCJ0cmFuc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsRUFBeUIsRUFBekIsRUFBNkIsRUFBN0IsRUFBaUMsRUFBakMsRUFBcUMsR0FBckMsRUFBMEMsRUFBMUMsRUFBOEMsRUFBOUMsRUFBa0QsRUFBbEQsRUFBc0QsR0FBdEQsRUFBMkQsRUFBM0QsRUFBK0QsRUFBL0QsRUFBbUUsRUFBbkUsRUFBdUUsRUFBdkUsRUFBMkUsRUFBM0UsRUFBK0UsRUFBL0UsQ0FBakI7QUFDQSxJQUFJQyxTQUFTLEdBQUcsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLEVBQXJCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBQWlDLEVBQWpDLEVBQXFDLEVBQXJDLEVBQXlDLEVBQXpDLEVBQTZDLEVBQTdDLEVBQWlELEVBQWpELEVBQXFELEVBQXJELEVBQXlELEVBQXpELEVBQTZELEVBQTdELEVBQWlFLEVBQWpFLEVBQXFFLEVBQXJFLEVBQXlFLEVBQXpFLEVBQTZFLEVBQTdFLENBQWhCOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxDQUFELENBRFo7QUFBQSxNQUNYQyxHQURXO0FBQUEsTUFDTkMsTUFETTs7QUFFbEIsTUFBSUMsS0FBSyxHQUFHLENBQVo7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTUMsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUNsQ0osWUFBTSxDQUFDLENBQUNDLEtBQUssR0FBRyxDQUFULEtBQWVOLFFBQVEsQ0FBQ1UsTUFBVCxHQUFrQixDQUFqQyxDQUFELENBQU47QUFDQVQsZUFBUyxDQUFDSyxLQUFELENBQVQsR0FBbUJOLFFBQVEsQ0FBQ00sS0FBRCxDQUEzQjtBQUNBQSxXQUFLO0FBQ0wsS0FKMkIsRUFJekIsR0FKeUIsQ0FBNUI7QUFNQSxXQUFRLFlBQU07QUFDYkssbUJBQWEsQ0FBQ0gsUUFBRCxDQUFiO0FBQ0EsS0FGRDtBQUdBLEdBVlEsRUFVTixDQUFDRixLQUFELENBVk0sQ0FBVDtBQWFBLHNCQUNDO0FBQUEsMkJBQ0M7QUFBSyxXQUFLLEVBQUMsS0FBWDtBQUFpQixZQUFNLEVBQUMsS0FBeEI7QUFBOEIsYUFBTyxFQUFDLGFBQXRDO0FBQUEsNkJBQ0M7QUFBUyxjQUFNLEVBQUVMLFNBQVMsQ0FBQ1csSUFBVixDQUFlLEdBQWYsQ0FBakI7QUFBc0MsY0FBTSxFQUFDLE9BQTdDO0FBQXFELFlBQUksRUFBQyxhQUExRDtBQUF3RSxtQkFBVyxFQUFDLEdBQXBGO0FBQXdGLGFBQUssRUFBRTtBQUFDQyxvQkFBVSxFQUFFO0FBQWI7QUFBL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFPQSxDQXhCRDs7R0FBTVgsSTs7S0FBQUEsSTtBQTBCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGF0aC4zNmQ0YTBmY2E0M2VkZDZiMDZiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHN0YXJMaW5lID0gWzUwLCA2MCwgNTUsIDgwLCA3MCwgODAsIDYwLCA5MCwgNjUsIDEwNSwgNTAsIDk1LCAzNSwgMTA1LCA0MCwgOTAsIDMwLCA4MCwgNDUsIDgwXTtcclxubGV0IHN0YXJMaW5lMiA9IFs1MCwgNTAsIDUwLCA1MCwgNTAsIDUwLCA1MCwgNTAsIDUwLCA1MCwgNTAsIDUwLCA1MCwgNTAsIDUwLCA1MCwgNTAsIDUwLCA1MCwgNTBdO1xyXG5cclxuY29uc3QgUGF0aCA9ICgpID0+IHtcclxuXHRjb25zdCBbcmFuLCBzZXRSYW5dID0gdXNlU3RhdGUoMCk7XHJcblx0bGV0IGNvdW50ID0gMDtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRzZXRSYW4oKGNvdW50ICsgMSkgJSAoc3RhckxpbmUubGVuZ3RoICsgMikpO1xyXG5cdFx0XHRzdGFyTGluZTJbY291bnRdID0gc3RhckxpbmVbY291bnRdO1xyXG5cdFx0XHRjb3VudCArKztcclxuXHRcdH0sIDI1MCk7XHJcblxyXG5cdFx0cmV0dXJuICgoKSA9PiB7XHJcblx0XHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG5cdFx0fSlcclxuXHR9LCBbY291bnRdKTtcclxuXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8c3ZnIHdpZHRoPSc4MDAnIGhlaWdodD0nODAwJyB2aWV3Qm94PScwIDAgNDAwIDQwMCc+XHJcblx0XHRcdFx0PHBvbHlnb24gcG9pbnRzPXtzdGFyTGluZTIuam9pbignICcpfSBzdHJva2U9XCJncmVlblwiIGZpbGw9XCJ0cmFuc3BhcmVudFwiIHN0cm9rZVdpZHRoPVwiNVwiIHN0eWxlPXt7dHJhbnNpdGlvbjogJ2FsbCAxcyd9fS8+XHJcblx0XHRcdDwvc3ZnPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0aDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==