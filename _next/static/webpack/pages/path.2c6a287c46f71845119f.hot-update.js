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
/* harmony import */ var _util_getInteger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/getInteger */ "./src/util/getInteger.ts");


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\src\\pages\\path.tsx",
    _this = undefined,
    _s = $RefreshSig$();



var starLine = [50, 60, 55, 80, 70, 80, 60, 90, 65, 105, 50, 95, 35, 105, 40, 90, 30, 80, 45, 80];

var Path = function Path() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_util_getInteger__WEBPACK_IMPORTED_MODULE_2__["getInteger"])(starLine.length)),
      averagePos = _useState[0],
      setAveragePos = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var interval = setInterval(function () {
      setAveragePos(Object(_util_getInteger__WEBPACK_IMPORTED_MODULE_2__["getInteger"])(starLine.length));
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      width: "800",
      height: "800",
      viewBox: "0 0 400 400",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("polygon", {
        points: starLine.slice(0, 50).join(' '),
        stroke: "green",
        fill: "transparent",
        strokeWidth: "5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }, _this);
};

_s(Path, "GBZWeGlO6Ci+Yn5KqbFakAIdqhw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BhdGgudHN4Il0sIm5hbWVzIjpbInN0YXJMaW5lIiwiUGF0aCIsInVzZVN0YXRlIiwiZ2V0SW50ZWdlciIsImxlbmd0aCIsImF2ZXJhZ2VQb3MiLCJzZXRBdmVyYWdlUG9zIiwidXNlRWZmZWN0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzbGljZSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixFQUF6QixFQUE2QixFQUE3QixFQUFpQyxFQUFqQyxFQUFxQyxHQUFyQyxFQUEwQyxFQUExQyxFQUE4QyxFQUE5QyxFQUFrRCxFQUFsRCxFQUFzRCxHQUF0RCxFQUEyRCxFQUEzRCxFQUErRCxFQUEvRCxFQUFtRSxFQUFuRSxFQUF1RSxFQUF2RSxFQUEyRSxFQUEzRSxFQUErRSxFQUEvRSxDQUFqQjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2tCQyxzREFBUSxDQUFDQyxtRUFBVSxDQUFDSCxRQUFRLENBQUNJLE1BQVYsQ0FBWCxDQUQxQjtBQUFBLE1BQ1hDLFVBRFc7QUFBQSxNQUNDQyxhQUREOztBQUdsQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTUMsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUNsQ0gsbUJBQWEsQ0FBQ0gsbUVBQVUsQ0FBQ0gsUUFBUSxDQUFDSSxNQUFWLENBQVgsQ0FBYjtBQUNBLEtBRjJCLEVBRXpCLElBRnlCLENBQTVCO0FBSUEsV0FBUSxZQUFNO0FBQ2JNLG1CQUFhLENBQUNGLFFBQUQsQ0FBYjtBQUNBLEtBRkQ7QUFHQSxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBV0Esc0JBQ0M7QUFBQSwyQkFDQztBQUFLLFdBQUssRUFBQyxLQUFYO0FBQWlCLFlBQU0sRUFBQyxLQUF4QjtBQUE4QixhQUFPLEVBQUMsYUFBdEM7QUFBQSw2QkFDQztBQUFTLGNBQU0sRUFBRVIsUUFBUSxDQUFDVyxLQUFULENBQWUsQ0FBZixFQUFrQixFQUFsQixFQUFzQkMsSUFBdEIsQ0FBMkIsR0FBM0IsQ0FBakI7QUFBa0QsY0FBTSxFQUFDLE9BQXpEO0FBQWlFLFlBQUksRUFBQyxhQUF0RTtBQUFvRixtQkFBVyxFQUFDO0FBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBT0EsQ0FyQkQ7O0dBQU1YLEk7O0tBQUFBLEk7QUF1QlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhdGguMmM2YTI4N2M0NmY3MTg0NTExOWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Z2V0SW50ZWdlcn0gZnJvbSBcIi4uL3V0aWwvZ2V0SW50ZWdlclwiO1xyXG5cclxuY29uc3Qgc3RhckxpbmUgPSBbNTAsIDYwLCA1NSwgODAsIDcwLCA4MCwgNjAsIDkwLCA2NSwgMTA1LCA1MCwgOTUsIDM1LCAxMDUsIDQwLCA5MCwgMzAsIDgwLCA0NSwgODBdO1xyXG5cclxuY29uc3QgUGF0aCA9ICgpID0+IHtcclxuXHRjb25zdCBbYXZlcmFnZVBvcywgc2V0QXZlcmFnZVBvc10gPSB1c2VTdGF0ZShnZXRJbnRlZ2VyKHN0YXJMaW5lLmxlbmd0aCkpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdHNldEF2ZXJhZ2VQb3MoZ2V0SW50ZWdlcihzdGFyTGluZS5sZW5ndGgpKTtcclxuXHRcdH0sIDEwMDApO1xyXG5cclxuXHRcdHJldHVybiAoKCkgPT4ge1xyXG5cdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcclxuXHRcdH0pXHJcblx0fSwgW10pO1xyXG5cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxzdmcgd2lkdGg9JzgwMCcgaGVpZ2h0PSc4MDAnIHZpZXdCb3g9JzAgMCA0MDAgNDAwJz5cclxuXHRcdFx0XHQ8cG9seWdvbiBwb2ludHM9e3N0YXJMaW5lLnNsaWNlKDAsIDUwKS5qb2luKCcgJyl9IHN0cm9rZT1cImdyZWVuXCIgZmlsbD1cInRyYW5zcGFyZW50XCIgc3Ryb2tlV2lkdGg9XCI1XCIvPlxyXG5cdFx0XHQ8L3N2Zz5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhdGg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=