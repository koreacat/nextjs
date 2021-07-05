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

var Path = function Path() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      ran = _useState[0],
      setRan = _useState[1];

  var count = 0;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var interval = setInterval(function () {
      setRan((count + 1) % starLine.length);
      count += 2;
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
        points: starLine.slice(0, ran).join(' '),
        stroke: "green",
        fill: "transparent",
        strokeWidth: "5",
        style: {
          transition: 'all 1s'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BhdGgudHN4Il0sIm5hbWVzIjpbInN0YXJMaW5lIiwiUGF0aCIsInVzZVN0YXRlIiwicmFuIiwic2V0UmFuIiwiY291bnQiLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsInNsaWNlIiwiam9pbiIsInRyYW5zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixFQUF6QixFQUE2QixFQUE3QixFQUFpQyxFQUFqQyxFQUFxQyxHQUFyQyxFQUEwQyxFQUExQyxFQUE4QyxFQUE5QyxFQUFrRCxFQUFsRCxFQUFzRCxHQUF0RCxFQUEyRCxFQUEzRCxFQUErRCxFQUEvRCxFQUFtRSxFQUFuRSxFQUF1RSxFQUF2RSxFQUEyRSxFQUEzRSxFQUErRSxFQUEvRSxDQUFqQjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsQ0FBRCxDQURaO0FBQUEsTUFDWEMsR0FEVztBQUFBLE1BQ05DLE1BRE07O0FBRWxCLE1BQUlDLEtBQUssR0FBRyxDQUFaO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNmLFFBQU1DLFFBQVEsR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDbENKLFlBQU0sQ0FBQyxDQUFDQyxLQUFLLEdBQUcsQ0FBVCxJQUFjTCxRQUFRLENBQUNTLE1BQXhCLENBQU47QUFDQUosV0FBSyxJQUFJLENBQVQ7QUFDQSxLQUgyQixFQUd6QixHQUh5QixDQUE1QjtBQUtBLFdBQVEsWUFBTTtBQUNiSyxtQkFBYSxDQUFDSCxRQUFELENBQWI7QUFDQSxLQUZEO0FBR0EsR0FUUSxFQVNOLENBQUNGLEtBQUQsQ0FUTSxDQUFUO0FBWUEsc0JBQ0M7QUFBQSwyQkFDQztBQUFLLFdBQUssRUFBQyxLQUFYO0FBQWlCLFlBQU0sRUFBQyxLQUF4QjtBQUE4QixhQUFPLEVBQUMsYUFBdEM7QUFBQSw2QkFDQztBQUFTLGNBQU0sRUFBRUwsUUFBUSxDQUFDVyxLQUFULENBQWUsQ0FBZixFQUFrQlIsR0FBbEIsRUFBdUJTLElBQXZCLENBQTRCLEdBQTVCLENBQWpCO0FBQW1ELGNBQU0sRUFBQyxPQUExRDtBQUFrRSxZQUFJLEVBQUMsYUFBdkU7QUFBcUYsbUJBQVcsRUFBQyxHQUFqRztBQUFxRyxhQUFLLEVBQUU7QUFBQ0Msb0JBQVUsRUFBRTtBQUFiO0FBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBT0EsQ0F2QkQ7O0dBQU1aLEk7O0tBQUFBLEk7QUF5QlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhdGguNDZhMTJhYmU1MWExM2NkNDc3ZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBzdGFyTGluZSA9IFs1MCwgNjAsIDU1LCA4MCwgNzAsIDgwLCA2MCwgOTAsIDY1LCAxMDUsIDUwLCA5NSwgMzUsIDEwNSwgNDAsIDkwLCAzMCwgODAsIDQ1LCA4MF07XHJcblxyXG5jb25zdCBQYXRoID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtyYW4sIHNldFJhbl0gPSB1c2VTdGF0ZSgwKTtcclxuXHRsZXQgY291bnQgPSAwO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdHNldFJhbigoY291bnQgKyAxKSAlIHN0YXJMaW5lLmxlbmd0aCk7XHJcblx0XHRcdGNvdW50ICs9IDI7XHJcblx0XHR9LCAyNTApO1xyXG5cclxuXHRcdHJldHVybiAoKCkgPT4ge1xyXG5cdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcclxuXHRcdH0pXHJcblx0fSwgW2NvdW50XSk7XHJcblxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PHN2ZyB3aWR0aD0nODAwJyBoZWlnaHQ9JzgwMCcgdmlld0JveD0nMCAwIDQwMCA0MDAnPlxyXG5cdFx0XHRcdDxwb2x5Z29uIHBvaW50cz17c3RhckxpbmUuc2xpY2UoMCwgcmFuKS5qb2luKCcgJyl9IHN0cm9rZT1cImdyZWVuXCIgZmlsbD1cInRyYW5zcGFyZW50XCIgc3Ryb2tlV2lkdGg9XCI1XCIgc3R5bGU9e3t0cmFuc2l0aW9uOiAnYWxsIDFzJ319Lz5cclxuXHRcdFx0PC9zdmc+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXRoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9