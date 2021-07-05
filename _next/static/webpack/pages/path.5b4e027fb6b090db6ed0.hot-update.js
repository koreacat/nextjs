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
var starLine2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
        points: starLine2.slice(0, count).join(' '),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BhdGgudHN4Il0sIm5hbWVzIjpbInN0YXJMaW5lIiwic3RhckxpbmUyIiwiUGF0aCIsInVzZVN0YXRlIiwicmFuIiwic2V0UmFuIiwiY291bnQiLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsInNsaWNlIiwiam9pbiIsInRyYW5zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixFQUF6QixFQUE2QixFQUE3QixFQUFpQyxFQUFqQyxFQUFxQyxHQUFyQyxFQUEwQyxFQUExQyxFQUE4QyxFQUE5QyxFQUFrRCxFQUFsRCxFQUFzRCxHQUF0RCxFQUEyRCxFQUEzRCxFQUErRCxFQUEvRCxFQUFtRSxFQUFuRSxFQUF1RSxFQUF2RSxFQUEyRSxFQUEzRSxFQUErRSxFQUEvRSxDQUFqQjtBQUNBLElBQUlDLFNBQVMsR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLEVBQXdDLENBQXhDLEVBQTJDLENBQTNDLEVBQThDLENBQTlDLEVBQWlELENBQWpELEVBQW9ELENBQXBELEVBQXVELENBQXZELEVBQTBELENBQTFELENBQWhCOztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxDQUFELENBRFo7QUFBQSxNQUNYQyxHQURXO0FBQUEsTUFDTkMsTUFETTs7QUFFbEIsTUFBSUMsS0FBSyxHQUFHLENBQVo7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTUMsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUNsQ0osWUFBTSxDQUFDLENBQUNDLEtBQUssR0FBRyxDQUFULEtBQWVOLFFBQVEsQ0FBQ1UsTUFBVCxHQUFrQixDQUFqQyxDQUFELENBQU47QUFDQVQsZUFBUyxDQUFDSyxLQUFELENBQVQsR0FBbUJOLFFBQVEsQ0FBQ00sS0FBRCxDQUEzQjtBQUNBQSxXQUFLO0FBQ0wsS0FKMkIsRUFJekIsR0FKeUIsQ0FBNUI7QUFNQSxXQUFRLFlBQU07QUFDYkssbUJBQWEsQ0FBQ0gsUUFBRCxDQUFiO0FBQ0EsS0FGRDtBQUdBLEdBVlEsRUFVTixDQUFDRixLQUFELENBVk0sQ0FBVDtBQWFBLHNCQUNDO0FBQUEsMkJBQ0M7QUFBSyxXQUFLLEVBQUMsS0FBWDtBQUFpQixZQUFNLEVBQUMsS0FBeEI7QUFBOEIsYUFBTyxFQUFDLGFBQXRDO0FBQUEsNkJBQ0M7QUFBUyxjQUFNLEVBQUVMLFNBQVMsQ0FBQ1csS0FBVixDQUFnQixDQUFoQixFQUFtQk4sS0FBbkIsRUFBMEJPLElBQTFCLENBQStCLEdBQS9CLENBQWpCO0FBQXNELGNBQU0sRUFBQyxPQUE3RDtBQUFxRSxZQUFJLEVBQUMsYUFBMUU7QUFBd0YsbUJBQVcsRUFBQyxHQUFwRztBQUF3RyxhQUFLLEVBQUU7QUFBQ0Msb0JBQVUsRUFBRTtBQUFiO0FBQS9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBT0EsQ0F4QkQ7O0dBQU1aLEk7O0tBQUFBLEk7QUEwQlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhdGguNWI0ZTAyN2ZiNmIwOTBkYjZlZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBzdGFyTGluZSA9IFs1MCwgNjAsIDU1LCA4MCwgNzAsIDgwLCA2MCwgOTAsIDY1LCAxMDUsIDUwLCA5NSwgMzUsIDEwNSwgNDAsIDkwLCAzMCwgODAsIDQ1LCA4MF07XHJcbmxldCBzdGFyTGluZTIgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcblxyXG5jb25zdCBQYXRoID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtyYW4sIHNldFJhbl0gPSB1c2VTdGF0ZSgwKTtcclxuXHRsZXQgY291bnQgPSAwO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdHNldFJhbigoY291bnQgKyAxKSAlIChzdGFyTGluZS5sZW5ndGggKyAyKSk7XHJcblx0XHRcdHN0YXJMaW5lMltjb3VudF0gPSBzdGFyTGluZVtjb3VudF07XHJcblx0XHRcdGNvdW50ICsrO1xyXG5cdFx0fSwgMjUwKTtcclxuXHJcblx0XHRyZXR1cm4gKCgpID0+IHtcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcblx0XHR9KVxyXG5cdH0sIFtjb3VudF0pO1xyXG5cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxzdmcgd2lkdGg9JzgwMCcgaGVpZ2h0PSc4MDAnIHZpZXdCb3g9JzAgMCA0MDAgNDAwJz5cclxuXHRcdFx0XHQ8cG9seWdvbiBwb2ludHM9e3N0YXJMaW5lMi5zbGljZSgwLCBjb3VudCkuam9pbignICcpfSBzdHJva2U9XCJncmVlblwiIGZpbGw9XCJ0cmFuc3BhcmVudFwiIHN0cm9rZVdpZHRoPVwiNVwiIHN0eWxlPXt7dHJhbnNpdGlvbjogJ2FsbCAxcyd9fS8+XHJcblx0XHRcdDwvc3ZnPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0aDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==