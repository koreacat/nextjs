webpackHotUpdate_N_E("pages/mobx",{

/***/ "./pages/mobx.tsx":
/*!************************!*\
  !*** ./pages/mobx.tsx ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _store_mobxStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/mobxStore */ "./store/mobxStore.ts");


var _jsxFileName = "C:\\Users\\jgm0531.MIDASIT\\jgmProjects\\cna\\pages\\mobx.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var AnimalInfo = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["observer"])(_c = _s(function (_ref) {
  _s();

  var data = _ref.data;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(mobx_react__WEBPACK_IMPORTED_MODULE_3__["MobXProviderContext"]),
      mobxStore = _React$useContext.mobxStore;

  var type = mobxStore.type,
      age = mobxStore.age;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["type: ", type || data.cat.type]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["age: ", age || data.cat.age]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }, _this);
}, "w1/nfkkfj1XqTw5cn6jL/chABfU="));
_c2 = AnimalInfo;
var mobxStore = new _store_mobxStore__WEBPACK_IMPORTED_MODULE_4__["default"]();

var Mobx = function Mobx(_ref2) {
  var data = _ref2.data;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "mobx"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "mobx",
        content: "mobx"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "mobxa"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(mobx_react__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      mobxStore: mobxStore,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AnimalInfo, {
        data: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 3
  }, _this);
}; //static generation


_c3 = Mobx;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Mobx);

var _c, _c2, _c3;

$RefreshReg$(_c, "AnimalInfo$observer");
$RefreshReg$(_c2, "AnimalInfo");
$RefreshReg$(_c3, "Mobx");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9ieC50c3giXSwibmFtZXMiOlsiQW5pbWFsSW5mbyIsIm9ic2VydmVyIiwiZGF0YSIsIlJlYWN0IiwidXNlQ29udGV4dCIsIk1vYlhQcm92aWRlckNvbnRleHQiLCJtb2J4U3RvcmUiLCJ0eXBlIiwiYWdlIiwiY2F0IiwiTW9ieFN0b3JlIiwiTW9ieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsVUFBVSxHQUFHQywyREFBUSxTQUFDLGdCQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUFBLDBCQUNqQkMsNENBQUssQ0FBQ0MsVUFBTixDQUNyQkMsOERBRHFCLENBRGlCO0FBQUEsTUFDL0JDLFNBRCtCLHFCQUMvQkEsU0FEK0I7O0FBQUEsTUFLL0JDLElBTCtCLEdBS2pCRCxTQUxpQixDQUsvQkMsSUFMK0I7QUFBQSxNQUt6QkMsR0FMeUIsR0FLakJGLFNBTGlCLENBS3pCRSxHQUx5QjtBQU92QyxzQkFDQztBQUFBLDRCQUNDO0FBQUEsMkJBQVlELElBQUksSUFBSUwsSUFBSSxDQUFDTyxHQUFMLENBQVNGLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBRUM7QUFBQSwwQkFBV0MsR0FBRyxJQUFJTixJQUFJLENBQUNPLEdBQUwsQ0FBU0QsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFNQSxDQWIwQixrQ0FBM0I7TUFBTVIsVTtBQWVOLElBQU1NLFNBQVMsR0FBRyxJQUFJSSx3REFBSixFQUFsQjs7QUFDQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxRQUFZO0FBQUEsTUFBVlQsSUFBVSxTQUFWQSxJQUFVO0FBRXhCLHNCQUNDO0FBQUEsNEJBQ0MscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUM7QUFBTSxZQUFJLEVBQUMsTUFBWDtBQUFrQixlQUFPLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBS0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRCxlQU1DLHFFQUFDLG1EQUFEO0FBQVUsZUFBUyxFQUFFSSxTQUFyQjtBQUFBLDZCQUNDLHFFQUFDLFVBQUQ7QUFBWSxZQUFJLEVBQUVKO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFZQSxDQWRELEMsQ0FnQkE7OztNQWhCTVMsSTs7QUE4QlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21vYnguZGUyNThiYjQ2YzcyNzJkYmI4MzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHtNb2JYUHJvdmlkZXJDb250ZXh0LCBvYnNlcnZlcn0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuaW1wb3J0IE1vYnhTdG9yZSBmcm9tIFwiLi4vc3RvcmUvbW9ieFN0b3JlXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuXHJcblxyXG5jb25zdCBBbmltYWxJbmZvID0gb2JzZXJ2ZXIoKHtkYXRhfSkgPT4ge1xyXG5cdGNvbnN0IHsgbW9ieFN0b3JlIH0gPSBSZWFjdC51c2VDb250ZXh0KFxyXG5cdFx0TW9iWFByb3ZpZGVyQ29udGV4dFxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHsgdHlwZSwgYWdlIH0gPSBtb2J4U3RvcmU7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2PnR5cGU6IHt0eXBlIHx8IGRhdGEuY2F0LnR5cGV9PC9kaXY+XHJcblx0XHRcdDxkaXY+YWdlOiB7YWdlIHx8IGRhdGEuY2F0LmFnZX08L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufSk7XHJcblxyXG5jb25zdCBtb2J4U3RvcmUgPSBuZXcgTW9ieFN0b3JlKCk7XHJcbmNvbnN0IE1vYnggPSAoe2RhdGF9KSA9PiB7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+bW9ieDwvdGl0bGU+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT1cIm1vYnhcIiBjb250ZW50PVwibW9ieFwiIC8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PGgxPm1vYnhhPC9oMT5cclxuXHRcdFx0PFByb3ZpZGVyIG1vYnhTdG9yZT17bW9ieFN0b3JlfT5cclxuXHRcdFx0XHQ8QW5pbWFsSW5mbyBkYXRhPXtkYXRhfS8+XHJcblx0XHRcdDwvUHJvdmlkZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn07XHJcblxyXG4vL3N0YXRpYyBnZW5lcmF0aW9uXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGNhdDoge1xyXG5cdFx0XHRcdFx0dHlwZTogJ+uovOy5mO2CqChTdGF0aWMgR2VuZXJhdGlvbiknLFxyXG5cdFx0XHRcdFx0YWdlOiAwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2J4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9