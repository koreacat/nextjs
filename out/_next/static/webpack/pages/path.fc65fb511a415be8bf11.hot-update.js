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




var Path = function Path() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Object(_util_getInteger__WEBPACK_IMPORTED_MODULE_2__["getInteger"])(101)),
      averagePos = _useState[0],
      setAveragePos = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var interval = setInterval(function () {
      setAveragePos(Object(_util_getInteger__WEBPACK_IMPORTED_MODULE_2__["getInteger"])(101));
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      width: "800",
      height: "800",
      viewBox: "0 0 100 100",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
        x: "0",
        y: "0",
        width: averagePos / 2,
        height: averagePos / 2,
        style: {
          transition: 'all 1s'
        },
        fill: '#000'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
        x: "0",
        y: "0",
        width: averagePos,
        height: averagePos,
        style: {
          transition: 'all 1s'
        },
        fill: '#fff'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }, _this);
};

_s(Path, "RhfZOqFyh29K8FhCMBmbCirD0J4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BhdGgudHN4Il0sIm5hbWVzIjpbIlBhdGgiLCJ1c2VTdGF0ZSIsImdldEludGVnZXIiLCJhdmVyYWdlUG9zIiwic2V0QXZlcmFnZVBvcyIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidHJhbnNpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUNrQkMsc0RBQVEsQ0FBQ0MsbUVBQVUsQ0FBQyxHQUFELENBQVgsQ0FEMUI7QUFBQSxNQUNYQyxVQURXO0FBQUEsTUFDQ0MsYUFERDs7QUFHbEJDLHlEQUFTLENBQUMsWUFBTTtBQUNmLFFBQU1DLFFBQVEsR0FBR0MsV0FBVyxDQUFDLFlBQU07QUFDbENILG1CQUFhLENBQUNGLG1FQUFVLENBQUMsR0FBRCxDQUFYLENBQWI7QUFDQSxLQUYyQixFQUV6QixJQUZ5QixDQUE1QjtBQUlBLFdBQVEsWUFBTTtBQUNiTSxtQkFBYSxDQUFDRixRQUFELENBQWI7QUFDQSxLQUZEO0FBR0EsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVdBLHNCQUNDO0FBQUEsMkJBQ0M7QUFBSyxXQUFLLEVBQUMsS0FBWDtBQUFpQixZQUFNLEVBQUMsS0FBeEI7QUFBOEIsYUFBTyxFQUFDLGFBQXRDO0FBQUEsOEJBQ0M7QUFBTSxTQUFDLEVBQUMsR0FBUjtBQUFZLFNBQUMsRUFBQyxHQUFkO0FBQWtCLGFBQUssRUFBRUgsVUFBVSxHQUFDLENBQXBDO0FBQXVDLGNBQU0sRUFBRUEsVUFBVSxHQUFDLENBQTFEO0FBQTZELGFBQUssRUFBRTtBQUFDTSxvQkFBVSxFQUFFO0FBQWIsU0FBcEU7QUFBNEYsWUFBSSxFQUFFO0FBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDO0FBQU0sU0FBQyxFQUFDLEdBQVI7QUFBWSxTQUFDLEVBQUMsR0FBZDtBQUFrQixhQUFLLEVBQUVOLFVBQXpCO0FBQXFDLGNBQU0sRUFBRUEsVUFBN0M7QUFBeUQsYUFBSyxFQUFFO0FBQUNNLG9CQUFVLEVBQUU7QUFBYixTQUFoRTtBQUF3RixZQUFJLEVBQUU7QUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQVFBLENBdEJEOztHQUFNVCxJOztLQUFBQSxJO0FBd0JTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXRoLmZjNjVmYjUxMWE0MTViZThiZjExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2dldEludGVnZXJ9IGZyb20gXCIuLi91dGlsL2dldEludGVnZXJcIjtcclxuXHJcbmNvbnN0IFBhdGggPSAoKSA9PiB7XHJcblx0Y29uc3QgW2F2ZXJhZ2VQb3MsIHNldEF2ZXJhZ2VQb3NdID0gdXNlU3RhdGUoZ2V0SW50ZWdlcigxMDEpKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRzZXRBdmVyYWdlUG9zKGdldEludGVnZXIoMTAxKSk7XHJcblx0XHR9LCAxMDAwKTtcclxuXHJcblx0XHRyZXR1cm4gKCgpID0+IHtcclxuXHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcblx0XHR9KVxyXG5cdH0sIFtdKTtcclxuXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8c3ZnIHdpZHRoPSc4MDAnIGhlaWdodD0nODAwJyB2aWV3Qm94PScwIDAgMTAwIDEwMCc+XHJcblx0XHRcdFx0PHJlY3QgeD0nMCcgeT0nMCcgd2lkdGg9e2F2ZXJhZ2VQb3MvMn0gaGVpZ2h0PXthdmVyYWdlUG9zLzJ9IHN0eWxlPXt7dHJhbnNpdGlvbjogJ2FsbCAxcyd9fSBmaWxsPXsnIzAwMCd9Lz5cclxuXHRcdFx0XHQ8cmVjdCB4PScwJyB5PScwJyB3aWR0aD17YXZlcmFnZVBvc30gaGVpZ2h0PXthdmVyYWdlUG9zfSBzdHlsZT17e3RyYW5zaXRpb246ICdhbGwgMXMnfX0gZmlsbD17JyNmZmYnfS8+XHJcblx0XHRcdDwvc3ZnPlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0aDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==