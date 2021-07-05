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



var Path = function Path() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      ran = _useState[0],
      setRan = _useState[1];

  var count = 0;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var interval = setInterval(function () {
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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M80 80\r A 45 45, 0, 0, 0, 125 125\r L 125 80 Z",
        fill: "green"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M230 80\r A 45 45, 0, 1, 0, 275 125\r L 275 80 Z",
        fill: "red"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M80 230\r A 45 45, 0, 0, 1, 125 275\r L 125 230 Z",
        fill: "purple"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M230 230\r A 45 45, 0, 1, 1, 275 275\r L 275 230 Z",
        fill: "blue"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BhdGgudHN4Il0sIm5hbWVzIjpbIlBhdGgiLCJ1c2VTdGF0ZSIsInJhbiIsInNldFJhbiIsImNvdW50IiwidXNlRWZmZWN0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxDQUFELENBRFo7QUFBQSxNQUNYQyxHQURXO0FBQUEsTUFDTkMsTUFETTs7QUFFbEIsTUFBSUMsS0FBSyxHQUFHLENBQVo7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTUMsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUNsQ0gsV0FBSztBQUNMLEtBRjJCLEVBRXpCLEdBRnlCLENBQTVCO0FBSUEsV0FBUSxZQUFNO0FBQ2JJLG1CQUFhLENBQUNGLFFBQUQsQ0FBYjtBQUNBLEtBRkQ7QUFHQSxHQVJRLEVBUU4sQ0FBQ0YsS0FBRCxDQVJNLENBQVQ7QUFXQSxzQkFDQztBQUFBLDJCQUNDO0FBQUssV0FBSyxFQUFDLEtBQVg7QUFBaUIsWUFBTSxFQUFDLEtBQXhCO0FBQThCLGFBQU8sRUFBQyxhQUF0QztBQUFBLDhCQUNDO0FBQU0sU0FBQyxFQUFDLGlEQUFSO0FBRW1CLFlBQUksRUFBQztBQUZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFJQztBQUFNLFNBQUMsRUFBQyxrREFBUjtBQUVtQixZQUFJLEVBQUM7QUFGeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpELGVBT0M7QUFBTSxTQUFDLEVBQUMsbURBQVI7QUFFb0IsWUFBSSxFQUFDO0FBRnpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRCxlQVVDO0FBQU0sU0FBQyxFQUFDLG9EQUFSO0FBRW9CLFlBQUksRUFBQztBQUZ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBa0JBLENBakNEOztHQUFNSixJOztLQUFBQSxJO0FBbUNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXRoLjkyMWE4MzdmNDYzNzYwMWNjMjBjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IFBhdGggPSAoKSA9PiB7XHJcblx0Y29uc3QgW3Jhbiwgc2V0UmFuXSA9IHVzZVN0YXRlKDApO1xyXG5cdGxldCBjb3VudCA9IDA7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0Y291bnQgKys7XHJcblx0XHR9LCAyNTApO1xyXG5cclxuXHRcdHJldHVybiAoKCkgPT4ge1xyXG5cdFx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcclxuXHRcdH0pXHJcblx0fSwgW2NvdW50XSk7XHJcblxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PHN2ZyB3aWR0aD0nODAwJyBoZWlnaHQ9JzgwMCcgdmlld0JveD0nMCAwIDQwMCA0MDAnPlxyXG5cdFx0XHRcdDxwYXRoIGQ9XCJNODAgODBcclxuICAgICAgICAgICBBIDQ1IDQ1LCAwLCAwLCAwLCAxMjUgMTI1XHJcbiAgICAgICAgICAgTCAxMjUgODAgWlwiIGZpbGw9XCJncmVlblwiLz5cclxuXHRcdFx0XHQ8cGF0aCBkPVwiTTIzMCA4MFxyXG4gICAgICAgICAgIEEgNDUgNDUsIDAsIDEsIDAsIDI3NSAxMjVcclxuICAgICAgICAgICBMIDI3NSA4MCBaXCIgZmlsbD1cInJlZFwiLz5cclxuXHRcdFx0XHQ8cGF0aCBkPVwiTTgwIDIzMFxyXG4gICAgICAgICAgIEEgNDUgNDUsIDAsIDAsIDEsIDEyNSAyNzVcclxuICAgICAgICAgICBMIDEyNSAyMzAgWlwiIGZpbGw9XCJwdXJwbGVcIi8+XHJcblx0XHRcdFx0PHBhdGggZD1cIk0yMzAgMjMwXHJcbiAgICAgICAgICAgQSA0NSA0NSwgMCwgMSwgMSwgMjc1IDI3NVxyXG4gICAgICAgICAgIEwgMjc1IDIzMCBaXCIgZmlsbD1cImJsdWVcIi8+XHJcblx0XHRcdDwvc3ZnPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0aDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==